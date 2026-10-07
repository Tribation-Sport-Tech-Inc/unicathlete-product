# MVP Slice 8 Part 2 — Scout Evaluations and Internal Notes

## Goal

An eligible Scout can evaluate and maintain private working notes about an athlete within a recruiting project.

## Access and Ownership

- Evaluations, notes, and activity belong to the Workspace athlete-project record; store the acting Scout and confirmed affiliation context separately.
- The athlete must have an active pipeline record before the Scout can create an evaluation or internal note. Saved-only athletes must first enter the pipeline.
- The pilot Scout is the individual Workspace's only authorized member. Affiliation does not grant access.
- Future authorized Workspace members may create their own evaluations without migrating existing records. A future team Workspace must not automatically receive records from an individual Workspace.
- Athletes and guardians cannot access or receive notifications about evaluations, notes, stages, priorities, recommendations, or outcomes.
- Loss of Scout eligibility blocks access without changing records. Restore access when eligibility returns and the athlete remains accessible.

## Athlete Project Record

Opening an athlete from a project's Saved Athletes list or pipeline opens their project record. Show:

1. athlete summary and `View profile`;
2. project membership, pipeline stage, and priority;
3. Current evaluation, draft, and Evaluation history;
4. `Activity & Notes`; and
5. available project actions.

The Scout-facing athlete profile lists the projects containing the athlete. Each project card shows its state, the athlete's project status, and `Open project record`.

## Evaluation Lifecycle

- Allow multiple submitted versions but only one active draft per author, athlete, and project.
- The author's latest submitted, non-withdrawn version is their Current evaluation. During the pilot, it is the Workspace's only Current evaluation.
- `Update evaluation` creates a draft prefilled from the Current evaluation; submitted versions cannot be edited directly.
- Autosave drafts and allow the Scout to continue later. Drafts do not count as submitted evaluations and may be discarded after confirmation.
- Submission creates an immutable version and removes the active draft.
- Submitted evaluations cannot be permanently deleted. `Withdraw evaluation` requires confirmation, removes that version from Current evaluation eligibility, and retains a visible withdrawn record; a reason is optional.
- If an earlier non-withdrawn version exists, it becomes Current. Show `Evaluation withdrawn` as the card status only when no submitted non-withdrawn version remains.
- Future members may each have a Current evaluation. Any future team summary or consensus must be separate from individual evaluations.

## Evaluation Form

### Observation

Require an observation date and one controlled source:

- Main Evaluation Video;
- Skill Clips;
- Extended Match Footage;
- live match;
- training session;
- trial or assessment;
- multiple sources; or
- other.

For multiple sources, record the most recent observation date. `Other` requires a short description. The Scout may link platform media and timestamps. Preserve only the reference; if the media becomes unavailable, retain the evaluation and mark the source unavailable.

### Rated Criteria

- Use one versioned UnicAthlete catalogue with stable identifiers. Scouts cannot create custom criteria or scales during the pilot.
- Within each category, the Scout adds only relevant observed criteria from a dropdown and rates them from 1–5. A criterion cannot be added twice and may be removed before submission.

Rating scale:

1. Significant development needed;
2. Below the level required for this project;
3. Meets the expected level;
4. Above the expected level; and
5. Outstanding for this level.

Controlled criteria:

- **Technical:** ball control, passing, receiving, dribbling, finishing, defending technique, position-specific technique.
- **Tactical / Game Understanding:** positioning, awareness, decision-making, movement off the ball, use of space, defensive awareness, transition play, understanding of role, adaptability during play.
- **Physical:** speed, acceleration, agility, balance, strength, endurance, coordination, repeated-effort capacity.
- **Observed Mentality:** work rate, concentration, competitiveness, response to mistakes, composure, consistency, initiative, communication, team contribution.

Mentality ratings describe observed behaviour, not permanent personality traits. Exclude medical fitness, injury history, health information, body-development predictions, coachability, maturity, and leadership.

