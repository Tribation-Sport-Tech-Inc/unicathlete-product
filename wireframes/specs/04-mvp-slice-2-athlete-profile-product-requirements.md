# MVP Slice 2 — Athlete and Soccer Profile Foundation

## Outcome

An email-verified athlete or authorized guardian can create, resume, and edit a private shared `AthleteProfile`, the athlete's first sport-neutral `AthleteSportProfile`, and its Soccer-specific `SoccerProfile` extension.

## Included

- resumable structured-data onboarding without duplicate profile creation;
- shared athlete, education, and measurement information - `AthleteProfile` level;
- shared Sport Profile lifecycle and status information - `AthleteSportProfile` level;
- Soccer player, team-season, playing-history, performance, and recruiting information - one-to-one `SoccerProfile` extension;
- Profile Completion and Recruiter-Ready calculation using the supporting completion specification;
- audit information identifying who changed a record and when;
- non-functional placeholders for future Soccer media and private documents.

## Minimum Required to Finish Onboarding

Finishing onboarding requires only:

- city and country of residence;
- Soccer recruiting category;
- primary position; and
- a choice between `Currently playing with a club or team` and `Currently unattached`.

All other profile fields may be completed later. A field may still contribute to Profile Completion or be required for Recruiter-Ready without being required to finish onboarding. Completing onboarding creates or updates a private draft only.

## Onboarding Lifecycle

- Create the private `AthleteProfile`, first Soccer `AthleteSportProfile`, and its `SoccerProfile` extension idempotently when onboarding starts; do not wait for the final action and do not create duplicates on resume.
- Persist valid changes automatically and expose `Saving`, `Saved`, or actionable save-error feedback. `Continue` also attempts to persist the current step.
- `Continue` validates only the required fields on the current step. Optional steps may be skipped.
- `Save and exit` preserves progress. Resume the existing draft at the first incomplete step containing an onboarding requirement.
- Enable `Finish profile setup` only when all minimum onboarding requirements are satisfied. Finishing sets onboarding to `Completed` and opens the existing profile; it does not publish the Sport Profile or make it Recruiter-Ready.
- Reopening profile setup edits the same records. Onboarding status must support at least `Not started`, `In progress`, and `Completed`.

## After Onboarding

- Finishing onboarding opens the production Athlete Profile.
- Once onboarding is `Completed`, later removal of optional information or a lower Profile Completion score does not restart it.
- Recalculate Profile Completion and Recruiter-Ready after each successful change that can affect either result.
- Shared `AthleteProfile` information and Soccer-specific `SoccerProfile` information remain separate in both persistence and their presentation on the profile page.

In this specification, **Soccer Sport Profile** refers to the combined product view of the sport-neutral `AthleteSportProfile` and its one-to-one Soccer-specific `SoccerProfile`. Shared lifecycle, visibility, completion, and Recruiter-Ready state belong to `AthleteSportProfile`; Soccer-only fields belong to `SoccerProfile`.

## Draft Editing Authority

- **Under 14:** the authorized guardian completes onboarding and edits all profile content; the athlete has no login.
- **Ages 14–15:** the connected athlete and authorized guardian may complete onboarding and edit ordinary profile content. The guardian controls supervised-account actions.
- **Ages 16–17, supervised mode:** the connected athlete and authorized guardian may edit ordinary profile content, with the same guardian controls as ages 14–15.
- **Ages 16–17, independent mode:** the athlete may edit ordinary profile content without a guardian review workflow. Any legally required guardian permission for visibility remains a separate rule and does not create ongoing review of the athlete's edits.
- **Adults 18+:** the athlete edits and manages the profile.

In this specification, **guardian-controlled profile** means an ages 14–15 profile or an ages 16–17 profile in supervised mode where the athlete has a login but specified actions require guardian review. It does not mean:

- an under-14 profile, because the athlete has no login and the guardian edits directly;
- an ages 16–17 profile in independent mode; or
- an adult profile.

Ordinary athlete-editable content is limited to:

- city, country of residence, country or countries of citizenship, languages, profile photo, education status, school country, and graduation date;
- height and weight entries;
- Soccer recruiting category, positions, preferred foot, and player summary;
- current/unattached status, team-seasons, playing history, statistics, and achievements;
- recruiting availability, target college start, destination interest, and coach-reference status.

## TeamSeason Lifecycle

- Store the required playing-status choice (`With a team` or `Currently unattached`) on the Soccer `AthleteSportProfile`, separately from `TeamSeason` records.
- Choosing `With a team` does not require complete team details during onboarding. Partially entered current-team information is saved as a private draft `TeamSeason`.
- A draft `TeamSeason` becomes active only when club or academy, team or squad, country, and season are present. Draft fields contribute to Profile Completion only where the completion rules award the individual completed field; a draft never satisfies Recruiter-Ready current-playing requirements.
- A Soccer `AthleteSportProfile` may have at most one active `TeamSeason` in the MVP. `Currently unattached` and an active `TeamSeason` are mutually exclusive.
- `TeamSeason` is a separate record, not current-team columns on `AthleteSportProfile`.
- Activating a new `TeamSeason` closes the previous active record and preserves it in playing history. The transition must be atomic so two active records cannot result.
- Changing from `With a team` to `Currently unattached` requires user confirmation, then closes any active `TeamSeason` without deleting it. Adding a new active `TeamSeason` changes the playing-status choice to `With a team`.
- A new season at the same club creates a new record rather than overwriting the previous season.
- Store the real TeamSeason start date and optional end date separately from system lifecycle timestamps such as `closed_at`. Historical TeamSeasons may preserve both dates; an active TeamSeason normally has no end date yet.
- Season statistics belong to their `TeamSeason`. The applicable configurable statistic set is selected from the position played in that season; goalkeeper and outfield seasons therefore expose different fields. Statistic types must not be fixed columns on `TeamSeason`, and the values must not be stored as general lifetime Soccer Profile values. Detailed scoring rules are defined in Spec 03.
- Historical corrections record actor and timestamp. Normal removal archives the record from display; approved retention/deletion rules govern permanent erasure.
- Recruiter-Ready uses a sufficiently complete active `TeamSeason` or explicit unattached state. A draft `TeamSeason` cannot satisfy it. Previous seasons improve completion but do not block Recruiter-Ready.

