# Athlete Sport Profile Completion — Product Requirements

## Purpose

Define how UnicAthlete calculates and displays how fully an athlete's applicable profile information has been completed. Completion measures profile coverage, not athlete quality, recruiting potential, verification, or scout interest.

Completion is calculated separately for each `AthleteSportProfile`. A Sport Profile may use applicable shared `AthleteProfile`, education, and measurement data without duplicating those source records.

## Separation From Other Statuses

- **Profile Completion** is a percentage showing how much applicable profile information has been addressed.
- **Recruiter-Ready** is a separate pass/fail checklist for the minimum information needed for meaningful recruiter review.
- **Visibility** controls whether eligible scouts may access the Sport Profile.
- **Verification** records whether an applicable identity, source, or document check has occurred.

An athlete may become Recruiter-Ready below 100% completion. Completion must not activate visibility, satisfy verification, change Recruiter-Ready by itself, or affect search ranking.

## Soccer Recruiter-Ready Checklist

Recruiter-Ready is a pass/fail content evaluation. It means that the Soccer Profile contains enough information for a scout to make an initial decision about whether to continue evaluating the athlete. It does not mean that the athlete is eligible, verified, visible, available, or likely to be recruited.

Every applicable item below must pass.

### Athlete Identification

- Full name is present.
- Date of birth is present.
- City is present.
- Country of residence is present.

### Education and Recruiting Timeline

- Education status is selected.
- Current or most recent school is present.
- Expected or completed secondary-school graduation date is present when applicable.
- Target college start contains a specific term and year.

`Not sure yet` may count as an answered field for Profile Completion, but it does not satisfy the Recruiter-Ready target-college-start requirement.

### Basic Soccer Information

- Recruiting category is selected as `Men's Soccer` or `Women's Soccer`.
- Primary position is selected.
- Preferred foot is selected.
- Current height is present.

Secondary position, weight, and player summary are not required for Recruiter-Ready.

### Current Playing Context

One of these conditions must pass:

1. The athlete explicitly declares `Currently unattached`; or
2. The active `TeamSeason` contains:
   - club or academy;
   - team or squad;
   - country;
   - competition or league;
   - squad level;
   - competition age group;
   - season;
   - position played.

Shirt number is not required for Recruiter-Ready.

### Recruiting Status

- Recruiting availability is selected and displayed.

Supported availability answers such as `Committed` or `Not currently seeking` do not make the content unreviewable, but the selected status must be clear to the scout.

### Evaluation Evidence

- The Main Evaluation Video has uploaded and processed successfully.

Skill Clips, full primary-position Skill Clip coverage, Extended Match Footage, and statistics improve evaluation depth but do not block Recruiter-Ready.

### Items That Do Not Block Recruiter-Ready

- profile photo;
- languages;
- secondary position;
- weight;
- player summary;
- statistics;
- previous playing history;
- achievements;
- coach reference;
- Skill Clips;
- Extended Match Footage;
- documents;
- GPA, transcripts, or formal eligibility documents.

### Relationship to Access and Safety

Recruiter-Ready evaluates profile content only. The Soccer Profile may still be unavailable to scouts because visibility, account eligibility, guardian consent, identity verification, or scout-access rules have not passed. Those conditions must be evaluated separately when determining whether the profile is actually accessible.

## Sport Profile Visibility

Visibility belongs to each `AthleteSportProfile`, not to the shared `AthleteProfile`. Each Sport Profile may therefore have its own visibility setting and effective visibility result.

### Visibility Setting and Effective Visibility

The system must distinguish:

- **Visibility setting:** the authorized athlete's or guardian's choice to keep the Sport Profile private or make it available to eligible scouts.
- **Effective visibility:** the access result calculated by the system after applying all content, verification, permission, safety, and account rules.

The supported user choices are:

- `Private`; and
- `Visible to eligible scouts`.

`Visible to eligible scouts` does not mean public, anonymous, or SEO-indexed access. It means access only by scout accounts that satisfy the platform's applicable eligibility and verification rules.

