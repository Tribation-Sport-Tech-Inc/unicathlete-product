# MVP Slice 3 — Scout Onboarding and Manual Affiliation Verification

## Status

Product definition for Scout onboarding, affiliation evidence, restricted access, and manual organization-affiliation verification. The identity-verification provider remains undecided, so Slice 3 uses a provider-neutral placeholder and keeps all verification results separate.

## Outcome

A user with the restricted Scout account created in Slice 1 can complete and later edit a personal professional profile, record their Scout role and MVP organization affiliation, save the affiliation application, and enter a restricted personal workspace while required email or identity checks remain pending. The application enters manual organization-affiliation review automatically after those prerequisites succeed.

Completing Scout onboarding does not approve the Scout and does not provide access to athletes.

## Included

- resumable Scout onboarding without duplicate profile creation;
- a personal `ProfessionalProfile` with a separate Scout professional role;
- Soccer recruiting context for the Scout role;
- one MVP organization affiliation recorded separately from the personal professional identity;
- one personal workspace with one member for the MVP;
- automatic submission and manual UnicAthlete review of the claimed MVP organization affiliation after the required email and identity checks succeed;
- separate visible statuses for email verification, onboarding, identity verification, and organization-affiliation verification;
- a restricted post-onboarding destination explaining the account's current status and available next action; and
- audit information identifying who changed relevant records and when.

## Product Structure

| Concept | Meaning in Slice 3 |
|---|---|
| `User` | Login identity, credentials, account email, and its separate verification state |
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
- Completing onboarding saves the affiliation application and opens the restricted Scout destination. It does not submit the application for active manual review, complete any pending email or identity check, confirm the affiliation, or enable athlete access.

## Minimum Required to Complete Onboarding

The account name and account email come from Slice 1. Email verification is tracked separately and may remain pending when Scout onboarding is submitted. Scout onboarding additionally requires:

- country of professional activity, required and limited to `United States` (`US`) for the MVP; the UI presents it as the single available option while the model remains extensible to additional countries later;
- athlete market, required and limited to `Spain` (`ES`) for the MVP; it identifies where athletes available through UnicAthlete are based, not the Scout's professional location or the athlete's destination;
- organization name, type, country, and official website; organization country is required and limited to `United States` (`US`) for the standard MVP flow and refers to the specific branch or office confirming the affiliation when the organization is multinational;
- the Scout's professional title at that organization;
- program / recruiting category, required as `Men's Soccer`, `Women's Soccer`, or `Men's and Women's Soccer` and attached to the organization affiliation rather than the reusable Professional Profile;
- relationship type: employee, contractor, or another current professional relationship the organization can confirm; selecting `Other current professional relationship` requires a concise relationship description stored separately from the stable `other` type;
- an organization work email, unless the organization does not provide one; its verification may remain pending when onboarding is submitted; and
- one official corroboration route: an official organization staff page, an official federation/league directory, or organization representative confirmation through an independently verified organization channel.

Profile photo, languages, scouting/recruiting experience, relationship start date, LinkedIn, and other supporting links are optional. Languages use a controlled multi-select checklist rather than free text and are stored using standardized language identifiers, independent of their display labels. Optional fields do not block onboarding completion, automatic affiliation-review submission, or confirmation. A professional photo may provide context when an official listing includes a photo, but it is not identity or affiliation evidence, is not required, and its absence must not reduce eligibility. Recruiting classes, positions, player types, scouting focus, evaluation criteria, and similar project-specific information belong to Recruiting Projects in the Scout Workspace, not Scout onboarding or the reusable Professional Profile.

Professional photos are private objects by default and are stored through an object reference rather than a permanent public URL or database blob. Accepted file types, maximum size, and other validation limits are configurable; Slice 3 does not hardcode a final size limit. Only the Scout and authorized administrators may access the original in Slice 3. A later eligible-interaction trust card may use a controlled derivative under its own visibility rules.

The organization work email is affiliation-specific and separate from the account login email. Verifying it proves control of the mailbox but does not by itself prove the applicant's role or recruiting authority. If the organization does not issue a work email, the Scout uses the direct-confirmation exception route.

