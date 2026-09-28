# MVP Slice 7 — Visibility and Discovery

## Outcome

An authorized athlete or guardian can make an eligible Soccer Sport Profile visible to eligible Scouts. Eligible Scouts can discover effectively visible profiles, open the Scout-facing profile, and view ready evaluation media.

Profiles are never public, anonymous, or search-engine indexed.

## Scope

- Sport Profile visibility control and status;
- visibility eligibility and effective-visibility enforcement;
- automatic hiding when eligibility is lost;
- eligible-Scout access to Soccer discovery;
- search, filters, result cards, sorting, and pagination;
- the Scout-facing Soccer Profile; and
- controlled playback of ready Main Evaluation Video, Skill Clips, and Extended Match Footage.

## Visibility Rules

Visibility belongs to each `AthleteSportProfile`. Keep separate:

- **Visibility setting:** `Private` or `Visible to eligible scouts`;
- **Visibility eligibility:** whether all Slice 4 gates pass; and
- **Effective visibility:** whether the profile is currently accessible to eligible Scouts.

Effective visibility requires the visible setting, eligible status, and no applicable safety, moderation, suspension, or administrative restriction. Profile Completion does not control visibility.

The visibility control remains disabled until the Slice 4 eligibility result passes, including Recruiter-Ready, applicable email and identity verification, required permission, active account and Sport Profile, and no applicable hold. Show safe blocking reasons and next actions. Passing every gate only enables the control; it never turns visibility on automatically.

## Visibility Authority

- **Under 14:** guardian controls visibility; athlete has no login.
- **Ages 14–17, athlete not joined:** guardian controls visibility.
- **Ages 14–15, joined:** athlete sees the status; guardian controls visibility.
- **Ages 16–17, supervised and joined:** athlete sees the status; guardian controls visibility.
- **Ages 16–17, independent and joined:** athlete controls visibility; guardian may make the profile private as a safety action but cannot make it visible.
- **Adults 18+:** athlete controls visibility.

Turning visibility off is separate from withdrawing permission or consent.

## Visibility Experience

- Place the Visibility card on the Soccer Sport Profile management page.
- Show `Private` or `Visible to eligible scouts`.
- When ineligible, disable `Turn on visibility` and show unmet requirements and next actions.
- Keep the visibility control on the Sport Profile even if the checklist opens in a detailed view.
- Provide `Preview Scout view` while Private or Visible. The preview shows the same Scout-facing projection and ready media without changing visibility.
- When Private, label the preview `Preview — your profile is not currently visible`.

### Make Visible

- `Turn on visibility` opens a confirmation explaining that eligible Scouts can discover the profile and view its approved information and ready media.
- Confirm with `Make profile visible`.
- This is not a new legal consent; the required permission already exists as an eligibility gate.

### Make Private

- `Make private` requires confirmation and immediately removes the profile and media from Scout discovery and access.
- Every person authorized by the access matrix to turn visibility off must be able to do so.

## Changes That Affect Visibility

Recalculate effective visibility whenever a contributing source changes. If eligibility is lost:

- immediately remove the profile from discovery and Scout access, including APIs, media, and direct URLs;
- return the setting to `Private` and disable the control;
- show the controller a safe reason and next action; and
- require explicit visibility activation after eligibility is restored.

The age-18 transition follows the same rule. There is no Scout-access grace period.

Ordinary optional-content editing must not affect visibility. Replacing the Main Evaluation Video also does not interrupt visibility: keep the existing ready video current until the replacement becomes ready, then switch atomically. A failed or under-review replacement leaves the existing video unchanged.

### Warning Before a Voluntary Eligibility-Losing Action

Before a voluntary action makes a currently visible profile ineligible, explain that the profile will become private and require explicit reactivation. Provide `Cancel` and a clear confirmation such as `Continue and make profile private`.

Apply this to removing the current Main Evaluation Video without a ready replacement, clearing Recruiter-Ready information, leaving no valid current playing context, withdrawing a required visibility permission, or another voluntary action known to disable visibility. Mandatory system, safety, moderation, and administrative restrictions take effect immediately.

## Visibility Notifications

- Confirm a manual change on screen.
- When a guardian changes visibility for a joined athlete aged 14–17, notify the athlete.
- When an independent athlete aged 16–17 makes the profile visible, notify the connected guardian.
- When a guardian makes an independent minor's profile private as a safety action, notify the athlete using a safe explanation.
- When eligibility loss automatically makes a visible profile private, notify the controller and the athlete when they have an active login. Send one notification for the transition, with only the safe reason and next action.
- Never notify Scouts who previously viewed the profile.

## Scout Access

Discovery and athlete-profile access require the Slice 4 Scout athlete-access eligibility result to be `Eligible`. Enforce access server-side for discovery, profiles, media, APIs, and direct URLs.

### Locked Discovery

- Keep `Discover Athletes` visible but locked for an ineligible Scout.
- Selecting it opens the Scout's athlete-access requirements and next action.
- Do not reveal athlete names, previews, suggestions, counts, or results.
- Unlock Discovery automatically when every Scout gate passes; lock it again if eligibility is lost.

### Unavailable Profile

- For an inaccessible or nonexistent profile, show `This profile is no longer available` and `Back to discovery`.
- Do not disclose whether the athlete changed visibility or lost eligibility for another reason.
- If the Scout's own eligibility is the problem, show their access restriction and next action.
- If access ends while the profile is open, stop access on the next protected request or refresh and stop issuing new media access.
- Do not preserve a Scout-accessible cached copy of the profile or media.

