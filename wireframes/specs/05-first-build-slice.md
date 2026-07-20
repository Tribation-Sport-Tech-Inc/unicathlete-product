# First Build Slice

## Purpose

This document defines the first technical build slice for UnicAthlete MVP.

The goal is not to build the full platform yet. The goal is to prove the account/profile foundation that the rest of the platform depends on:

- a user can create the correct profile type
- an athlete profile can be connected to one or more users
- guardian and athlete users have separate login identities
- age, consent, verification, and visibility states can control access safely
- the platform model remains open for future profile types and organization features

## Slice Name

```text
Athlete Account Creation + Profile Relationship Foundation
```

## Why This Slice Comes First

This slice should come before scout CRM, messaging, discovery, saved athletes, and pipeline work because it tests the riskiest structural rule of the platform:

```text
One AthleteProfile can have multiple connected Users with different roles, permissions, consent states, and age-based access modes.
```

If this foundation is wrong, later features become expensive to rebuild. If it is right, the platform can scale to:

- minor athletes with guardians
- adult athletes
- professional / scout accounts
- future fan profiles
- future guardian dashboards
- future organization workspaces
- future permissioned collaboration

## Included In This Slice

### Account Entry

- Show profile type choice.
- Athlete Profile path is active.
- Professional / Scout Profile path creates only a thin placeholder record.
- Future profile types are not shown as active choices.

### Athlete Date Of Birth And Age Band

- Collect athlete name.
- Collect athlete date of birth.
- Calculate age band from date of birth.
- Do not treat wireframe age-band buttons as real product behavior.

Age bands:

```text
under_14
14_15
16_17
adult
```

### Core Account / Profile Records

Create and connect the minimum records needed for:

- `User`
- `Profile`
- `ProfileUser`
- `AthleteProfile`
- `ProfessionalProfile` placeholder

### Under 14 Foundation

- Guardian creates/manages the athlete profile.
- Athlete does not receive an independent login in MVP.
- Guardian user is connected to the athlete profile through `ProfileUser`.
- Management mode is `guardian_managed`.
- Profile stays draft/limited until required consent, verification, readiness, and visibility rules are satisfied.

### Age 14-15 Foundation

Support both product paths at the state/model level:

- athlete starts signup and guardian approves through email
- guardian starts signup and may invite athlete now or later

Required foundation:

- athlete and guardian must be separate `User` accounts when both exist
- both users connect to the same `AthleteProfile`
- management mode is `supervised`
- athlete can have login only when invited/activated
- sensitive actions require guardian approval

### Age 16-17 Foundation

Support both product paths at the state/model level:

- athlete starts signup and guardian approves through email
- guardian starts signup and invites athlete

Required foundation:

- guardian remains connected until adult transfer
- communication mode can be supervised or independent with guardian consent
- independent communication is never enabled automatically at 16
- supervised mode is the fallback if either side does not confirm independent mode

### Adult 18+ Foundation

- Adult athlete creates and manages their own account.
- No guardian relationship is required for new adult athlete accounts.
- Adult account can remain draft/limited while email verification or adult ID verification is pending.

### Consent And Verification Placeholder States

Build state placeholders, not full third-party integration.

Include:

- guardian consent status
- guardian ID verification status
- adult athlete ID verification status
- provider reference fields as nullable placeholders
- timestamps and version fields for future audit

Third-party provider integration is out of this slice, but the model should be ready for it.

### Draft / Visibility Lock

Account creation does not make an athlete scout-visible.

The slice should support:

```text
profile_visibility_status:
- draft
- limited
- scout_visible
- hidden
```

Scout visibility should be locked until required readiness, consent, verification, and visibility-setting rules are satisfied.

### Thin Professional / Scout Placeholder

The first slice should include only enough Professional Profile functionality to prove the profile type architecture.

Included:

- choose Professional Profile
- create `User`
- create `ProfessionalProfile`
- professional type = `scout`
- verification status = `pending_scout_verification`

Not included:

- scout workspace
- discovery
- projects
- messaging
- athlete access

## Explicitly Excluded From This Slice

Do not build these yet:

- full scout onboarding
- scout workspace
- organization workspaces
- organization collaboration
- athlete discovery/search
- saved athletes
- pipeline
- evaluations
- comparison
- scout-athlete messaging
- information requests
- media uploads
- document storage
- payment/subscription logic
- real third-party consent/ID verification integration
- full admin dashboard
- fan profile
- guardian dashboard
- team collaboration

These features should be modeled with future-safe fields only where needed, not implemented.

## User Flows Covered

### Under 14 Athlete

```text
Create Account
-> Choose Athlete Profile
-> Enter athlete name + date of birth
-> System calculates age_band = under_14
-> Guardian account details
-> Guardian consent placeholder
-> Guardian verification placeholder
-> Create guardian User
-> Create AthleteProfile
-> Create ProfileUser relationship
-> Set management_mode = guardian_managed
-> Profile remains draft/limited until required conditions are met
```

### Age 14-15 Athlete Starts

```text
Create Account
-> Choose Athlete Profile
-> Enter athlete name + date of birth
-> System calculates age_band = 14_15
-> Athlete chooses "I am the athlete"
-> Collect athlete email/password
-> Collect guardian name/email/relationship
-> Create athlete User
-> Create AthleteProfile
-> Create athlete ProfileUser relationship
-> Create pending guardian relationship / invitation state
-> Set management_mode = supervised_pending_guardian
-> Profile remains draft/limited until guardian consent and verification requirements are met
```

### Age 14-15 Guardian Starts

```text
Create Account
-> Choose Athlete Profile
-> Enter athlete name + date of birth
-> System calculates age_band = 14_15
-> Guardian chooses "I am a parent / guardian"
-> Collect guardian account details
-> Optional athlete email for invitation
-> Create guardian User
-> Create AthleteProfile
-> Create guardian ProfileUser relationship
-> Create pending athlete invitation if athlete email is provided
-> Set management_mode = supervised
-> Profile remains draft/limited until required conditions are met
```

### Age 16-17 Athlete Starts

```text
Create Account
-> Choose Athlete Profile
-> Enter athlete name + date of birth
-> System calculates age_band = 16_17
-> Athlete chooses "I am the athlete"
-> Collect athlete email/password
-> Collect guardian name/email/relationship
-> Athlete selects requested communication mode
-> Create athlete User
-> Create AthleteProfile
-> Create athlete ProfileUser relationship
-> Create pending guardian relationship / consent state
-> Set communication_mode based on confirmed state
-> Default/fallback communication_mode = supervised_1617
```

### Age 16-17 Guardian Starts

```text
Create Account
-> Choose Athlete Profile
-> Enter athlete name + date of birth
-> System calculates age_band = 16_17
-> Guardian chooses "I am a parent / guardian"
-> Collect guardian account details
-> Collect athlete email for activation invitation
-> Guardian selects requested communication mode
-> Create guardian User
-> Create AthleteProfile
-> Create guardian ProfileUser relationship
-> Create pending athlete invitation
-> Set communication_mode based on confirmed state
-> Default/fallback communication_mode = supervised_1617
```

### Adult 18+ Athlete

```text
Create Account
-> Choose Athlete Profile
-> Enter athlete name + date of birth
-> System calculates age_band = adult
-> Collect athlete email/password
-> Adult consent placeholder
-> Adult verification placeholder
-> Create athlete User
-> Create AthleteProfile
-> Create athlete ProfileUser relationship
-> Set management_mode = independent_adult
-> Profile remains draft/limited until required conditions are met
```

### Professional / Scout Placeholder

```text
Create Account
-> Choose Professional Profile
-> Collect basic account details
-> Create User
-> Create ProfessionalProfile
-> Set professional_type = scout
-> Set verification_status = pending_scout_verification
-> Do not grant athlete discovery/contact access yet
```

## Core Data Objects Required

### User

Account/auth identity. Owns login credentials.

Minimum fields:

```text
id
email
password_hash / auth_provider_reference
email_verified_at
created_at
updated_at
```

### Profile

Shared base record for role-specific product identities.

Minimum fields:

```text
id
profile_type
created_at
updated_at
```

Profile types:

```text
athlete
professional
```

Future profile types should be possible without replacing the account model.

### ProfileUser