For the no-work-email exception, the organization-email verification status is `Not applicable`, not `Pending` or `Verified`. Account-email and identity-verification prerequisites still apply. After they succeed, an administrator independently obtains or verifies an organization-controlled contact channel. Once the confirmation request is sent, the application moves to `Waiting for organization` and the Scout sees `Waiting for organization confirmation`. The affiliation cannot become confirmed without a successful organization response. If no reliable official channel can be established or reasonable confirmation attempts remain inconclusive, the administrator may close the application as `Unable to verify`.

After the Scout provides the organization work email, the verification email is sent automatically. The UI shows `Verification email sent`, `Verified`, or the applicable failure/expiry state and provides a `Resend verification` action. The Scout does not manually trigger the first email. Unless the no-work-email exception applies, organization-email verification must succeed before automatic submission for manual affiliation review.

For organization representative confirmation, the Scout may identify a suitable representative by name and role, but UnicAthlete must independently obtain or verify the organization-controlled contact channel. A confirmation sent only to contact details supplied by the applicant is insufficient. For the MVP, an administrator may contact the representative manually through that official channel and record the outcome; a dedicated representative portal is not required. The representative must explicitly confirm the Scout's identity, current relationship, professional role, recruiting authority, and applicable program / recruiting category. Sending or opening the request does not count as confirmation. The record retains the representative, verified channel source, request and response timestamps, outcome, and reviewing administrator.

LinkedIn, a CV, professional website, organization announcement, licence/certification, or similar self-provided information is supporting evidence only and is never sufficient by itself. Contracts, employment letters, and recruiting-mandate documents are not collected as an MVP evidence route because UnicAthlete has no approved way to authenticate them. Applicants should provide only relevant evidence; additional evidence does not guarantee confirmation. Evidence is private to the applicant and authorized administrators and is not displayed to athletes, guardians, other Scouts, or organization members.

The UI may explain that complete, accurate information and clear official evidence can help avoid review delays and that UnicAthlete may request specific additional information when evidence is insufficient or ambiguous. It must not imply that providing more optional personal information improves the chance of approval.

## Personal Workspace

- Each MVP Scout receives one personal workspace and an active owner membership in it.
- The personal workspace has one member in the MVP. There is no invitation, member-management, workspace-switching, or team-collaboration UI in Slice 3.
- Organization affiliation does not turn the personal workspace into an organization workspace.
- Future collaborative recruiting records must be capable of belonging to a workspace and retaining their creator; they must not depend only on direct ownership by one user.

## Organization Affiliation

- MVP Scout eligibility requires a verifiable current professional relationship with one eligible organization. A generic unaffiliated or self-declared independent Scout path is not available.
- Onboarding first provides searchable matching against existing organization records. Selecting an existing organization prefills its canonical name, type, United States branch or office, and official website, but does not confirm the Scout's affiliation, create organization membership, or grant organization permissions.
- If no correct match exists, the Scout may choose `Add an organization for review` and provide the required organization details. This creates an unconfirmed organization suggestion linked to the affiliation application, not an immediately trusted organization.
- During manual review, an administrator may confirm the suggestion as a new eligible organization, match it to an existing organization, request corrections, or mark it ineligible. Matching or merging a duplicate must preserve affiliation applications, evidence, review history, and stable references.
- Existing organization confirmation and personal affiliation confirmation remain separate decisions. A previously reviewed organization may reduce repeated organization checks but never automatically confirms another person's affiliation.
- Supported organization types are `College or university athletic program`, `Professional soccer club`, `Youth soccer academy or club`, `Recruiting or scouting agency`, and `Other eligible organization`.
- Selecting `Other eligible organization` requires a free-text organization-type description. Manual review must establish both that the organization is eligible to recruit or evaluate athletes and that the applicant holds the claimed role. The stored organization type remains the stable value `other`, separate from the applicant's description and the administrator's eligibility decision and reason.
- Employment is not required: an affiliation may represent employment, a contract, or another current recruiting mandate that the organization can confirm.
- The organization is separate from the Scout's personal Professional Profile. Organization details must not be stored as if they were the Scout's personal identity.
- The standard MVP flow accepts only an affiliation confirmed by a United States branch or office. This is a configurable eligibility rule, not a permanent database restriction on organizations from other countries.
- Recording an affiliation is a claim, not proof of employment, authorization, or organization ownership.
- The verified program / recruiting category is part of the affiliation scope. Future Recruiting Projects may narrow their category within that scope but must not expand the Scout's athlete access beyond it.
- Each affiliation keeps three separate state dimensions. They must not be represented by one combined status:
  - relationship status: `Active` or `Ended`;
  - application status: `Draft`, `Awaiting required checks`, `Pending review`, `Waiting for Scout`, `Waiting for organization`, `Approved`, `Unable to verify`, `Rejected`, or `Closed`; and
  - verification status: `Unverified`, `Confirmed`, `Reverification required`, `Expired`, `Suspended`, `Revoked`, or `Invalidated`.
