# MVP Slice 4 — Identity Verification and Eligibility Gates

## Status

Product definition for identity verification through Veriff, eligibility gates, and the transition from minor to adult athlete eligibility. Requirements not confirmed in this document remain open and must not be inferred from the wireframes.

## Outcome

Applicable guardians, adult athletes, and Scouts can complete identity verification through Veriff. UnicAthlete records the purpose-specific result and uses it as one eligibility requirement without treating identity verification as consent, guardian-authority proof, organization-affiliation proof, profile visibility, or athlete access by itself.

## Included

- identity-verification initiation, continuation, result handling, retry, and expiry behavior;
- purpose-specific verification for guardians, adult athletes, and Scouts;
- status and next-action components in the appropriate profile or settings experience;
- privacy-conscious verification-result records;
- derived athlete-visibility and Scout athlete-access eligibility results with structured blocking reasons;
- automatic age-boundary recalculation; and
- the pre-18 notification and adult-transition workflow defined below.

Actual athlete discovery, Scout access to athlete profiles, and the production visibility experience remain in their later feature slice. Slice 4 supplies the eligibility result they will consume.

## Purpose-Specific Identity Verification

| Verification purpose | Required for the MVP | What it establishes |
|---|---|---|
| Guardian identity | Guardian responsible for an athlete under 18, before the Sport Profile can become eligible for visibility | The person completing the check is a real adult |
| Adult-athlete identity | Athlete aged 18 or older, before the Sport Profile can become eligible for visibility | The athlete's identity and adult age |
| Scout identity | Scout, before future athlete access can become eligible | The real person connected to the Scout account |

Athletes under 18 do not complete their own identity verification in the MVP. Their account and date of birth remain connected to the applicable guardian relationship. A later need for minor identity verification requires a separate product and legal decision.

The Scout pathway is limited to adults aged 18 or older. Veriff must confirm adult age before Scout identity verification can pass, the affiliation application can enter active manual review, or future athlete access can become eligible. A person confirmed to be under 18 remains restricted and is directed to support if the result is incorrect.

Verification purposes remain separate. A result recorded for one purpose must not silently satisfy another purpose. Any permitted reuse of an earlier check must still be recorded for the new purpose.

## Person-Level Verification Reuse

Identity verification belongs to the person rather than to an individual Sport Profile, athlete relationship, organization affiliation, or workspace.

- One valid guardian identity verification may support every minor Athlete Profile that the same guardian legitimately manages. Each guardian relationship still requires its own authority assertion and applicable legal or product actions.
- The MVP supports one active guardian relationship with management or visibility authority per Athlete Profile. Multiple active guardians are outside the MVP, without creating a permanent restriction against supporting them later.
- One valid adult-athlete identity verification may support the Athlete Profile and all Sport Profiles belonging to that verified identity.
- One valid Scout identity verification may support the same person's Scout role across affiliations and workspaces. A new affiliation does not by itself require another identity check.
- If a User participates in more than one verification purpose, such as both adult athlete and Scout, an existing eligible Veriff check may be reused without repeating document capture. UnicAthlete must still record separately that the applicable adult-athlete and Scout purposes are satisfied.
- When a person's identity verification becomes invalid or requires reverification, every visibility or athlete-access eligibility result depending on it is suspended.

Identity verification does not:

- prove that a guardian is the athlete's parent or legal guardian;
- confirm a Scout's organization affiliation or recruiting authority;
- record consent, permission, Terms agreement, or Privacy Notice acknowledgment;
- make an Athlete Sport Profile visible; or
- grant a Scout access to athletes.

## Identity Information and Mismatches

- Guardian verification must establish adult age and a sufficient match to the guardian's full legal name.
- Adult-athlete verification must establish adult age and a sufficient match to the Athlete Profile's full legal name and date of birth.
- Scout verification must establish adult age and a sufficient match to the Scout's full legal name.
- Formatting differences such as capitalization, spacing, middle-name presentation, accents, or transliteration must not be treated as a confirmed identity conflict by themselves.

When identity information cannot be matched sufficiently:

- verification remains incomplete and the dependent visibility, affiliation-review, or athlete-access eligibility remains blocked;
- Veriff information must not automatically overwrite UnicAthlete account or profile information;
- the User may retry when the Veriff flow permits it; and
- the User is directed to support when the UnicAthlete legal name or athlete DOB may require correction.

The User sees a safe explanation such as `Your identity information doesn't match your account`. The product must not expose unnecessary fraud, document, biometric, or provider-review details.

## Email Prerequisite and Verification Journey

The User must control a verified account email before starting identity verification. A valid invitation link that securely authenticates and verifies the exact invited email satisfies this prerequisite. Organization work-email verification remains a separate affiliation-specific check and does not replace account-email verification.

