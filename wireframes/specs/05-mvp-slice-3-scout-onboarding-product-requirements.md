# MVP Slice 3 — Scout Onboarding and Manual Affiliation Verification

## Status

Product definition for Scout onboarding, affiliation evidence, restricted access, and manual organization-affiliation verification. The identity-verification provider remains undecided, so Slice 3 uses a provider-neutral placeholder and preserves the required sequence.

## Outcome

An email-verified user with the restricted Scout account created in Slice 1 can complete and later edit a personal professional profile, record their Scout role and MVP organization affiliation, and enter a restricted personal workspace.

Completing Scout onboarding does not approve the Scout and does not provide access to athletes.

## Included

- resumable Scout onboarding without duplicate profile creation;
- a personal `ProfessionalProfile` with a separate Scout professional role;
- Soccer recruiting context for the Scout role;
- one MVP organization affiliation recorded separately from the personal professional identity;
- one personal workspace with one member for the MVP;
- submission and manual UnicAthlete admin verification of the claimed MVP organization affiliation after identity verification;
- separate visible statuses for email verification, onboarding, identity verification, and organization-affiliation verification;
- a restricted post-onboarding destination explaining the account's current status and available next action; and
- audit information identifying who changed relevant records and when.

## Product Structure

| Concept | Meaning in Slice 3 |
|---|---|
| `User` | Login identity, credentials, and verified email |
| `ProfessionalProfile` | The person's reusable professional identity |
| `ProfessionalRole` | The capacity in which the person uses the platform; `Scout` is the only MVP role |
| `Organization` | A separately identified club, school, agency, or other organization |
| `OrganizationAffiliation` | A claimed or confirmed relationship between the professional and an organization |
| `Workspace` | The ownership boundary for future recruiting work |
| `WorkspaceMembership` | Permission to enter and work within a workspace |

The MVP creates one personal Professional Profile and one Scout role for this path. Scout-specific fields must not be embedded in a way that prevents the same user or professional identity from holding another professional role later. The underlying model must also avoid an irreversible assumption that a user can never relate to another professional profile.

Scouting/recruiting experience belongs to the Scout `ProfessionalRole`, is optional, and is collected as a self-reported range: `Less than 1 year`, `1–2 years`, `3–5 years`, `6–10 years`, or `More than 10 years`. It may provide context during affiliation review but is not verification evidence and never determines confirmation or athlete access by itself.

## Onboarding Lifecycle

- Continue the existing restricted Scout account from Slice 1; onboarding must not create a second `User`.
- Create or resume the same `ProfessionalProfile`, Scout `ProfessionalRole`, and personal `Workspace` idempotently.
- Onboarding supports at least `Not started`, `In progress`, and `Completed`.
- Valid progress is preserved so the Scout can leave and resume.
- Completing onboarding opens the restricted Scout destination. It does not change identity-verification, professional-review, or athlete-access status.

## Minimum Required to Complete Onboarding and Become Eligible for Review

The account name and verified account email come from Slice 1. Scout onboarding additionally requires:

- country of professional activity;
- organization name, type, country, and official website;
- the Scout's professional title at that organization;
- relationship type: employee, contractor, or another current professional relationship the organization can confirm;
- a verified organization work email, unless the organization does not provide one; and
- one official corroboration route: an official organization staff page, an official federation/league directory, or direct confirmation through an independently verified organization channel.

Profile photo, languages, scouting/recruiting experience, recruiting category, recruiting coverage, age groups, scouting focus, evaluation strengths, relationship start date, LinkedIn, and other supporting links are optional. Optional fields do not block onboarding completion, affiliation-review submission, or confirmation.

The organization work email is affiliation-specific and separate from the account login email. Verifying it proves control of the mailbox but does not by itself prove the applicant's role or recruiting authority. If the organization does not issue a work email, the Scout uses the direct-confirmation exception route.

After the Scout submits the organization work email, the verification email is sent automatically. The UI shows `Verification email sent`, `Verified`, or the applicable failure/expiry state and provides a `Resend verification` action. The Scout does not manually trigger the first email. Unless the no-work-email exception applies, organization-email verification must succeed before identity verification and manual affiliation verification can proceed.