- Removing or ending a relationship changes the relationship to `Ended` and the effective verification to `Invalidated`. It does not erase the previous approved application, confirmation decision, or status history.
- Typical combinations are:
  - under review: `Active` relationship + `Pending review` application + `Unverified` verification;
  - confirmed: `Active` + `Approved` + `Confirmed`;
  - expired: `Active` + `Approved` + `Expired`;
  - temporarily investigated: `Active` + `Approved` + `Suspended`; and
  - removed by the Scout: `Ended` + previously `Approved` application + `Invalidated` verification.
- One Professional Profile may have multiple Organization Affiliation records over time. Each affiliation has its own organization, professional title or capacity, relationship type, status, evidence, review history, and applicable start/end dates.
- The MVP allows only one active confirmed affiliation per Scout and does not provide affiliation switching or an “add another affiliation” experience.
- If the Scout changes organizations, a replacement affiliation can be submitted for review. Once confirmed, it becomes active and the previous affiliation becomes historical. The one-active-affiliation rule is configurable product logic, not a permanent one-to-one database constraint.
- Only the active confirmed affiliation may be presented to athletes or used as the organization the Scout represents in a future recruiting interaction. Pending, historical, or rejected claims remain private to the Scout and authorized administrators unless a later product rule explicitly exposes history.
- There is no separate generic manual Scout/admin approval in Slice 3. For future athlete access, the Scout must retain the active confirmed affiliation in addition to satisfying the other access gates.
- A pending replacement does not itself replace the current confirmed affiliation. If the current affiliation ends or loses confirmation before a replacement is confirmed, effective athlete access must be suspended.
- Confirmation is time-limited. The initial MVP policy is 12 months from `verified_at`; `valid_until` is calculated automatically. The duration is configurable through a versioned policy rather than permanently hardcoded.
- Each confirmation records the policy version and duration used to calculate its `valid_until`. A policy change records the previous and new values, actor, reason, timestamp, and effective date. By default, a new policy applies to confirmations made or renewed after its effective date and does not silently rewrite existing validity dates. Any intentional recalculation of existing records requires a separate explicit, auditable operation.
- When validity expires, the relationship may remain `Active`, but its verification becomes `Expired` and it no longer satisfies athlete-access eligibility. Starting a renewal may then move the verification to `Reverification required` until a new application is approved.
- A Scout may remove their active affiliation. Removal changes the relationship to `Ended` and verification to `Invalidated`, removes it from the active affiliation context, and suspends any access that depends on it. The record, prior approved application, confirmation, evidence references, and history are retained rather than deleted.
- Before removal is confirmed, the UI must warn that the affiliation will no longer be verified or shown as active, affiliation-dependent athlete access will be lost, and using the same organization again will require a new application or reverification.
- Removing an affiliation and replacing it are separate actions. A replacement application does not end the current affiliation; the current confirmed affiliation remains effective until it is ended, loses confirmation, or the replacement is confirmed and activated.
- Material changes to the organization, organization work email, professional title/capacity, relationship type or its `other` description, or verified program / recruiting category create a new auditable application version and move the affiliation to reverification. General Professional Profile edits such as photo, languages, or self-reported experience do not.
- If an organization becomes ineligible or is placed under a safety/integrity review, affected affiliations may be suspended and queued for review. Organization status must not silently rewrite individual affiliation history.
- Future recruiting records must retain the affiliation context used when the action occurred. Ending, replacing, suspending, or revoking an affiliation does not rewrite the historical attribution of previous messages, evaluations, requests, or recruiting actions.
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
- Completing onboarding saves the affiliation application while account-email, organization-email, and identity-verification statuses may remain pending. The application status is `Awaiting required checks` and it is not yet placed in the active admin review queue.
- After every required email check and identity verification succeeds, the system automatically freezes a submission snapshot and places the affiliation application into manual organization-affiliation review without requiring the Scout to submit it again.
- Application review uses only the application statuses defined above. `Waiting for Scout` is shown to the Scout as `Additional information required`; `Waiting for organization` is shown as `Waiting for organization confirmation`. An approved application produces verification status `Confirmed`; it does not combine the application and verification records.
- An admin reviews the claimed relationship, professional title, verified work email, official corroboration, and optional supporting context, then confirms, requests changes or organization confirmation, marks unable to verify, or rejects with a recorded reason. The admin may request specific additional information when the available evidence cannot establish the affiliation.
- An official staff or directory page is corroborating evidence, not proof based on a matching name alone. It may support confirmation together with verified identity and organization email only when the match is unambiguous. A common name, conflicting role, missing identifying details, or other ambiguity requires organization representative confirmation through an independently verified channel.
- The admin binds the ID-verified person to the organization using the verified work email and official corroboration route. In the normal route, a verified organization email plus a current, unambiguous official staff/directory source may be sufficient. A work email or optional supporting source is not sufficient by itself.
- If the Scout has no organization email, no clear official listing exists, or the evidence is ambiguous, organization representative confirmation through an independently verified channel is required. If no reliable organization-controlled source is available, the affiliation cannot be confirmed.
- `Additional information required` is used when a potentially valid application has a correctable omission or ambiguity. The administrator identifies the specific information needed; the application remains open, and the Scout may update the applicable fields and resubmit.
- `Organization confirmation required` is used when UnicAthlete must obtain confirmation from the organization rather than asking the Scout to resolve the issue alone. The application remains open while UnicAthlete waits for the organization.
- `Unable to verify` closes the review without approval when reasonable official routes remain inconclusive, such as no organization response or no reliable contact channel. It is not a finding of dishonesty or ineligibility. A new application may be submitted later when materially stronger evidence becomes available.
- `Rejected` closes the review when UnicAthlete has an affirmative reason not to approve, such as organization denial, an ineligible organization, no recruiting authority, a material conflict with official information, intentionally misleading information, or a serious safety or integrity concern. Reapplication may be restricted or require manual support review.
- `Confirmed` is available only when the organization is eligible and the ID-verified applicant's affiliation, current role, recruiting authority, and program / recruiting category are sufficiently established.
- Admin review actions move the application to `Waiting for Scout`, `Waiting for organization`, `Approved`, `Unable to verify`, or `Rejected`. Suspension and revocation are changes to the verification status of a previously confirmed affiliation, not application-review outcomes.
- The Scout sees a safe user-facing explanation and may update and resubmit only when the outcome permits it. Internal fraud-prevention, safety, or investigation notes are not automatically exposed.
- Review records retain the reviewer, submitted snapshot, evidence references, structured reason code, internal notes, safe user-facing explanation, decision, and timestamps. Sensitive evidence and internal notes are visible only to authorized administrators and follow approved retention rules.
- Identity verification and affiliation confirmation remain separate results. There is no additional generic Scout-approval result.
- The Scout remains restricted from athlete access in Slice 3 even after affiliation confirmation. Athlete access is enabled only when its complete gates and scout-facing experience are implemented in a later slice.
- Restricted Scouts cannot search for, discover, open, message, save, evaluate, request information from, or otherwise access athlete profiles, including through a direct URL or API request.
- Every relationship or verification transition must create an append-only audit event containing the previous state, new state, actor, timestamp, source, and structured reason code, plus a safe user-facing explanation and restricted internal note where applicable.
- Structured reason codes must distinguish at least `scout_removed_affiliation`, `affiliation_expired`, `reverification_due`, `organization_report_or_complaint`, `organization_denied_affiliation`, `material_information_changed`, `admin_safety_hold`, `replacement_affiliation_confirmed`, and `admin_correction`. Free-text notes must not replace these identifiers.
- A complaint or report does not automatically prove that the affiliation is invalid. It may move verification to `Suspended` while investigated; a later admin decision may restore `Confirmed` or change it to `Revoked`, with both transitions audited.
- There is no silent validity grace period in the initial policy. At `valid_until`, the affiliation stops satisfying athlete-access eligibility unless reverification has completed. Any later grace period must be an explicit configurable policy with its own effective dates.
- The product records reminder eligibility before expiration. The initial proposed reminders are 30 days and 7 days before `valid_until`; delivery scheduling may be implemented after Slice 3 and the intervals remain configurable.
- An authorized administrator may restore a suspended affiliation after review, or revoke it when the claim or organization is no longer acceptable. Restoration and revocation require a reason and append-only audit events; restoration must not erase the suspension period.
- Evidence references and decision records must support policy-controlled retention and deletion without deleting the affiliation lifecycle or audit facts that must be retained. The final retention periods and deletion procedure require an approved privacy/legal policy and are not hardcoded in Slice 3.

