# MVP Slice 11 — Dashboards and Athlete Comparison

## Goal

Provide role-appropriate dashboards and a project-specific tool for comparing athletes already saved by a Scout.

## 1. Dashboard Rules

- Show only information the current user is authorized to access.
- Derive actions, statuses, and counts from their source records. Do not create separate dashboard tasks or stored totals.
- Remove an action when its source issue is resolved. Reading a notification alone does not resolve it.
- Link each action or count to the feature that owns it.
- Do not reproduce complete profiles, projects, pipelines, conversations, notifications, or activity histories.
- Support loading, empty, restricted, unavailable, and failed states without showing stale or unauthorized information.

Order unresolved actions by:

1. safety, account, age-transition, or access-blocking actions;
2. relevant requested-by or expiry date; then
3. oldest unresolved action.

## 2. Athlete and Guardian Dashboards

Athletes and Guardians receive separate dashboard states. The product displays the state allowed by the authenticated user's role and current permissions; users do not switch between Athlete and Guardian roles. A wireframe switch may be used only to demonstrate both states.

Each dashboard is scoped to one Athlete Profile and its Soccer Sport Profile during the pilot.

### Status

Show:

- selected athlete and `Soccer` context;
- `Visible to eligible Scouts` or `Private`;
- Recruiter-Ready status;
- Profile Completion percentage; and
- a link to the applicable profile or requirements.

Visibility remains controlled from the Sport Profile.

### Needs Your Attention

Show only specific unresolved actions available to the current user, including when applicable:

- missing Recruiter-Ready requirements;
- email, identity, reverification, guardian-relationship, permission, or age-transition actions;
- contact and information requests;
- guardian approvals;
- unread conversations or supervised-message actions;
- failed media or document processing requiring retry; and
- relevant document-expiry actions.

Use `Waiting for Guardian` or `Waiting for Athlete` when the viewer cannot perform the action. Do not show generic improvement suggestions.

### Guardian Context

- Under 14 and before an Athlete joins, the Guardian receives the management dashboard.
- After the Athlete joins, ordinary profile actions belong to the Athlete; Guardian access follows the current age, supervision, permission, and safety rules.
- A Guardian managing multiple athletes receives an athlete selector that remembers the last selection and identifies athletes with unresolved Guardian actions.
- Show Guardian account-level actions once, outside the selected-athlete context.

Initial onboarding must be complete before the dashboard is available. When no actions remain, show `You’re all caught up` while retaining current status.

## 3. Scout Dashboard

The Scout dashboard is a private home page for the current affiliation-scoped Workspace. It does not replace the Workspace landing page.

### Restricted Access

When Scout access is restricted, show only:

- safe access status;
- outstanding requirements and available next action; and
- a link to the Scout Profile.

Do not expose Workspace counts, projects, athlete names, conversations, or requests.

### Needs Your Attention

Show when applicable:

- Scout verification, affiliation, or access actions;
- submitted information requests awaiting review;
- unread conversations;
- unfinished evaluation drafts; and
- persistent failed actions requiring retry.

Do not show pending contact requests awaiting the athlete side, automated recommendations, completed updates, or ordinary project activity.

### Workspace Summary

Show live counts for:

- active Recruiting Projects;
- unique Sport Profiles currently saved across active projects; and
- active project-athlete pipeline records.

Do not show contacted-athlete, followed-athlete, archived-project, or closed-record counts. If no project exists, show zero counts and `Create your first Recruiting Project`.

## 4. Athlete Comparison

### Scope and Entry

- Comparison belongs to one Recruiting Project.
- The Scout starts it from that project by selecting `Compare athletes`, choosing 2–4 athletes, and selecting `Compare selected`.
- Eligible athletes are currently saved in the project and may be not yet in the pipeline, active in the pipeline, or closed. Exclude removed saved rows.
- Closed athletes remain selectable and are labelled `Closed`.
- Athletes can be added, removed, replaced, or reordered within the comparison. Column order is not a ranking.

### Compared Information

Show by default:

- photo, name, age, and location;
- primary and secondary positions, dominant foot, height, graduation year, and current club;
- pipeline status and priority in the selected project;
- Main Evaluation Video and available skill-clip categories; and
- the Current evaluation in the project: Overall recommendation, rated criteria, Key strengths, Development areas, optional Development potential, and optional Assessment context.

Use these source records:

- photo, name, age, and location: current Athlete Profile;
- position, dominant foot, height, graduation year, current club, and selectable sport/recruiting fields: current Soccer Sport Profile;
- pipeline status, priority, closure outcome, and closure date: the athlete's record in the selected Recruiting Project;
- Main Evaluation Video and skill clips: current Soccer Sport Profile media; and
- recommendation, ratings, strengths, development areas, Development potential, and Assessment context: the selected submitted evaluation version.

Do not calculate an overall evaluation score or infer an assessment summary.

Do not show Recruiter-Ready or verification status. Scouts can only add athletes already available to them. If access is later lost, show `Profile unavailable` while retaining authorized project history.

The Scout may add other existing sport, academic, or recruiting-profile fields from a controlled field selector. Custom fields are not included. Show `Not provided` for missing information; do not treat it as a low score.

Do not include documents, private information, messages, or internal notes in the comparison.

### Evaluations

- Show the Current evaluation defined by Slice 8 by default; never show drafts or withdrawn evaluations.
- Allow selection of an earlier submitted evaluation.
- Do not average separate evaluations.
- Display equivalent criteria on the Slice 8 rating scale of 1–5. Show unmatched criteria separately with `Not rated` where applicable.
- Show `Not provided` when an optional evaluation field was not completed.
- Open a submitted evaluation read-only over the comparison. Evaluation creation and editing remain in the athlete's project record.

### Media and Profile Viewing

- Represent videos with a thumbnail, duration, category, and `Open video` action.
- Open one video at a time in an overlay above the comparison.
- Open the athlete profile in a side panel, with an `Open full profile` action when needed.
- Closing an overlay or panel returns to the unchanged comparison.
- Returning from the full profile or athlete record restores the selected project, athletes, fields, evaluation versions, column order, and scroll position.

### Current and Historical Data

- Use current accessible Athlete Profile, Soccer Sport Profile, and media information for every compared athlete, including closed records.
- Do not store or display a profile or media snapshot at closure.
- Keep the closure outcome and historical evaluation versions labelled with their original dates.
- If current profile access is lost, show `Profile unavailable` while retaining the Scout-authored project history that remains authorized.

### Comparison Behaviour

- Display equivalent values consistently, including units, dates, controlled labels, and rating scales.
- Do not rank athletes, identify a winner, or generate a recommendation.
- Comparison is read-only apart from athlete, field, evaluation-version, and display selections.
- Use `Open athlete record` for pipeline, priority, evaluation, or outcome changes.

### Persistence and Access

- Do not create named comparisons, comparison history, exports, public links, or athlete-facing comparison views during the pilot.
- Preserve the current comparison while the Scout opens related content and returns; it does not need to persist as a saved comparison across sessions.
- Comparison remains private to the Workspace and selected project.
- Keep ownership and access structures extendable to future Workspace team collaboration without assuming that all members share personal drafts or actions.

## 5. Outside Slice 11

- recruiter-activity insights shown to Athletes;
- saved-search matches and alerts;
- team dashboards, assignments, shared task queues, and shared comparison workflows;
- new task-management or activity-feed records; and
- Slice 11 analytics, to be defined after its data model is ready.
