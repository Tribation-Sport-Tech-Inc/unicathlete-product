# MVP Slice 8 — Part 1: Scout Workspace Foundation

## Outcome

An eligible Scout can organize discovered athletes in one private individual Workspace using Recruiting Projects, project-specific Saved Athletes lists, and project pipelines.

## Workspace

- The pilot provides one individual Workspace per Scout.
- Workspace access requires the Slice 4 Scout athlete-access eligibility result to be `Eligible`.
- An ineligible Scout selecting Workspace sees their eligibility requirements and next action, with no Workspace content or counts.
- If eligibility is lost, lock access without changing Workspace records. Restore access to the same Workspace when eligibility returns.
- Workspace always opens its landing page rather than opening a project automatically.

The landing page shows:

- `Create Recruiting Project`;
- active projects, most recently meaningfully updated first, with `Name A–Z` as an additional sort. Meaningful updates are project-detail or criteria changes, Saved Athlete changes, pipeline additions or reopenings, and stage, priority, or outcome changes; passive views do not update the order;
- access to archived projects;
- active- and archived-project counts;
- unique Soccer Sport Profiles saved across active projects; and
- active project-athlete pipeline-record count.

When no project exists, show `Create your first Recruiting Project` and the create action.

## Ownership and Future Team Compatibility

- Workspace records belong to the Workspace; record the acting Scout separately.
- The pilot Scout is the sole Workspace owner. Do not show Lead Scout, assignment, member, or role controls.
- The model must later support multiple authorized Workspace members and role-based permissions without migrating existing projects or athlete records.
- A future team Workspace must not automatically receive access to the Scout's individual Workspace data.
- Store the Scout's confirmed affiliation at project creation as immutable historical context only. It does not create organization ownership, sharing, or team access.

## Recruiting Projects

- Project name is required. Description and recruiting criteria are optional and editable while active.
- Criteria use the controlled Slice 7 Discovery fields: recruiting category, position, age range, height range, recruiting availability, target college start year and optional term, Skill Clips requirement, and Extended Match Footage requirement. Store selected minimum and maximum ages rather than a birth-date range resolved at creation. Store college-start year and optional controlled term as separate values.
- Spain is the fixed pilot market.
- Criteria are guidance only. They do not restrict, rank, add, remove, promote, or close athletes. Do not calculate a project-match score.

### Create from Discovery

- Discovery provides `Create project from search`.
- Require a project name and allow criteria review before creation.
- Copy the current structured filters, but not free-text search, sort order, page, or result count.
- Do not save result athletes automatically.

### Project Page

Provide:

1. **Overview:** project information, criteria, counts, and project actions;
2. **Saved Athletes:** the complete project longlist; and
3. **Pipeline:** active and closed pipeline records.

## Saved Athletes

- Saved Athletes is project-specific. The same athlete may be saved in multiple projects but only once per project.
- Allow saving from Discovery and the Scout-facing athlete profile to one selected active project.
- If no project exists, allow project creation from the save flow.
- Saving does not add the athlete to the pipeline.
- Every athlete with an active pipeline record remains in Saved Athletes for that project.
- An athlete may be removed after confirmation only when they do not have an active pipeline record in that project. Removing an athlete after closure does not delete or change the closed pipeline record or its history.
- Closing a pipeline record does not automatically remove the athlete from Saved Athletes. Reopening restores the athlete to Saved Athletes when necessary.

Provide:

- `Current` — default; includes Saved only and Active in pipeline;
- `Saved only`;
- `Active in pipeline`;
- `Closed`; and
- `All`.

Default to most recently saved first and also allow `Name A–Z`. Show saved date and `Saved only`, `Active in pipeline · [stage]`, or `Closed · [outcome]`; show priority for active pipeline records.

## Pipeline

### Stages

1. `New`;
2. `Reviewing`;
3. `Contacted`;
4. `Discussion`; and
5. `Decision`.

- Athletes enter at `New` and may move forward, backward, or skip a stage.
- Stage changes do not require an evaluation, message, or request.
- Show one board column per stage.

### Priority

- Values are `High`, `Medium`, `Low`, and `Not set`; default to `Not set`.
- Priority changes independently from stage.
- Within each stage, order High, Medium, Low, then Not set; within the same priority, show the newest stage entry first.
- Provide priority filters.

### Outcomes

Controlled outcomes are `Recruited`, `Not selected`, `Athlete withdrew`, and `No longer available`.

- An athlete may remain active in `Decision` without an outcome.
- `Close with outcome` is available from every active pipeline stage.
- Selecting an outcome closes the pipeline record and moves it from the active board to a separate Closed view.
- Show outcome, closing date, final stage, and priority at closure.
- Reopening returns the athlete to the stage from which the record was closed unless the Scout selects another active stage, and preserves previous outcome history.

## Unavailable Athletes

If a saved or pipeline athlete becomes inaccessible:

- preserve the project records without changing stage, priority, or outcome;
- show `This profile is no longer available` without disclosing why;
- block profile and media access and retain no Scout-accessible cached copy; and
- restore current-profile access if the athlete becomes accessible again.

`No longer available` is a Scout-selected outcome and must never be assigned automatically because profile access ended.

## Project Archive

- Archiving makes the project read-only and preserves its criteria, athletes, pipeline state, outcomes, and history.
- A project may be archived with active pipeline records; show their count before confirmation and do not assign outcomes.
- Reactivation restores the same project and previous state.
- Permanent deletion is not available in the pilot UX/UI.
- Do not store an athlete-profile or media snapshot in the archive.
- From an archive, the Scout may open only the athlete's currently accessible profile, clearly separated from historical project records.

## Athlete Profile Workspace Context

The Scout-facing athlete profile includes a private Workspace panel listing every active or archived project in this Workspace that contains the athlete.

For each project, show:

- project name and state;
- Saved only, Active in Pipeline, or Closed;
- stage and priority when applicable;
- closed outcome when applicable; and
- `Open project`.

Allow `Save to another project` and, for a Saved-only athlete in an active project, `Add to pipeline`. Archived memberships are read-only. This panel is never visible to athletes or guardians.

## History and Privacy

- Preserve actor, timestamp, previous value, and new value for project-state, criteria, Saved Athlete, stage, priority, and outcome changes.
- Show athlete-specific pipeline history from the project record.
- Athletes and guardians are not notified about Workspace saves, stages, priorities, outcomes, or project changes.

## Outside Part 1

- evaluations and internal notes;
- messaging, requests, and comparison;
- saved searches, alerts, and automated matching;
- team collaboration and additional Workspaces;
- payments and commercial limits; and
- analytics, to be defined after the Slice 8 data model.