## Scout Notifications

- In Slice 3, the Scout Profile status is the source of truth and transactional email is the Scout notification channel. A separate in-platform notification centre is not implemented yet.
- Transactional email is generated for `Additional information required`, `Waiting for organization confirmation`, `Confirmed`, `Unable to verify`, `Rejected`, `Reverification required`, `Expired`, `Suspended`, `Restored`, `Revoked`, and Scout removal or replacement of an affiliation.
- Emails contain only a safe status summary, available next action, and authenticated link back to the product. Sensitive evidence, complaint details, fraud/safety reasoning, and restricted internal notes are never included.
- Each notification records its event type, recipient, related affiliation/application, generated timestamp, template/version, channel, and delivery state. Email failure does not reverse, delay, or change the underlying application, relationship, verification, or access state.
- Notification events are channel-independent so a later in-platform notification system can display the same events through unread state, notification lists, and action links without rebuilding affiliation logic. User-to-user messages remain separate from system notifications.
- Automated 30-day and 7-day expiry-reminder delivery remains outside Slice 3, although reminder eligibility and future notification-event compatibility are preserved.

## Restricted Destination

The production post-onboarding destination is the Scout Profile in its status-aware restricted state. Onboarding ends with the Review step; after completion, the Scout is sent directly to the Scout Profile rather than to a separate onboarding Status screen. The profile confirms that the application was saved and becomes the permanent place for outstanding checks, verification statuses, and next actions. It reuses the relevant status components introduced by the internal Slice 1 Account Status screen.

