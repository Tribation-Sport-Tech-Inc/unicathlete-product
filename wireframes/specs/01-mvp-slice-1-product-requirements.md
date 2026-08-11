# MVP Slice 1 — Product Requirements

## Purpose

This is the source of truth for product behavior that must not be inferred by the Lead Developer. Slice 1 is an internal development milestone, not a public release. Technical architecture and implementation decisions belong to Engineering.

## Slice Outcome

Slice 1 includes:

- account creation for Under 14, ages 14–15, ages 16–17, and adults 18+, including guardian and athlete relationship paths;
- basic restricted scout account creation;
- a minimal internal Account Status validation screen.

Athlete profile onboarding, scout onboarding, and real identity verification are not included.

## Account and Profile Rules

- A `User` is one person's login identity.
- Athletes and guardians never share credentials.
- An athlete profile may connect to a guardian user, athlete user, or both.
- The connection must preserve each person's role and relationship status.
- Scout is the only professional profile type in Slice 1.
- The MVP UI supports one active profile path, but the underlying product must not prevent a user from having multiple profile relationships later.

## Age-Based Paths

Date of birth is the source of truth. Production calculates the age band; the age buttons in the wireframe exist only for review.

| Age | Who may start | Athlete login | Guardian rule | Mode |
|---|---|---|---|---|
| Under 14 | Guardian only | None | Required | Guardian managed |
| 14–15 | Athlete or guardian | Required when athlete starts; optional when guardian starts | Required | Guardian managed until athlete joins; then supervised |
| 16–17 | Athlete or guardian | Required when athlete starts or for independent mode; optional when guardian starts | Required | Guardian managed until athlete joins; then supervised by default |
| 18+ | Athlete | Required | Not required | Independent adult |

Additional rules:

- Under 14: the guardian creates and manages the athlete profile; the athlete has no login.
- Ages 14–15, athlete starts: guardian invitation and approval are required.
- Ages 14–15, guardian starts: athlete invitation is optional during signup and may be sent later.
- Ages 16–17, athlete starts: guardian invitation and approval are required.
- Ages 16–17, guardian starts: athlete invitation is optional during signup and may be sent later. The profile remains guardian managed and supervised until the athlete joins.
- Ages 16–17 may choose supervised mode or request independent communication only after the athlete has an activated login. Independent communication must never activate from age alone or from one person's selection: the other person must explicitly accept it, otherwise the result is supervised.
- Independent communication covers eligible scout messages, information-request responses, requested media/documents, and related recruiting follow-up. Guardian connection remains in place.
- Adults create and manage their own account and athlete profile without a guardian.

Profile-management authority before and after athlete invitation acceptance is defined in `06-athlete-guardian-profile-access-product-requirements.md`.

## Email Verification and Invitations

- Normal signup requires email verification before account activation.
- Invitations created during signup are sent only after the starter verifies their email.
- A valid invitation link may verify only the exact invited email during account creation or sign-in.
- Changing the email requires separate verification.
- An invitation belongs to one email, role, and existing athlete profile.
- Invitation links are single-use and time-limited; resending invalidates the previous link.
- An existing user signs in and accepts the relationship.
- A new user creates credentials, completes their own account acknowledgments, and accepts the relationship.
- Invitation acceptance connects the recipient to the existing athlete profile; it must never create a duplicate athlete profile.
- A wrong account must not receive athlete information.

Engineering determines the token design and recommends an expiry duration.

## Starting Statuses

### Athlete

- Every athlete profile starts as a private draft.
- Account creation never makes an athlete visible to scouts.
- No visibility choice appears in Slice 1.
- Guardian/adult identity verification is `not started`, with no provider, upload, or verification action.
- Guardian authority is asserted through the relationship; it is not represented as verified.
- For ages 16–17, communication status is supervised, independent pending the other person's acceptance, or independent accepted.

### Scout

- Account status is restricted.
- Onboarding, identity verification, and organization-affiliation verification are separate processes and are `not started`.
- Email verification is separate from identity verification and organization-affiliation verification.
- The identity-verification provider and manual organization-affiliation workflow are unavailable in Slice 1.
- Athlete access, discovery, messaging, saved athletes, evaluations, and workspace access are unavailable.

## Legal Records

- Each login owner agrees to the Terms of Use and acknowledges the Privacy Notice applicable to their account.
- Terms agreement, Privacy Notice acknowledgment, guardian authority assertion, profile creation/management permission, and verification status remain distinct.
- A 16–17 independent-communication decision is purpose-specific, requires both people, and remains distinct from the general account acknowledgments.
- Slice 1 records these actions directly in UnicAthlete; no consent provider is assumed.
- Current legal wording is placeholder content and must not be treated as acceptance of later approved documents.

See `02-legal-consent-product-requirements.md` for the required evidence and future flexibility.

## Account Status Destination

Slice 1 ends on a minimal Account Status screen so the internal team can validate the account, relationship, access, and verification states before later slices exist. This is an internal development endpoint, not a planned production destination and not the athlete or scout profile.

In the complete MVP, the relevant status information and reusable status components will live in the appropriate profile/account settings or setup experience. Final production post-signup navigation will be defined with the later onboarding slice.

Athlete/guardian status must identify:

- private-draft status and unavailable scout visibility;
- connected, invited, or pending relationships;
- whether the profile is guardian managed because the athlete has not joined, or athlete managed after activation;
- email-verification status;
- guardian/adult identity verification as `not started`;
- the current 16–17 communication status, when applicable;
- the next currently available action.

Scout status must identify:

- restricted account status;
- email-verification status;
- onboarding, identity verification, and organization-affiliation verification as `not started`;
- athlete access as unavailable.

## Out of Scope

- Athlete profile questions or completeness
- Athlete publication or visibility controls
- Scout onboarding, identity-verification workflow, or organization-affiliation-verification workflow
- Real identity, guardian, age, or Scout organization-affiliation verification
- Provider-specific verification UI
- Multiple-profile management UI
- Discovery, messaging, requests, media, documents, evaluations, or comparisons
- Scout or organization workspaces
- Payments or subscriptions
- Age-transition workflows
- Final legal documents