### Requirements to Enable the Visibility Control

The visibility control remains disabled until all applicable requirements pass:

- Recruiter-Ready is `Yes`;
- required athlete, adult, or guardian verification is complete;
- the required visibility permission or consent record exists and remains valid;
- no safety, suspension, or administrative hold blocks visibility; and
- the athlete account and Sport Profile are otherwise eligible for scout access.

Profile Completion does not enable or block visibility. A profile may be Recruiter-Ready and eligible for visibility below 100% completion.

When one or more requirements have not passed, the UI must:

- state that the Sport Profile cannot yet be made visible;
- keep the visibility control disabled; and
- show the applicable satisfied and unsatisfied requirements without exposing sensitive internal review information.

Passing every requirement must only enable the control. It must never automatically make the Sport Profile visible. The authorized user must explicitly select `Visible to eligible scouts`.

### Age-Based Visibility Control

- **Under 14:** the connected authorized guardian controls visibility.
- **Ages 14–15:** guardian approval is required to enable visibility. The athlete may make the Sport Profile private; where choices conflict, the more restrictive choice applies.
- **Ages 16–17:** guardian approval is required to enable visibility unless a different legally approved rule is adopted later. The athlete may make the Sport Profile private; where choices conflict, the more restrictive choice applies.
- **Adults 18+:** the athlete controls visibility.

The ages 16–17 communication-mode decision is separate and must not grant visibility authority by itself.

### Continued Eligibility and Automatic Hiding

Effective visibility must be recalculated whenever an applicable requirement changes. If a visible Sport Profile later fails any requirement—for example, permission is withdrawn, Recruiter-Ready becomes `No`, verification is no longer valid, or a hold is applied—the system must immediately make it unavailable to scouts.

The stored visibility setting may remain `Visible to eligible scouts` while effective visibility is suspended, so the profile can become visible again after the blocking condition is resolved. The UI must clearly show that visibility is currently suspended and why. A product or safety rule may instead require a new explicit visibility action before reinstatement; this behavior must be configurable.

### Data and Audit Requirements

- Store the user-selected visibility setting on the applicable `AthleteSportProfile`.
- Calculate effective visibility from current source records rather than treating it as an independent user-editable status.
- Return structured blocking-reason codes so the UI can explain what remains incomplete.
- Record visibility-setting changes with actor, actor role, previous value, new value, and timestamp.
- Keep verification results, legal permissions, safety holds, and Recruiter-Ready as separate source records or statuses.
- Visibility must expose only the approved recruiter-facing Sport Profile projection. Private documents, direct contact details, legal records, internal status history, and other private information remain inaccessible unless a separate sharing rule permits access.

The exact permission, consent, verification, jurisdiction, and age requirements must be configurable and confirmed through legal and safety review. They must not be hardcoded solely from the placeholder Slice 1 consent language.

### Slice 2 Boundary

Slice 2 calculates Profile Completion and Recruiter-Ready but keeps every Sport Profile private and unavailable to scouts. The production visibility control and scout-access workflow are implemented only when the applicable verification, permission, safety, and scout-eligibility rules are approved and available.

## Soccer Completion Weights

| Profile area | Maximum contribution |
|---|---:|
| Shared Athlete Information | 10% |
| Education | 10% |
| Measurements | 5% |
| Soccer Player Details | 10% |
| Current Playing Context | 15% |
| Performance and Playing History | 10% |
| Recruiting Details | 10% |
| Achievements and References | 5% |
| Soccer Media | 25% |
| **Total** | **100%** |

### Shared Athlete Information — 10%

- Profile photo: 2%.
- City: 2%.
- Country of residence: 2%.
- At least one language: 4%.

Full name and date of birth do not contribute because they are required during account creation.

### Education — 10%

- Education status: 3%.
- Expected or completed graduation date, when applicable: 3%.
- Current or most recent school: 2%.
- School country: 2%.

If graduation information is not applicable to the selected education status, recalculate the section across the remaining applicable education items so the section can still reach 10%.

### Measurements — 5%