For direct confirmation, the Scout may identify a suitable organization representative by name and role, but UnicAthlete must independently obtain or verify the organization-controlled contact channel. A confirmation sent only to contact details supplied by the applicant is insufficient. The representative receives a secure, expiring request and must explicitly confirm the Scout's current relationship, role, and recruiting authority. Opening the request does not count as confirmation. The record retains the representative, verified channel source, response, timestamp, and reviewing admin.

LinkedIn, a CV, professional website, organization announcement, licence/certification, or similar self-provided information is supporting evidence only and is never sufficient by itself. Contracts, employment letters, and recruiting-mandate documents are not collected as an MVP evidence route because UnicAthlete has no approved way to authenticate them. Applicants should provide only relevant evidence; additional evidence does not guarantee confirmation. Evidence is private to the applicant and authorized administrators and is not displayed to athletes, guardians, other Scouts, or organization members.

## Personal Workspace

- Each MVP Scout receives one personal workspace and an active owner membership in it.
- The personal workspace has one member in the MVP. There is no invitation, member-management, workspace-switching, or team-collaboration UI in Slice 3.
- Organization affiliation does not turn the personal workspace into an organization workspace.
- Future collaborative recruiting records must be capable of belonging to a workspace and retaining their creator; they must not depend only on direct ownership by one user.

## Organization Affiliation

- MVP Scout eligibility requires a verifiable current professional relationship with one eligible organization. A generic unaffiliated or self-declared independent Scout path is not available.
- Employment is not required: an affiliation may represent employment, a contract, or another current recruiting mandate that the organization can confirm.
- The organization is separate from the Scout's personal Professional Profile. Organization details must not be stored as if they were the Scout's personal identity.
- Recording an affiliation is a claim, not proof of employment, authorization, or organization ownership.
- Affiliation status must support at least `Unconfirmed`, `Pending verification`, `Confirmed`, `Rejected`, and `Ended`.
- One Professional Profile may have multiple Organization Affiliation records over time. Each affiliation has its own organization, professional title or capacity, relationship type, status, evidence, review history, and applicable start/end dates.
- The MVP allows only one active confirmed affiliation per Scout and does not provide affiliation switching or an “add another affiliation” experience.
- If the Scout changes organizations, a replacement affiliation can be submitted for review. Once confirmed, it becomes active and the previous affiliation becomes historical. The one-active-affiliation rule is configurable product logic, not a permanent one-to-one database constraint.
- Only the active confirmed affiliation may be presented to athletes or used as the organization the Scout represents in a future recruiting interaction. Pending, historical, or rejected claims remain private to the Scout and authorized administrators unless a later product rule explicitly exposes history.
- There is no separate generic manual Scout/admin approval in Slice 3. For future athlete access, the Scout must retain the active confirmed affiliation in addition to satisfying the other access gates.
- A pending replacement does not itself replace the current confirmed affiliation. If the current affiliation ends or loses confirmation before a replacement is confirmed, effective athlete access must be suspended.
- Affiliation alone grants no organization workspace access, administrative rights, athlete access, verification badge, or control of a future organization page.
- If organization collaboration is introduced later, access is granted through a separate `WorkspaceMembership`, not inferred from `OrganizationAffiliation`.

Future recruiting work records the active confirmed affiliation under which the Scout is acting. Because the MVP permits only one active confirmed affiliation, no organization-context selector is required. Multiple simultaneous affiliation contexts and switching may be added later without restructuring the affiliation history.

## Separate Roles and Statuses

The product must not combine these concepts:

- professional role, such as Scout or a future Coach role;
- organization affiliation, such as working for a club;
- workspace role, such as future Owner, Admin, Member, or Viewer; and
- UnicAthlete platform-administration permission.

The product must also preserve separate status dimensions for:

- email verification;
- Scout onboarding;
- identity verification;
- organization verification, if introduced;
- organization-affiliation verification; and
- workspace membership.

One status must not automatically imply another.

## Verification and Athlete Access

