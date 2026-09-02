# Athlete and Guardian Profile Access — Data-Model Changes

## Purpose

Define only the changes and additions required to support `06-athlete-guardian-profile-access-product-requirements.md`. Existing Slice 1 tables remain unchanged unless explicitly listed below.

## 1. Reconcile `profile_users` Lifecycle

Use `relationship_status` as the single relationship-lifecycle source of truth.

Required changes:

- Remove `is_active`, or make it a generated read-only mirror of `relationship_status = active`; it must not remain independently editable.
- Do not create a pending athlete `profile_users` row before invitation acceptance. Pending/invited state belongs to `invitations`.
- Use `active` for a connected relationship, `revoked` for an explicitly revoked relationship, and `ended` for access that ended through a lifecycle event such as adulthood.
- Do not use `transferred` to represent the guardian after the athlete joins. The guardian relationship remains active and becomes view/supervision-only through authorization.
- Add `ended_at` and `ended_reason` so the end of automatic guardian access is auditable.
- Keep `activated_at` as the evidence that the invited athlete or guardian joined.
- Keep the guardian's relationship role as `guardian`; do not change it to `viewer` after athlete activation.
- Free-form `permissions` must not override age, management, legal, verification, safety, visibility, or account rules. It should not be the source of truth for the access matrix.

Suggested delta:

```sql
alter table profile_users
  drop column if exists is_active,
  add column if not exists ended_at timestamptz,
  add column if not exists ended_reason text;
```

If the current `relationship_status` enum cannot be safely migrated in place, replace it through an approved migration so current rows are preserved and only valid lifecycle values remain.

## 2. Derive Athlete-Joined State

Do not add an `athlete_joined` boolean.

An athlete has joined when the Athlete Profile has a `profile_users` row satisfying all of the following:

```text
role = athlete
relationship_status = active
activated_at is not null
```

This active relationship is the source of truth used by authorization and management transitions.

## 3. Apply Existing `management_mode` to the New Lifecycle

No new management-mode table is required. Reuse:

- `guardian_managed`: athlete has not joined; guardian edits ordinary content.
- `supervised`: athlete has joined and edits ordinary content; guardian views and performs assigned supervision actions.
- `independent`: athlete manages ordinary content and applicable visibility. For ages 16–17, this requires the accepted two-person decision; adults also use independent management.

`communication_mode` remains separate and must not be used as a substitute for profile-management authority.

## 4. Add `profile_management_events`

Add one append-only table to preserve management-transition history.

```sql
create type profile_management_event_type as enum (
  'profile_created',
  'athlete_invited',
  'athlete_joined',
  'management_transferred_to_athlete',
  'mode_changed',
  'adult_transition',
  'guardian_access_ended',
  'support_recovery'
);

create table profile_management_events (
  id uuid primary key default gen_random_uuid(),
  athlete_profile_id uuid not null references athlete_profiles(id) on delete cascade,
  event_type profile_management_event_type not null,
  previous_mode management_mode,
  new_mode management_mode,
  actor_user_id uuid references app_users(id),
  actor_role profile_user_role,
  affected_user_id uuid references app_users(id),
  related_invitation_id uuid references invitations(id),
  reason_code text,
  effective_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);
```

`actor_user_id` may be null only for an identified system transition such as the daily adult-transition job.

## 5. Add Cross-Table Invariants

Enforce through constraints, deferred triggers, restricted service operations, or an equivalent transactional mechanism:

- Under-14 Athlete Profiles cannot have an active athlete ProfileUser relationship.
- `guardian_managed` requires an active primary guardian and no activated athlete relationship.
- `supervised` requires an activated athlete relationship and an active primary guardian.
- Independent mode for ages 16–17 requires an activated athlete relationship and accepted two-person decision evidence.
- At most one active athlete relationship exists per Athlete Profile.
- At most one active primary guardian controls supervision in the MVP.
- Invitation acceptance never creates a duplicate Athlete Profile or AthleteSportProfile.
- Relationship removal, permission withdrawal, visibility changes, management transfer, and account deletion remain separate records and statuses.