- Current height: 2.5%.
- Current weight: 2.5%.

Only the current valid measurement values count. Adding measurement-history records does not add completion credit.

### Soccer Player Details — 10%

- Primary position: 3%.
- Recruiting category: 3%.
- Preferred foot: 2%.
- Secondary-position decision: 1%. A selected secondary position or explicit `No secondary position` counts; an unanswered field does not.
- Player summary: 1%.

Recruiting category belongs to the `AthleteSportProfile`, not the shared `AthleteProfile`. The MVP permits only `Men's Soccer` and `Women's Soccer`. It is a recruiting classification and must not be represented as a determination of competition eligibility or gender identity.

### Current Playing Context — 15%

An explicit `Currently unattached` declaration completes this section because active team fields are then not applicable.

Otherwise, each of these active `TeamSeason` items contributes an equal share of 15%:

- club or academy;
- team or squad;
- country;
- competition or league;
- squad level;
- competition age group;
- season;
- start date;
- position played;
- shirt number or explicit `No fixed shirt number`.

### Performance and Playing History — 10%

- Current-season performance: 6%. The supported statistics must contain numeric values, including valid zero values, or an explicit `Statistics unavailable/not tracked` response.
- Previous playing history: 4%. At least one complete previous `TeamSeason` or an explicit `No previous team seasons` response counts.

If current-season performance is not applicable because the athlete is unattached and has no active `TeamSeason`, recalculate this section across the remaining applicable item.

### Recruiting Details — 10%

- Recruiting availability: 4%.
- Target college start: 4%.
- Destination interest: 2%.

Supported answers such as `Committed`, `Not currently seeking`, and `Not sure yet` count because the question has been answered.

### Achievements and References — 5%

- Soccer achievements or explicit `No achievements to add`: 3%.
- Coach-reference status: 2%.

Coach contact information remains private and does not need to be publicly displayed for the status field to count.

### Soccer Media — 25%

- Main Evaluation Video: 10% when it has uploaded and processed successfully.
- Primary-position Skill Clips: 10%, calculated from coverage of the categories mapped to the selected primary position.
- Extended Match Footage: 5% when it has uploaded and processed successfully.

Calculate the Skill Clip contribution as:

`completed applicable primary-position categories / all applicable primary-position categories × 10`

The denominator varies by primary position while the maximum contribution remains 10%. Secondary-position recommendations do not create completion requirements. One uploaded clip can satisfy no more than one required category for completion, even when it has multiple category tags.

An empty, processing, or failed media upload does not contribute. Additional clips and footage beyond the defined coverage items do not add completion credit.

## Soccer Primary-Position Skill Mapping

| Primary position | Required Skill Clip categories |
|---|---|
| Goalkeeper | Shot Stopping; Handling & Crosses; Goalkeeper 1v1; Goalkeeper Distribution; Goalkeeper Positioning |
| Centre Back | Defending & Pressing; Aerial Play; Passing & Distribution; First Touch & Ball Control |
| Full Back / Wing Back | Pace & Acceleration; Defending & Pressing; Crossing & Chance Creation; Passing & Distribution; Off-ball Movement & Positioning; First Touch & Ball Control |
| Defensive Midfielder | Defending & Pressing; Passing & Distribution; First Touch & Ball Control; Off-ball Movement & Positioning |
| Central Midfielder | Passing & Distribution; First Touch & Ball Control; Off-ball Movement & Positioning; Dribbling & Attacking 1v1 |
| Attacking Midfielder | Dribbling & Attacking 1v1; Passing & Distribution; First Touch & Ball Control; Off-ball Movement & Positioning; Finishing |
| Winger | Dribbling & Attacking 1v1; Crossing & Chance Creation; Off-ball Movement & Positioning; Pace & Acceleration; First Touch & Ball Control; Finishing |
| Forward / Striker | Finishing; Off-ball Movement & Positioning; Dribbling & Attacking 1v1; First Touch & Ball Control; Aerial Play; Pace & Acceleration |