### Strengths and Development Areas

- Mark up to five rated criteria as `Key strength` and up to five as `Development area`.
- The same criterion cannot be both.
- Provide `No development area identified`.

### Development Potential

Optional values are `Limited evidence`, `Moderate potential`, `High potential`, `Exceptional potential`, and `Unable to assess`. Present this as the Scout's current opinion, not a guaranteed prediction.

### Overall Recommendation

Require `Strongly pursue`, `Continue evaluation`, `Monitor`, `Do not pursue`, or `Insufficient evidence`.

The recommendation is project-specific and never changes pipeline stage, priority, or outcome automatically.

### Assessment Context

Provide one optional field:

`Assessment context — Add relevant context about this evaluation, such as what you observed, evidence limitations, or circumstances affecting your assessment.`

It belongs to that version and becomes read-only on submission.

### Submission Requirements

Require observation source and date, at least one rated criterion, one Key strength, one Development area or `No development area identified`, and Overall recommendation. Development potential, linked media, timestamps, and Assessment context remain optional.

## Evaluation Presentation

- Show the Current evaluation's observation details, recommendation, ratings, strengths, development areas, optional development potential, and Assessment context.
- Keep previous submitted and withdrawn versions in Evaluation history; show drafts separately.
- Do not calculate or display an overall athlete score, project rating, averaged category score, team rating, or consensus.

On project athlete cards, show `Not evaluated`, `Draft in progress`, `Evaluated · [recommendation]`, or `Evaluation withdrawn` according to the lifecycle rules above.

## Internal Notes

- Notes are Workspace-owned, athlete-and-project-specific working observations, separate from evaluation versions. Store the author and creation time.
- Allow multiple notes while the pipeline record is active.
- The author may edit a note. Keep it in its original timeline position, show `Edited`, retain its creation date, and preserve version history.
- The author may withdraw a note after confirmation. Replace its content with `Internal note withdrawn · [date]` and preserve the restricted audit record.
- Do not permanently delete notes through the pilot UX/UI.

## Activity & Notes

Show one private chronological timeline, newest first, with `All`, `Activity`, `Internal notes`, and `Evaluations` filters.

Include:

- Saved Athletes addition or removal;
- pipeline addition, stage change, and priority change;
- pipeline closure, outcome, and reopening;
- evaluation submission and withdrawal;
- the current version of an added or edited note, and note withdrawal; and
- the profile becoming unavailable or accessible again, without disclosing why.

Do not create a separate visible event for each note edit. Do not include passive views, media playback, draft autosaves, draft-field changes, or discarded drafts.

Messages and requests are outside this slice. A later slice may add safe linked metadata such as `Scout sent a message`, but never message content.

## Closed, Archived, and Unavailable Records

- Closing a pipeline record preserves the draft, evaluations, notes, and activity and makes the athlete project record read-only. Reopening restores editing and preserves the prior outcome history.
- Archiving a project makes its athlete project records read-only. Reactivation restores their previous individual states.
- If the athlete profile becomes unavailable, preserve the project record without changing stage, priority, recommendation, or outcome. Block the current profile, media, and new evaluations; allow notes while the pipeline remains active. Restore current-profile access if availability returns.
- Do not store athlete-profile or media snapshots. Scout-authored evaluation and note content remains part of the project record.

## History and Privacy

- Preserve actor, timestamp, previous value, and new value for evaluation state and versions, evaluation withdrawals, note versions, and note withdrawals.
- Never send free-text Assessment context, internal notes, `Other` source descriptions, withdrawal reasons, or future custom text as ordinary analytics properties.

## Outside Part 2

- messaging and information requests;
- athlete comparison;
- team collaboration, shared notes, review requests, combined ratings, and consensus;
- custom or organization-specific evaluation templates;
- payments and commercial limits; and
- analytics, to be defined after the Slice 8 data model.