The one-active-record rule is an MVP product constraint. The relationship model must remain extendable to concurrent affiliations in a later slice.

## Protected Actions

For a guardian-controlled profile, only the guardian may perform guardian-required legal actions, manage supervision/relationships, approve external sharing, or request profile/account deletion. Visibility authority follows the Age-Based Visibility Control rules in `03-athlete-sport-profile-completion-product-requirements.md`. For under-14 profiles, the guardian performs all profile and protected actions directly rather than reviewing athlete actions. Independent-mode ages 16–17 and adult profiles do not use the guardian-review workflow; any separate legally required permission must be evaluated independently.

- Date of birth is not normally editable by either person and uses the correction process.
- Legal/full-name correction is guardian-controlled for a supervised minor and must be audited.
- Each login owner controls their own email verification, password, multifactor authentication, and recovery information. Credentials are never shared.
- Either athlete or guardian may make a Sport Profile more private; the more restrictive choice wins.

## Future Review of Changes to Visible Profiles

This workflow is defined for future compatibility and is not implemented in Slice 2. It applies only when a guardian-controlled profile, as defined above, is currently visible to scouts. It therefore applies to ages 14–15 and supervised ages 16–17 only.

It does not apply while the Sport Profile is private, to under-14 profiles, to independent-mode ages 16–17, or to adults.

For an applicable visible guardian-controlled profile:

- Athlete changes to scout-visible fields are saved as one private change set rather than overwriting approved values.
- The guardian receives a notification and reviews previous and proposed values, actor, and timestamp.
- The guardian approves or rejects the complete change set. Approval applies it atomically and recalculates Recruiter-Ready and effective visibility; rejection preserves approved values and may include a reason.
- The last approved version may remain visible while review is pending. The athlete can make the Sport Profile private immediately.
- Guardian edits may apply directly, subject to Recruiter-Ready, verification, permission, safety, and administrative gates.

Future change-set data must support `draft`, `pending`, `approved`, `rejected`, and `withdrawn`, plus submitter, reviewer, timestamps, and previous/proposed values.

## Media Boundary and Future Rules

Slice 2 shows Media placeholders only. It does not provide upload, storage, processing, clipping, playback, replacement, deletion, moderation, or guardian media-review functionality.

Future Soccer media belongs to the applicable `AthleteSportProfile`. While private, an authorized account user may prepare media without triggering visible-profile review. The following guardian media-review rules apply only when an ages 14–15 or supervised ages 16–17 guardian-controlled profile is visible to scouts; they do not apply to under-14, independent-mode ages 16–17, or adult profiles:

- athlete-created uploads, replacements, deletions, category/timestamp changes, titles, context, thumbnails, and ordering require guardian review after successful processing;
- guardian changes may apply directly after successful processing and safety checks;
- a replacement remains private until approved, while the last approved item remains unchanged;
- removing or invalidating the approved Main Evaluation Video makes Recruiter-Ready `No` and suspends effective visibility;
- guardian approval never overrides processing, moderation, safety, or administrative holds.

Completion, Recruiter-Ready, visibility and position-to-skill category rules are defined in `03-athlete-sport-profile-completion-product-requirements.md`.

The future media model must support a configurable free upload allowance and separately purchased additional upload capacity. Exact file-size, duration, quantity, storage, pricing and entitlement rules are deferred to the media slice and are not approved in this specification.

## Document Boundary

Slice 2 shows Documents placeholders only. It does not provide upload, storage, scanning, opening, downloading, replacement, deletion, requests, sharing, or access grants.

Future `AthleteDocument` records belong to the shared `AthleteProfile` and may optionally link to one or more `AthleteSportProfile` records. Linking a document to a Sport Profile never makes it scout-accessible and never affects Profile Completion or Recruiter-Ready.

## Explicitly Outside Slice 2

- production visibility controls and scout access;
- messaging and communication permissions;
- document requests or scout document access;
- sharing private contact information;
- scout-facing information requests;
- functional media infrastructure;
- functional document infrastructure;
- verification-provider integrations.

These future features must use separate permissions and access-grant records rather than inheriting access from Sport Profile visibility.

## Slice 2 Status Behavior

- Every Sport Profile remains `Private draft` and unavailable to scouts.
- Media contributes zero until the media slice is implemented, so maximum temporary completion is 75%.
- Recruiter-Ready remains `No — Main Evaluation Video required` until functional media exists.
- Completing onboarding does not publish the profile or satisfy verification, permission, or visibility requirements.