This mapping is an MVP product rule that should be reviewed with soccer recruiting expertise. Engineering must implement it as configurable, versioned product data rather than hardcoded profile columns. Category identifiers used by media records must remain stable even if display labels change.

### Skill Filtering and Recalculation

- Primary-position categories appear first and are marked as required for Skill Clip completion.
- Categories unique to the optional secondary position appear next as recommendations and do not enter the completion denominator.
- Remaining compatible categories may remain available for optional uploads.
- Goalkeeper and outfield categories use separate sets. A goalkeeper/outfield primary-secondary combination may display both sets.
- Changing the primary position immediately recalculates the applicable denominator and completed-category count.
- Changing a position must never delete, retag, or hide an already uploaded clip from its owner.
- A previously uploaded clip counts when its category becomes applicable to the new primary position and its processing status is successful.

## Calculation Rules

- Calculate completion from current source data; it is not manually editable.
- Recalculate after a scored field is saved, applicability changes, or media processing changes status.
- Show a whole-number percentage. Round down, and never display 100% unless every applicable scored item is complete.
- A supported explicit response such as `None`, `Not applicable`, `Not tracked`, or `No previous team seasons` counts only when the product presents it as a valid answer. A blank field does not count.
- Repeated records or uploads must not create additional credit beyond the defined completion item.
- A completed answer counts whether it is self-reported or verified. Verification remains separate.
- Deleted records, expired active records, and failed uploads do not count.
- Rules, weights, applicability logic, and position mappings must be configurable and versioned. Source records remain the source of truth.

## Information Excluded From Completion

- full name and date of birth already required during account creation;
- repeated measurement-history entries;
- additional seasons after playing-history coverage has been satisfied;
- additional clips or footage after the defined media coverage has been satisfied;
- documents in the private document library;
- verification results;
- visibility settings;
- guardian or account-management status.

## UI Requirements

- Display the overall Soccer completion percentage and applicable-item count.
- Provide a section-level breakdown showing completed and incomplete areas.
- Identify the next incomplete applicable item.
- Show which primary-position Skill Clip categories are complete and missing.
- Keep Recruiter-Ready and visibility visually separate from completion.
- Do not show completion as a scout rating or use it in recruiter-facing ranking.

## Acceptance Examples

- An athlete may be Recruiter-Ready below 100% completion.
- A 100% complete profile with `Not sure yet` as its target college start is not Recruiter-Ready because the minimum checklist requires a specific term and year.
- A Recruiter-Ready profile is not automatically visible to scouts.
- A Soccer Profile without a selected recruiting category is not Recruiter-Ready.
- A profile with no Skill Clips may be Recruiter-Ready when every minimum checklist item, including the Main Evaluation Video, passes.
- An athlete marked `Currently unattached` may be Recruiter-Ready without an active `TeamSeason`.
- With no successfully processed Soccer media, the maximum completion is 75%.
- Without a Main Evaluation Video, the maximum completion is 90%.
- A Centre Back with three of four mapped categories receives `3 / 4 × 10 = 7.5%` from Skill Clips.
- A Winger with three of six mapped categories receives `3 / 6 × 10 = 5%` from Skill Clips.
- An explicit `Currently unattached` response completes Current Playing Context.
- A valid zero statistic counts; a blank statistic does not.
- A valid explicit `No previous team seasons` response completes the applicable history item.
- Uploading more clips in an already covered category does not increase completion.
- The UI displays 100% only when every applicable scored item has been addressed.
- A Recruiter-Ready Sport Profile remains private until every visibility requirement passes and an authorized user explicitly enables visibility.
- Passing the final visibility requirement enables the control but does not automatically publish the Sport Profile.
- A 100% complete Sport Profile with Recruiter-Ready `No` cannot be made visible.
- A visible Sport Profile becomes unavailable to scouts immediately when a required permission is withdrawn or a safety or administrative hold is applied.
- Making one Soccer Profile visible does not change the visibility of another Sport Profile belonging to the same athlete.
- A scout who does not satisfy the applicable scout-access rules cannot access a Sport Profile marked `Visible to eligible scouts`.