Relationship between a `User` and a `Profile`.

Minimum fields:

```text
id
profile_id
user_id
relationship_role
permission_role
status
created_at
updated_at
```

Relationship roles:

```text
athlete
guardian
professional_owner
```

### AthleteProfile

Athlete product identity connected to a base `Profile`.

Minimum fields:

```text
id
profile_id
athlete_name
date_of_birth
age_band
management_mode
communication_mode
profile_visibility_status
profile_readiness_status
created_at
updated_at
```

### ProfessionalProfile

Professional product identity connected to a base `Profile`.

Minimum fields:

```text
id
profile_id
professional_type
verification_status
created_at
updated_at
```

### ConsentRecord

Record of consent state and future provider references.

Minimum fields:

```text
id
profile_id
actor_user_id
consent_type
consent_status
consent_version
privacy_policy_version
terms_version
provider_reference
created_at
approved_at
withdrawn_at
```

### VerificationRecord

Record of identity/age/professional verification state.

Minimum fields:

```text
id
profile_id
user_id
verification_type
verification_status
provider_reference
verified_at
expires_at
created_at
updated_at
```

## Core States / Enums

### age_band

```text
under_14
14_15
16_17
adult
```

Age band is derived from date of birth. It should not be user-editable truth.

### management_mode

```text
guardian_managed
supervised
supervised_pending_guardian
independent_with_guardian_connection
independent_adult
```

### communication_mode

```text
guardian_only
guardian_approval_required
supervised_1617
independent_with_guardian_consent
independent_adult
```

### consent_status

```text
not_required
pending
approved
declined
withdrawn
expired
```

### verification_status

```text
not_required
pending
verify_later
verified
failed
expired
recheck_required
```

### profile_visibility_status

```text
draft
limited
scout_visible
hidden
```

### professional_type

```text
scout
```

Future professional types should not require a new auth model.

### professional_verification_status

```text
pending_scout_verification
verified
rejected
suspended
```

## Acceptance Criteria

The first slice is done when:

- The platform can create a `User`.
- The platform can create a base `Profile`.
- The platform can create an `AthleteProfile` connected to a `Profile`.
- The platform can create a `ProfessionalProfile` placeholder connected to a `Profile`.
- The platform can create `ProfileUser` relationships.
- Date of birth calculates the correct age band.
- The real build does not rely on manual age-band buttons.
- Under-14 account creation creates a guardian-managed athlete profile.
- Under-14 athlete login is not enabled.
- Age 14-15 supports separate athlete and guardian user relationships.
- Age 14-15 defaults to supervised access.
- Age 16-17 supports supervised and independent-with-consent communication states.
- Age 16-17 independent mode is not enabled automatically.
- Adult 18+ account creation creates an independent athlete profile.
- Consent and verification statuses can be stored as placeholders.
- Athlete profiles remain draft/limited until required visibility conditions are satisfied.
- Professional/scout placeholder can be created with `pending_scout_verification`.
- The implementation does not grant scout discovery/contact access in this slice.

## Open Questions

These do not block modeling the first slice, but they should be resolved before deeper implementation:

- Which third-party provider will handle guardian consent and ID verification?
- Which third-party provider will handle adult athlete ID verification?
- What is the final legal wording for guardian consent?
- What is the final legal wording for adult athlete consent?
- What exactly counts as scout verification in the MVP?
- Can unverified scouts create accounts but not view/contact athletes?
- What minimum athlete profile readiness threshold is required for scout visibility?
- Which athlete fields are sensitive vs non-sensitive in the first editable profile?
- Which email provider will send guardian approval and athlete invitation links?
- What admin tools are required for manual scout approval and support?

## Related Wireframes And Specs

- `../signup.html`
- `../index.html`
- `03-age-based-athlete-accounts.md`
- `04-athlete-account-flow-schema.md`

## Suggested ClickUp Task

```text
Task title:
[Decision] Define First Build Slice Scope

Label:
decision

Priority:
High

Status:
Ready For Review after this file is reviewed with the Lead Developer

Description:
Review and approve specs/05-first-build-slice.md as the first technical build slice. Confirm what is included, what is excluded, and what the Lead Developer should estimate first.
```