## 6. Add Action-Level Authorization

No new per-profile permissions table is required for the MVP. Authorization must be derived from:

- the actor's active ProfileUser relationship and role;
- the athlete's derived age band;
- current management mode;
- whether the athlete relationship has activated;
- the requested action; and
- separate legal, verification, safety, visibility, and account gates where applicable.

The authorization layer must distinguish at least:

- `view_profile`;
- `edit_ordinary_content`;
- `enable_visibility`;
- `disable_visibility`;
- `perform_guardian_permission`;
- `manage_relationships_or_mode`;
- `request_identity_correction`;
- `request_profile_or_account_deletion`; and
- `manage_own_credentials`.

General write access to an Athlete Profile row must not grant protected field or action access. RLS may enforce row access; protected actions should use restricted functions or service operations that evaluate the same policy.

### Required authorization results

| State and actor | View | Edit ordinary content | Enable visibility | Disable visibility | Guardian permission actions |
|---|---:|---:|---:|---:|---:|
| Under 14 — guardian | Yes | Yes | Yes, when eligible | Yes | Yes |
| Ages 14–17 unjoined — guardian | Yes | Yes | Yes, when eligible | Yes | Yes |
| Ages 14–15 joined — athlete | Yes | Yes | No | No | No |
| Ages 14–15 joined — guardian | Yes | No | Yes, when eligible | Yes | Own/applicable actions |
| Ages 16–17 supervised — athlete | Yes | Yes | No | No | No |
| Ages 16–17 supervised — guardian | Yes | No | Yes, when eligible | Yes | Own/applicable actions |
| Ages 16–17 independent — athlete | Yes | Yes | Yes, when eligible | Yes | Own actions only |
| Ages 16–17 independent — guardian | Yes | No | No | Yes | Own/applicable actions |
| Adult — athlete | Yes | Yes | Yes, when eligible | Yes | Own actions only |

Messaging, private-contact, document-request, and document-sharing permissions are added in their own slices and must not expand ordinary profile-edit authority.

## 7. Make Invitation Acceptance an Atomic Management Transfer

When an athlete aged 14–17 accepts an invitation, one transaction must:

1. Validate and consume the invitation for the exact authenticated email.
2. Record the athlete's own required account/legal actions separately.
3. Create the active athlete ProfileUser relationship with `activated_at`.
4. Change `management_mode` from `guardian_managed` to `supervised`.
5. Keep the guardian relationship active while authorization removes ordinary editing.
6. Append `athlete_joined` and `management_transferred_to_athlete` events.

Athlete suspension, inactivity, or loss of access must not automatically return ordinary editing authority to the guardian.

## 8. Add the Adult Transition

Extend the existing age-transition job:

### Athlete relationship is active

1. Recalculate the athlete as an adult and use independent adult management.
2. End automatic guardian access using `relationship_status`, `ended_at`, and `ended_reason`.
3. Append `adult_transition` and `guardian_access_ended` events.
4. Make effective Sport Profile visibility private without deleting the previous preference or profile data.
5. Keep adult legal actions, adult identity verification, visibility preference, and effective visibility as separate source records or states. Visibility may be enabled again only through the explicit adult flow defined in Spec 08.

The access-ending transition takes effect on the 18th birthday without a grace period. Authorization must stop accepting the former active guardian relationship immediately; retaining it as history must not continue profile access.

### Athlete has not joined

1. Keep every Sport Profile private or suspended.
2. End guardian minor-based management access.
3. Require the athlete to claim/activate their account before private management can continue.
4. Require applicable adult legal actions and adult identity verification before visibility can be enabled; do not automatically create adult consent or continue guardian management.

Claiming the account restores private management. Adult identity verification is a visibility requirement and must not be required merely to edit the private profile.

The adult may later grant voluntary access through a separate future access role; do not reuse the expired minor-based guardian authority.
