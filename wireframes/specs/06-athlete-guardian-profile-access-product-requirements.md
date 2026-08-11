# Athlete and Guardian Profile Access — Product Requirements

## Purpose

Define who may manage, view, and supervise an Athlete Profile and its Sport Profiles as the athlete moves from a guardian-managed profile to their own account. This document is the source of truth for profile-management authority; feature-specific messaging, document, media, legal, and visibility rules may add narrower requirements without granting broader profile access.

## Core Model

- Under 14, the guardian manages the profile and the athlete has no login.
- From ages 14–17, the athlete login is optional unless the athlete starts the account or requests independent mode.
- Before the athlete joins, the guardian manages the private profile.
- After the athlete joins, the athlete becomes the ordinary-content editor and the guardian moves to view and supervision access.
- Athlete and guardian accounts never share credentials.
- The guardian remains identified as a guardian. View-only profile access is a permission state, not a change to a generic `viewer` relationship role.
- The same Athlete Profile and Sport Profiles continue through every transition; joining must never create duplicate profiles.

## Access Matrix

| Account state | Ordinary profile content | Visibility and guardian permissions |
|---|---|---|
| Under 14 | Guardian edits | Guardian controls |
| Ages 14–17, athlete has not joined | Guardian edits | Guardian controls |
| Ages 14–15, athlete has joined | Athlete edits; guardian views | Guardian controls visibility and guardian-required permissions |
| Ages 16–17, supervised, athlete has joined | Athlete edits; guardian views | Guardian controls visibility and guardian-required permissions |
| Ages 16–17, independent, athlete has joined | Athlete edits independently; guardian views | Athlete may enable visibility; athlete or guardian may make it private; guardian manages only their own required permissions |
| Adult 18+ | Athlete edits | Athlete controls |

Independent mode requires an activated athlete login and the applicable two-person decision. A guardian-managed profile without an athlete login remains supervised.

## Guardian-Started Profile and Athlete Joining

- A guardian may create and manage the initial private draft for an athlete aged 14–17 without requiring the athlete to join immediately.
- The guardian may invite the athlete during signup or later.
- Before invitation acceptance, the guardian may complete onboarding and edit ordinary profile content.
- Invitation acceptance connects the athlete User to the existing Athlete Profile.
- The joining athlete completes their own applicable account acknowledgments; the invitation link does not itself record agreement, consent, or permission.
- After activation, the athlete becomes the ordinary-content editor and the guardian's ordinary editing access ends.
- Information entered by the guardian remains available for the athlete to review and edit.
- The guardian cannot remove an activated athlete to regain ordinary editing access.
- Suspension, loss of access, or inactivity of the athlete account must not automatically return editing authority to the guardian; recovery requires a defined support/account process.

## Ordinary Profile Content

For an activated athlete aged 14 or older, ordinary editable content includes:

- city, country of residence, citizenship, languages, profile photo, education, and measurements;
- Soccer recruiting category, positions, preferred foot, and player summary;
- playing status, TeamSeasons, playing history, statistics, and achievements;
- recruiting availability, target college start, destination interest, and coach-reference status; and
- later profile media or document-library content only as defined by the applicable feature specification.

## Protected Actions

Ordinary profile access does not grant authority to:

- directly change date of birth or legal identity information;
- manage guardian relationships, profile-management mode, or supervision mode;
- act for another User's Terms, Privacy Notice, consent, or product-permission decision;
- control another User's email, password, recovery, or authentication settings;
- enable visibility when the access matrix assigns that action to the guardian;
- approve messaging, private-contact sharing, document sharing, or other external interaction unless a later feature specification grants that action; or
- delete or transfer an account/profile outside its approved age-specific process.

Date-of-birth and legal-name corrections use an audited exception process. Each login owner controls their own credentials and account acknowledgments.

## Visibility and Withdrawal

- Under 14, guardian-managed ages 14–17, joined ages 14–15, and joined supervised ages 16–17: the guardian controls whether an eligible Sport Profile is visible or private.
- Joined independent ages 16–17: the athlete may enable visibility after every applicable gate passes; the athlete or guardian may make the Sport Profile private.
- Adults: the athlete controls visibility.
- A guardian's ability to make an independent minor's profile private is a safety action, not authority to enable visibility or edit content.
- Turning visibility off is separate from withdrawing a permission or consent.
- A person may withdraw only an applicable permission or consent action they personally provided.
- Withdrawal of a required action immediately blocks the affected visibility or feature until a new valid action is collected, if permitted.

Visibility remains subject to Recruiter-Ready, verification, permission, safety, account, and scout-access gates defined in the Sport Profile specification.

## Future Feature Boundaries

- Slice 2 implements private profile access and ordinary editing only; production visibility and scout access remain outside the slice.
- Messaging permissions, private-contact sharing, document requests/sharing, and their guardian-approval rules are defined in their own slices.
- Ages 14–15 and supervised ages 16–17 may require guardian approval for those external interactions.
- Independent ages 16–17 do not use routine guardian approval unless a separate legal or safety requirement applies.
- Profile visibility never grants messaging, document, private-contact, or other access automatically.

## Adult Transition

- Automatic minor-based guardian access ends when the athlete becomes an adult.
- The transition must be explicit, auditable, and communicated; it must not convert an earlier guardian action into adult consent or permission.
- If the athlete has not joined by age 18, the profile remains private or suspended and the guardian cannot continue managing it as a minor profile.
- The athlete must claim/activate their account and complete applicable adult account actions before continued management or visibility.
- The adult athlete may later grant another person voluntary access through a separate role or invitation model.

## Authorization and Audit Requirements

- Authorization is derived from the actor's active ProfileUser relationship, role, athlete age band, management/join state, and requested action.
- General row access must not grant protected field or action access.
- Flexible permission overrides must not bypass age, legal, guardian, verification, safety, or account rules.
- Store whether the athlete has joined and when management authority transferred.
- Record actor, role, previous value, new value, and timestamp for management-state, relationship, visibility, and protected-action changes.
- Age transitions and join transitions must update authorization atomically so two people do not retain conflicting ordinary-edit authority.