When the account email is not verified, the identity-verification status remains `Not started`. The UI shows the identity step but disables `Verify identity`, explains that email verification is required first, and presents the applicable `Verify email` or `Resend verification email` action. The first verification email is sent automatically; resend is a recovery action and is unavailable after verification succeeds.

After account-email verification, the common identity journey is:

1. show the verification purpose, why it is required, and the approved information about third-party processing and UnicAthlete's data handling;
2. start or resume the Veriff flow from `Verify identity`;
3. return the User to the appropriate profile or settings destination;
4. show `In progress` until Veriff confirms an outcome rather than presenting completion of the flow as successful verification;
5. show the applicable user-facing verification status; and
6. update the applicable visibility or athlete-access eligibility and show the next available action.

Guardian and adult-athlete verification appears as a requirement for Sport Profile visibility. Scout verification appears in the restricted Scout Profile and, once successful together with the required organization-email check, allows the saved affiliation application to enter manual review automatically. A non-successful or unfinished result shows only the appropriate retry, continue, start-again, or support action.

Changing an account email requires verification of the new address and updates any affected eligibility. Email verification and identity verification remain separate statuses.

## Verification Entry Point

Identity verification is managed from one `Account & Verification` settings experience because it belongs to the User rather than to one profile. It shows:

- account-email verification status;
- identity-verification status and verification date when applicable;
- why verification is required; and
- the single currently available action or safe next step.

The same identity status may appear contextually without creating another verification flow:

- a guardian sees the requirement in the applicable athlete visibility area and follows it to their own Account & Verification settings;
- an adult athlete sees it in the Sport Profile visibility area and follows it to their Account & Verification settings; and
- a Scout sees it in the restricted Scout Profile eligibility checklist and follows it to their Account & Verification settings.

Veriff is not forced during account signup. Users may create and edit permitted private profile information first. After the Veriff flow, the User returns to the appropriate UnicAthlete context from which verification was started. A guardian managing multiple Athlete Profiles sees one person-level identity status rather than separate verification flows for each athlete.

## Privacy Information Before Verification

Identity-verification information is provided in three layers:

1. the UnicAthlete Privacy Notice explains the identity data processing in detail, including Veriff's involvement, purposes, information received by UnicAthlete, retention, international transfers, applicable user rights, and other legally required information;
2. the Terms of Use explain the applicable product rules, including when identity verification is required and how an invalid or incomplete verification affects eligibility; and
3. a short notice appears immediately before the User is sent to Veriff.

The pre-verification notice clearly states:

- that Veriff performs the identity check;
- why the check is required in that User's context;
- that identity information is provided directly to Veriff;
- that UnicAthlete receives the verification result;
- that successful identity verification alone does not grant athlete visibility, Scout access, or Scout affiliation approval; and
- where the User can open the applicable UnicAthlete and Veriff privacy information.

The User actively selects `Continue to Veriff` before leaving UnicAthlete. No additional consent checkbox is required unless the approved legal position or Veriff journey requires one.

The final legal wording, legal basis, retention language, and description of the parties' data-protection roles must be approved before production use. Slice 4 defines the product placement and behavior, not final legal text.

## Verification Lifecycle

Veriff outcomes are presented through the following user-facing product states. The product does not need to expose Veriff's technical status names.

| Product state | Meaning and available action |
|---|---|
| `Not started` | Verification has not begun. Show `Verify identity` when account email is verified. |
| `In progress` | The User may need to continue the Veriff flow, or wait while a submitted verification is being checked. Show only the applicable message or action. |
| `Action required` | The User needs to retry, resubmit, start again, resolve an information mismatch, or contact support. Explain the safe next step. |
| `Verified` | Verification succeeded. Show the verification date and no repeat action. |
| `Unable to verify` | Verification did not succeed. Offer another attempt only when available; otherwise direct the User to support. |
| `Reverification required` | A previously verified User must establish identity again. Show `Verify again` and the reason that can safely be disclosed. |

Information mismatch and an unfinished or expired session are reasons behind `Action required`, not additional top-level product statuses.

UnicAthlete retains the verification purpose, status, Veriff reference, relevant dates, and sufficient history for support and audit. Raw identity documents must not be retained by UnicAthlete unless a later approved legal and privacy requirement explicitly requires it.

## Interrupted, Pending, and Expired Journeys

If verification is interrupted, pending, or expired, the product shows the correct current state and an appropriate next action. An interrupted journey is not treated as an unsuccessful identity check. Until verification succeeds, dependent athlete visibility or Scout athlete access remains unavailable, while permitted private profile editing may continue.

## Verification Validity and Reverification