- Third-party identity verification remains undecided and separate. Slice 3 displays its provider-neutral status and next-action placeholder but does not collect identity documents in UnicAthlete or treat the placeholder as completed verification.
- Manual organization-affiliation verification is the only manual admin review in Slice 3.
- Verification order is: verified account email → completed onboarding and affiliation evidence → successful identity verification → manual organization-affiliation verification → later athlete-access evaluation.
- Completing onboarding stores the submission but does not place it in the admin review queue until identity verification succeeds. The system must make this waiting state explicit.
- After successful identity verification, the affiliation enters the admin review queue together with the relevant identity-matched professional information and submitted evidence. The system preserves a snapshot of what was actually reviewed.
- Affiliation review supports `Not submitted`, `Not queued`, `Pending review`, `Direct confirmation required`, `Changes requested`, `Confirmed`, `Unable to verify`, `Rejected`, `Suspended`, and `Ended` where applicable.
- An admin reviews the claimed relationship, professional title, verified work email, official corroboration, and optional supporting context, then confirms, requests changes or direct confirmation, marks unable to verify, or rejects with a recorded reason.
- The admin binds the ID-verified person to the organization using the verified work email and official corroboration route. In the normal route, a verified organization email plus a current, unambiguous official staff/directory source may be sufficient. A work email or optional supporting source is not sufficient by itself.
- If the Scout has no organization email, no clear official listing exists, or the evidence is ambiguous, direct organization confirmation through an independently verified channel is required. If no reliable organization-controlled source is available, the affiliation cannot be confirmed.
- Admin outcomes include `Pending review`, `Changes requested`, `Direct confirmation required`, `Confirmed`, `Unable to verify`, `Rejected`, and `Suspended`, with a recorded reason where applicable.
- The Scout can see the decision and reason, update the applicable information, and resubmit after changes are requested.
- Review records retain the reviewer, submitted snapshot, evidence references, decision, reason, and timestamps. Sensitive evidence is visible only to authorized administrators and follows an approved retention rule.
- Identity verification and affiliation confirmation remain separate results. There is no additional generic Scout-approval result.
- Changes to material approved information must be auditable and capable of triggering re-review. The exact material fields will be defined with the onboarding fields.
- The Scout remains restricted from athlete access in Slice 3 even after affiliation confirmation. Athlete access is enabled only when its complete gates and scout-facing experience are implemented in a later slice.
- Restricted Scouts cannot search for, discover, open, message, save, evaluate, request information from, or otherwise access athlete profiles, including through a direct URL or API request.
- Status changes affecting access or verification must retain the previous status, new status, actor, timestamp, and reason where applicable.

## Restricted Destination

The production post-onboarding destination should reuse the relevant status components introduced by the internal Slice 1 Account Status screen, but it is not the internal validation screen itself.

It must communicate:

- that Scout profile setup is complete or incomplete;
- whether the email is verified;
- the separate identity-verification and organization-affiliation-verification statuses;
- organization-affiliation status when applicable;
- that athlete access remains restricted; and
- the next action currently available, without presenting an unavailable verification provider as functional.

## Future Organization Compatibility

The data structure must allow, without migrating personal Scout identity into an organization record:

- multiple professionals affiliated with one organization;
- one professional affiliated with multiple organizations over time and, after the MVP, potentially simultaneously;
- organization workspaces with multiple members;
- personal and organization workspaces for the same user;
- independent workspace roles and organization-affiliation roles;
- organization invitations and membership removal;
- organization pages with separately controlled publication, administrators, branding, verification, and stable identifiers; and
- preserving collaborative records when a member later leaves an organization.

None of these organization collaboration or organization-page experiences are implemented in Slice 3.

## Explicitly Outside Slice 3

- third-party identity-verification integration;
- automatic affiliation confirmation based on email domain or organization claim;
- unaffiliated Scout eligibility;
- organization workspace creation, invitations, members, roles, or team collaboration;
- public or scout-facing organization pages;
- athlete search, discovery, profile access, messaging, saved athletes, evaluations, lists, or pipelines;
- media or document requests;
- payments or subscriptions; and
- professional roles other than Scout in the MVP UI.

## Remaining Implementation Decisions

- the supported organization types and minimum organization details;
- the Scout's Soccer recruiting categories and geographic coverage fields;
- whether organization matching uses selection from existing records, a new unverified organization suggestion, or both; and
- the identity-verification provider and resulting launch timing for the manual-review queue.