It must communicate:

- that Scout profile setup is complete or incomplete;
- whether the email is verified;
- the separate identity-verification and organization-affiliation-verification statuses;
- that affiliation review is `Not started` while any required account-email, organization-email, or identity check remains incomplete, and that it starts automatically without another Scout submission after every applicable prerequisite succeeds;
- organization-affiliation status when applicable;
- the confirmation date and validity/reverification date for a confirmed affiliation;
- that athlete access remains restricted; and
- the next action currently available, without presenting an unavailable verification provider as functional.

The restricted Scout may view and edit permitted professional and affiliation information and enter the empty/restricted personal workspace. Athlete-dependent features remain unavailable. The same Scout Profile may later render the eligible state when the applicable access functionality exists and every required gate is satisfied; changing state does not create a second profile or destination.

The Scout Workspace is a separate destination. The Scout Profile may link to it through the main navigation, but it does not embed workspace statistics, recruiting-project actions, managed-athlete counts, or other workspace content.

## Minimal Admin Review Interface

- Slice 3 includes a minimal internal organization-affiliation review tool, not a general administration dashboard.
- Access requires a named internal User account, MFA, and the explicit platform permission `manage_scout_affiliation_reviews`. Shared administrator credentials are prohibited.
- The permission is denied by default and enforced server-side on every page, API operation, evidence request, decision, and lifecycle action. Possession of a URL, Scout workspace role, organization affiliation, or organization workspace role never grants admin-review access.
- Reviewers cannot grant or remove their own reviewer permission. Permission assignment belongs to a separately authorized platform-permission administrator and is itself audited; holding that administrative permission does not automatically provide access to private review evidence.
- Reviewer access is removed immediately when no longer required and the authorized-user list must support periodic review. The number of reviewers is operationally limited but not hardcoded into the data model.
- Operational queue groups are `Awaiting verification`, `Ready for review`, `Waiting for Scout`, `Waiting for organization`, `Lifecycle review`, and `Completed`. Applications awaiting email or identity verification are visible for support but are not actionable review items. `Lifecycle review` contains already-confirmed affiliations whose verification is suspended or otherwise requires an administrator decision; it is not an application status.
- The review detail shows the submitted application snapshot, verification summary, organization identity and eligibility, affiliation claim, evidence, organization-confirmation history, and append-only review history.
- All affiliation-application fields required for the decision are visible directly. Optional general profile information such as languages, self-reported experience, and professional photo appears only in a collapsed `Additional profile information` section and is clearly marked as non-evidentiary.
- The administrator sees only the identity-verification result and provider reference by default, not unnecessary raw identity documents.
- Admin actions are `Confirm affiliation`, `Request additional information`, `Require organization confirmation`, `Mark unable to verify`, `Reject`, match a new suggestion to an existing organization, and mark a suggested organization eligible or ineligible. For confirmed affiliations, authorized lifecycle controls additionally support `Suspend`, `Restore`, and `Revoke`, each with a required reason and audit event.
- New-application review actions and confirmed-affiliation lifecycle actions are mutually exclusive UI modes. Lifecycle review shows the current relationship and verification states, the triggering event, previous confirmation and validity dates, access effect, and append-only transition history. A suspended case offers `Restore` or `Revoke`; `Suspend` is available only while the affiliation is still effectively confirmed.
- Application-review reason codes are constrained by the selected action so contradictory action/reason combinations cannot be stored. `Request additional information`, `Require organization confirmation`, `Mark unable to verify`, and `Reject` require a structured reason and safe Scout-facing explanation; restricted internal notes remain separate and are never automatically exposed.
- `Confirm affiliation` does not require a Scout-facing explanation. It records the reviewer, approved application snapshot, evidence basis, decision timestamp, applicable rules version, `verified_at`, and the policy-calculated `valid_until` date.
- Administrators do not directly rewrite Scout-submitted fields. Corrections are requested from the Scout so each submitted snapshot and resubmission remain auditable.
- Sensitive evidence remains private and is delivered only through short-lived authorized access. The audit trail records reviewer sign-in to the review area, sensitive evidence view/download, organization-confirmation activity, decisions, lifecycle changes, exports, and reviewer-permission changes.
- Security logs must not copy raw identity documents, evidence contents, access tokens, authentication secrets, or unnecessary personal data. Audit records are protected against unauthorized modification and access.