A successful identity verification has no routine expiration in the MVP. The expiry or abandonment of an unfinished Veriff session does not invalidate an earlier successful verification. Scout organization-affiliation verification remains a separate result with its own 12-month validity policy.

Identity verification must be re-established only when:

- an identity-verified person changes their legal name;
- an adult athlete's date of birth is corrected;
- Veriff or an authorized UnicAthlete administrator invalidates the previous result;
- an account-integrity or safety concern requires a new check; or
- a later approved policy introduces a new requirement.

While reverification is required, any dependent athlete visibility or Scout athlete access is suspended. Private profile editing may continue unless a separate safety or account hold prevents it. The product shows `Reverification required`, the reason that can safely be disclosed, and the next available action.

## Verification Notifications

Slice 4 sends a transactional email when:

- identity verification succeeds;
- additional action or another attempt is required;
- identity verification cannot be completed;
- reverification becomes required;
- a previously valid verification is invalidated; or
- a verification change suspends affected athlete visibility or Scout athlete access.

Routine technical or in-progress updates do not each require an email. Verification emails contain only a simple status explanation, the safe visibility or access consequence when applicable, the next available action, and a secure link to `Account & Verification` settings. They must not contain identity-document information, biometric information, detailed Veriff reason codes, fraud reasoning, or restricted safety details.

When one guardian verification affects multiple Athlete Profiles, the guardian receives one identity-status email. Each affected athlete with an activated login may separately be told that their Sport Profile is temporarily private, without receiving the guardian's identity-verification details.

These notification events must remain reusable by the future in-platform notification centre. Slice 4 does not add the notification centre itself.

## Manual Review and Support Boundaries

Veriff determines whether identity verification succeeds. UnicAthlete administrators do not manually mark a User as identity-verified after an unsuccessful Veriff result.

Support may help a User correct account information, resolve a technical problem, or begin another verification attempt. An authorized administrator may invalidate an existing verification or require reverification when there is a safety or account-integrity concern. The action, reason, authorized actor, and timestamp must be retained.

Scout affiliation verification remains a separate manual UnicAthlete-admin process. A successful identity verification confirms the Scout's identity and adult age; it does not confirm their professional affiliation.

## Derived Eligibility Gates

Eligibility depends on all applicable requirements below; no single verification or approval makes the User eligible by itself.

Athlete Sport Profile visibility eligibility considers at least:

- the applicable profile controller's verified account email;
- the applicable verified guardian or verified adult athlete;
- required permission or consent records;
- Recruiter-Ready status;
- account and Sport Profile status; and
- the absence of an applicable safety or administrative hold.

Scout athlete-access eligibility considers at least:

- verified account email;
- verified Scout identity;
- an active, unsuspended Scout account;
- an active, confirmed, unexpired organization affiliation; and
- the absence of an applicable safety or administrative hold.

### Eligibility Status Mapping

All applicable gates must pass for the result to be `Eligible`. Any failing gate produces `Ineligible` and an appropriate user-facing reason.

| Athlete Sport Profile visibility gate | Passing state |
|---|---|
| Account email | `Verified` |
| Applicable guardian or adult-athlete identity | `Verified` |
| Required visibility permission or consent | Valid and not withdrawn, expired, or replaced |
| Recruiter-Ready | `Yes` |
| Athlete account and Sport Profile | Active and not suspended |
| Applicable safety or administrative hold | None |

| Scout athlete-access gate | Passing state |
|---|---|
| Account email | `Verified` |
| Scout identity | `Verified` |
| Scout account | Active and not suspended |
| Affiliation relationship | `Active` |
| Affiliation application | `Approved` |
| Affiliation verification | `Confirmed` and not expired |
| Applicable safety or administrative hold | None |

Profile Completion and the athlete's visibility setting do not determine visibility eligibility. The visibility setting determines whether an eligible Sport Profile is intended to be visible.

If an Athlete Sport Profile loses eligibility, it becomes effectively private and its visibility control is disabled. Restoring eligibility only makes the control available again; the authorized athlete or guardian must explicitly turn visibility on. Scout athlete access may resume when all Scout eligibility gates pass again, unless an applicable safety or administrative restriction still requires deliberate clearance.

Recruiting scopes such as Men's Soccer and Women's Soccer are self-declared recruiting information. They are not identity or affiliation verification results or general eligibility gates, although a later discovery or interaction rule may restrict activity to the applicable scope.

When eligibility is blocked, the product shows the applicable reason and next available action rather than only saying `Not eligible`. Reasons may include identity verification required, guardian permission required, profile not Recruiter-Ready, affiliation not confirmed or expired, and an administrative hold.

## Age and Date-of-Birth Recalculation