Athletes and guardians do not see who viewed the profile, receive per-view notifications, or see a view counter during the pilot.

## Discovery Eligibility

- Return only effectively visible Soccer Sport Profiles to eligible Scouts.
- Apply the same authorization to results, counts, suggestions, profiles, and media.
- Remove an ineligible profile promptly and never return it through cached results or exports.
- Search current source records; do not create a second editable discovery profile.
- The pilot supports Soccer only.

## Discovery Filters

### Recruiting Category

- Show `Men's Soccer` and `Women's Soccer` as checkboxes, both selected by default.
- Allow either one or both, but not neither.
- Selecting both means either of the two existing controlled values; it is not a third athlete category.

### Position

- Allow one or more controlled Soccer positions.
- Match primary or secondary position.
- Show primary position first on the result card. If only the secondary position caused the match, show it too.

### Age

- Provide optional minimum and maximum age.
- Derive current age from date of birth; never expose full date of birth.
- Unset values apply no age restriction; minimum cannot exceed maximum.

### Country of Residence

- Show Spain as the fixed pilot option and explain that pilot discovery currently contains athletes residing in Spain.
- Keep standardized country support so additional countries can be added later.

### Height

- Provide optional minimum and maximum height in centimetres.
- Match the current valid height. When filtering by height, exclude profiles without one rather than treating it as zero.

### Recruiting Availability

- Show `Open to opportunities`, `Committed`, and `Not currently seeking` as checkboxes, all selected by default.
- Allow one or more, but not none.

### Target College Start

- Filter by one or more target college start years, with optional term narrowing.
- Use the athlete's stored term and year; do not derive it from graduation year.

### Media

- Provide optional `Has Skill Clips` and `Has Extended Match Footage` filters.
- If both are selected, require both.
- Count only current, ready, exposable media.

### Filter Combination

- Combine different filter types with AND and multiple selections inside one filter with OR.
- Show active filters and allow each removable filter to be cleared.
- `Clear filters` restores both recruiting categories, fixed Spain residence, and no other restrictions.

## Free-Text Search

- Search athlete name, current club or academy, and current team or squad.
- Use the controlled filter for positions.
- Do not search school, city, citizenship, descriptions, private information, or internal records.
- Match without case or accent sensitivity and require at least two characters.
- Never include inaccessible profiles in suggestions or results.

## Discovery Results

### Result Card

Show:

- profile photo or initials;
- full name;
- primary position, plus a matching secondary position when relevant;
- current age;
- recruiting availability;
- target college start year;
- number of ready Skill Clips;
- Extended Match indicator when available; and
- `View profile`.

### Sorting and Pagination

- Default to `Recently updated`; also provide `Name A–Z`.
- A meaningful change to Scout-facing profile information or ready media may update the recent order. Login activity, internal status changes, and insignificant edits do not.
- Limit results per page and provide pagination; UX/UI and Engineering determine page size.
- Show total matches and preserve search, filters, sort, and page when returning from a profile.
- For no results, show `No athletes match these filters` and `Clear filters`. Keep Spain fixed.

## Scout-Facing Profile

Show only approved fields and current, ready, exposable media. Exclude private documents, coach contact details, direct contact information, legal records, verification history, internal statuses, and media lifecycle history. Visibility grants no messaging, document, contact-sharing, or other interaction permission.

### Athlete Summary

- profile photo or initials;
- full name and current age;
- recruiting category;
- primary and optional secondary position;
- preferred foot;
- current height and optional weight;
- city and country of residence;
- country or countries of citizenship;
- current club or academy and team or squad;
- recruiting availability; and
- target college start term and year.

Place Main Evaluation Video immediately after the summary.

### About the Player

Show the optional athlete-provided player summary. Hide the section when empty.

### Current Season and Statistics

Show club or academy, team or squad, competition or league, squad level, competition age group, season, and position played.

Show the position-appropriate statistics already defined in the athlete-profile specifications. If the athlete selected `Statistics unavailable/not tracked`, show that status instead of zeroes. Label the information `Athlete-provided`.

### Media

- **Main Evaluation Video:** controlled playback and duration immediately after the Athlete Summary.
- **Skill Clips:** athlete-selected order; category as primary title; optional description, match/training context, duration, and controlled playback.
- **Extended Match Footage:** controlled playback, duration, and timestamps in chronological order. Selecting a timestamp jumps to that point.

The Scout cannot modify athlete media or timestamps.

### Education and Languages

- education status;
- school country;
- graduation month and year when applicable;
- primary and additional languages with their proficiencies; and
- English proficiency.

### Playing History and Achievements

- Show completed previous TeamSeasons newest first, using the applicable playing-context and position-specific statistics already defined in the athlete-profile specifications.
- Hide the section when the athlete selected `No previous team seasons`.
- Show athlete-provided Soccer achievements when present. Hide the section when the athlete selected `No achievements to add`.

### Section Order

1. Athlete Summary;
2. Main Evaluation Video;
3. About the player;
4. Current season and statistics;
5. Skill Clips;
6. Extended Match Footage and timestamps;
7. Education and languages;
8. Previous playing history; and
9. Achievements.

Hide optional sections with no content.

## Audit Requirements

- Record visibility-setting changes with actor, role, previous value, new value, and timestamp.
- Distinguish a user-selected change from a system-enforced return to Private.
- Preserve structured eligibility reasons and effective-visibility history.
- Keep verification, permission, Recruiter-Ready, moderation, and safety records as separate sources of truth.