## Acceptance Criteria

- A restricted Scout from Slice 1 can leave and resume onboarding without creating a duplicate User, Professional Profile, Scout role, personal Workspace, membership, or affiliation application.
- Onboarding cannot complete until every applicable required field is present, including conditional descriptions for `Other eligible organization` and `Other current professional relationship`.
- Completing onboarding saves one versioned affiliation application and opens the status-aware restricted Scout Profile; it does not confirm the affiliation or enable athlete access.
- The application remains `Awaiting required checks` until the applicable account-email, organization-email, and identity prerequisites succeed. It then enters the correct admin queue automatically without a second Scout submission.
- In the no-work-email exception, organization email is `Not applicable`, representative confirmation is required, and the application cannot be approved without a successful response through an independently verified organization-controlled channel.
- Application, relationship, and verification statuses remain separate and only valid combinations/transitions are accepted. Every transition preserves the prior state, actor, time, source, and structured reason where applicable.
- Only a named MFA-authenticated account with `manage_scout_affiliation_reviews` can access private review data or perform review/lifecycle actions; direct UI or API access without permission is denied.
- Admin decisions apply to an immutable submitted snapshot. Admins cannot rewrite Scout-submitted fields, and action-specific reason rules prevent contradictory outcomes and reason codes.
- Confirmation records the evidence basis, reviewer, rules/policy version, `verified_at`, and an automatically calculated `valid_until` 12 months later under the initial MVP policy.
- Removing an affiliation produces `Ended` relationship + `Invalidated` verification, preserves history, and immediately removes any affiliation-dependent access. Expiration, suspension, restoration, revocation, replacement, and material-change reverification follow their defined audited transitions.
- The restricted Scout cannot access athlete search, profiles, messages, requests, saved athletes, evaluations, or equivalent direct URLs/APIs. The personal workspace remains available only in its empty/restricted state.
- Required status emails are generated with safe Scout-facing content, delivery is tracked independently, and email failure does not change the underlying product state.
- Original professional photos and affiliation evidence are private; access follows the defined authorization and audit rules and no permanent public object URL is exposed.

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
- payments or subscriptions;
- professional roles other than Scout in the MVP UI;
- an in-platform notification centre, notification bell, unread counts, or notification list;
- automated delivery of affiliation-expiration reminders; and
- final evidence-retention durations and deletion operations pending approved privacy/legal policy.

## Remaining Implementation Decisions

- the identity-verification provider and resulting integration timing.
