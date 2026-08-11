# MVP Slice 2 — Athlete and Soccer Profile Foundation

## Outcome

An email-verified athlete or authorized guardian can create, resume, and edit a private shared `AthleteProfile`, the athlete's first sport-neutral `AthleteSportProfile`, and its Soccer-specific `SoccerProfile` extension.

## Included

- resumable structured-data onboarding without duplicate profile creation;
- shared athlete, education, and measurement information - `AthleteProfile` level;
- functional private profile-photo upload and replacement - `AthleteProfile` level;
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
- **Ages 14–17, athlete has not joined:** the guardian completes onboarding and edits the private profile. Athlete participation is optional when the guardian starts, except that independent mode requires an activated athlete login.
- **Ages 14–17, athlete has joined:** the athlete becomes the ordinary-content editor. The guardian retains view and applicable supervision access but cannot edit ordinary profile content.
- **Ages 16–17, independent mode:** the athlete edits ordinary profile content without guardian review. The guardian remains view-only and retains only the applicable legal, permission, and safety actions.
- **Adults 18+:** the athlete edits and manages the profile.

When an invited athlete activates their account, editing authority transfers to the athlete without recreating the profile. Guardian editing must not return automatically because the athlete account becomes inactive or unavailable. Detailed transitions and the access matrix are defined in `06-athlete-guardian-profile-access-product-requirements.md`.

Ordinary profile content, edited by the guardian before athlete activation and by the athlete afterward, is limited to:

- city, country of residence, country or countries of citizenship, languages, profile photo, education status, school country, and graduation date;
- height and weight entries;
- Soccer recruiting category, positions, preferred foot, and player summary;
- current/unattached status, team-seasons, playing history, statistics, and achievements;
- recruiting availability, target college start, destination interest, and coach-reference status.

Country and language selectors must persist standardized identifiers. This includes citizenship, country of residence, school country, TeamSeason country, primary language, English, and additional languages. Display labels may be localized without changing the stored identity.

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
- Slice 2 stores cumulative season totals only. The current ordinary-content editor updates them through `Edit season statistics`; Slice 2 does not create match-by-match records or provide an `Add match` action.
- Preserve an explicit `No previous team seasons` response on the Soccer Profile. It cannot coexist with a previous TeamSeason and must be cleared when previous history is added.
- Historical corrections record actor and timestamp. Normal removal archives the record from display; approved retention/deletion rules govern permanent erasure.
- Recruiter-Ready uses a sufficiently complete active `TeamSeason` or explicit unattached state. A draft `TeamSeason` cannot satisfy it. Previous seasons improve completion but do not block Recruiter-Ready.

The one-active-record rule is an MVP product constraint. The relationship model must remain extendable to concurrent affiliations in a later slice.

## Protected Actions

Ordinary profile editing does not grant authority over guardian-required legal actions, relationships, supervision, external sharing, visibility, or profile/account deletion. Visibility authority follows Spec 03 and the access matrix in Spec 06. For under-14 and guardian-managed unjoined profiles, the guardian performs profile and applicable protected actions directly. Joined athletes manage ordinary content; the guardian performs only the supervisory actions assigned to them.

- Date of birth is not normally editable by either person and uses the correction process.
- Legal/full-name correction uses an audited exception process rather than ordinary profile editing.
- Each login owner controls their own email verification, password, multifactor authentication, and recovery information. Credentials are never shared.
- In independent mode, the guardian may make the Sport Profile private but cannot enable visibility. Withdrawal of a guardian-provided permission is a separate legal action from changing visibility.

## No Guardian Review of Ordinary Profile Changes

Once an athlete aged 14–17 joins, ordinary profile changes do not require guardian approval, including when visibility is introduced later. Guardian supervision applies to visibility, required permissions, and the future external-interaction rules defined for messaging and documents. Processing, moderation, Recruiter-Ready, safety, and administrative rules may still prevent changed information from being exposed.

## Profile Photo Boundary

Profile-photo upload is functional in Slice 2 and is separate from deferred Soccer media. Accept JPEG and PNG, store a private object reference rather than a publicly guessable permanent URL, and allow the current ordinary-content editor to upload or replace it. The photo remains unavailable to scouts in Slice 2 and does not use the future paid Soccer-media allowance. File-size, image-dimension, and processing limits must be configurable; Engineering may select safe operational defaults for Slice 2.

## Media Boundary and Future Rules

Slice 2 shows Media placeholders only. It does not provide upload, storage, processing, clipping, playback, replacement, deletion, moderation, or minor-specific media approval functionality.

Future Soccer media belongs to the applicable `AthleteSportProfile`. Its upload, processing, moderation, editing, and exposure rules are defined in the media slice. A guardian does not approve ordinary profile changes merely because media contributes to the profile; any narrower minor-safety rule must be explicitly defined in that slice. Removing or invalidating the approved Main Evaluation Video makes Recruiter-Ready `No` and suspends effective visibility.

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