Date of birth remains the source of truth. Age band is derived and recalculated automatically as time passes and immediately after an authorized DOB correction. Crossing an age boundary recalculates account-management, consent or permission, communication, identity-verification, and effective visibility-eligibility rules.

An age transition or DOB correction must never automatically grant additional access, independence, or visibility. If newly applicable requirements are incomplete, the affected functionality moves to the safer restricted state until those requirements are satisfied.

Date of birth may be corrected before account creation is completed. After account creation it is locked and cannot be changed through ordinary profile editing. The UI directs the athlete or guardian to contact support if it is incorrect.

For the MVP, DOB correction is a manual support process rather than a dedicated product workflow. An authorized correction records the previous and corrected values, requester, authorized actor, reason, and timestamp. The corrected DOB immediately updates the applicable age-based rules; if requirements change, the profile remains or becomes private until they are satisfied. If an adult athlete had already passed identity verification, their identity must be re-established before visibility can be enabled again.

Slice 4 does not include a DOB-correction form, evidence-upload screen, request dashboard, or correction-status tracker.

## Approaching the 18th Birthday

The system generates age-transition notification events:

- 7 days before the athlete's 18th birthday;
- 3 days before the athlete's 18th birthday;
- 1 day before the athlete's 18th birthday; and
- on the 18th birthday, confirming the transition.

Slice 4 delivers these notifications by transactional email. The same events must remain reusable by the future in-platform notification centre.

If the athlete has an activated login, both the athlete and connected guardian receive the applicable reminders. The athlete is told that they will become the sole profile manager, the guardian will lose access to that athlete's profile, and the Sport Profile will become effectively private until the applicable adult requirements are completed.

Adult-purpose identity verification is not available before the athlete's 18th birthday in the MVP. Before the birthday, the athlete may activate their login and verify their email. The identity-verification action becomes available when the adult transition occurs.

Pre-birthday notifications show a short preparation checklist, including account activation and email verification, and clearly label adult identity verification and adult legal actions as available on the 18th birthday. They must not imply that completing one item automatically makes the Sport Profile visible.

If the athlete has no activated login, the guardian receives a clear warning and an action to invite the athlete to claim the existing Athlete Profile. Claiming or joining must never create a duplicate Athlete Profile.

## Transition on the 18th Birthday

On the athlete's 18th birthday, the product:

1. changes the derived age band to adult;
2. ends the guardian's automatic access and minor-based management permissions for that athlete;
3. preserves the guardian relationship, previous authority, permissions, consent records, and actions as history;
4. leaves the guardian's own User account active, including access to any other Athlete Profiles they legitimately manage;
5. assigns adult profile control to the athlete only through their activated User relationship;
6. requires the adult athlete to agree to the applicable Terms, acknowledge the Privacy Notice, provide any required purpose-specific permission, and complete adult-athlete identity verification before visibility can be enabled;
7. recalculates all eligibility gates; and
8. makes the Athlete Sport Profile effectively private when adult requirements are incomplete.

The previous visibility preference may be preserved for context, but effective visibility becomes off at the transition and must not resume automatically. The adult athlete may continue managing the private profile without identity verification. To make the Sport Profile visible again, the athlete must complete the applicable adult legal actions, pass adult-athlete identity verification, satisfy every other visibility gate, and explicitly enable visibility.

If the athlete has not claimed and activated their account by the birthday, the profile becomes locked and effectively private. The guardian loses access and cannot continue editing it under minor-based authority. The adult athlete must securely claim the existing profile and verify their account email before private management can continue. The applicable adult legal actions and adult identity verification remain required before visibility can be enabled.

Automatic guardian access does not continue after age 18. A future adult athlete may voluntarily grant another person access only through a separately defined role, invitation, and permission model.

The birthday transition has no guardian-access grace period. Guardian access ends throughout the product as soon as the transition takes effect. The former guardian cannot view or manage the adult athlete's profile unless the adult later grants access through the separately defined voluntary-access model.

## Required Product Records

- Record the age-transition event, previous and new age band, effective time, eligibility changes, and any management-permission changes.
- Preserve historical legal and relationship records; do not rewrite minor-period actions as adult actions.
- Preserve verification-status history, purpose, Veriff reference, relevant dates, and the reason for a status change where applicable.
- Update eligibility whenever a contributing verification, permission, affiliation, profile-readiness, age, or hold state changes.

## Explicitly Outside Slice 4

- identity verification of athletes under 18;
- proof that a guardian is the athlete's legal guardian;
- automatic Scout organization-affiliation verification;
- criminal or safeguarding background checks;
- production athlete discovery or Scout access;
- the complete production profile-visibility experience;
- voluntary delegated access granted by an adult athlete; and
- storage of raw identity documents without a separately approved requirement.
