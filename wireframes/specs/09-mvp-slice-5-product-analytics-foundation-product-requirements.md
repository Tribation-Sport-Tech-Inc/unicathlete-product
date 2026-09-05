# MVP Slice 5 — Product Analytics Foundation

## Goal

Create a safe, reliable analytics foundation and use it to collect the approved behavioral events from Slices 1–4. Do not duplicate facts or history already stored in the product database.

Analytics is for measurement only. It must never control verification, eligibility, visibility, Scout access, safety decisions, or other product behavior.

## Developer Instructions

1. **Select and connect the analytics technology**
   - Engineering chooses the implementation and provider.
   - Separate local, test, staging, pilot, and production data.
   - Test and staging activity must never enter pilot or production reporting.

2. **Create one versioned event contract**
   - Required fields: `event_id`, `event_name`, `schema_version`, `occurred_at`, `received_at`, `environment`, `actor_id`, `actor_type`, `session_id`, and `source_surface`.
   - `actor_id` and related entity IDs must be internal pseudonymous identifiers.
   - Event names use `<domain>[.<object>].<past_tense_action>`.
   - Register every event, trigger, source, permitted properties, and version before production use.
   - A changed meaning requires a new event name or schema version.

3. **Collect client and server events correctly**
   - The client records screens, interactions, validation failures, and user-visible errors.
   - The server remains authoritative for successful saves and status changes.
   - Do not report a save or status change as successful from the client before server confirmation.
   - Analytics failure must not block the user's action.

4. **Do not duplicate the product database**
   - Do not create analytics copies of account, onboarding, consent, invitation, profile-management, affiliation, notification, verification, eligibility, DOB-correction, or age-transition history already stored by Slices 1–4.
   - Join analytics to approved database records only when a report needs an authoritative outcome.
   - Add operationally important missing history to the product database or audit model, not to analytics alone.

5. **Implement these baseline events**

| Event | Trigger | Permitted properties |
|---|---|---|
| `journey.step.viewed` | A meaningful step is successfully displayed | `journey_key`, `step_key` |
| `journey.resumed` | A user returns in a new session to an unfinished journey | `journey_key`, `return_step_key` |
| `action.attempted` | A user submits an important action | `journey_key`, `step_key`, `action_key` |
| `validation.failed` | Client validation prevents submission | `journey_key`, `step_key`, `field_key`, `error_code` |
| `interface.error.shown` | A technical error interrupts progress | `journey_key`, `step_key`, `error_code` |
| `help.opened` | Contextual help is opened | `journey_key`, `step_key`, `help_topic` |
| `support.selected` | The user selects a support route | `journey_key`, `step_key`, `reason_category` |
| `requirement.explanation.viewed` | A requirement explanation is opened | `journey_key`, `step_key`, `requirement_key` |
| `next_action.displayed` | An outstanding next action is displayed | `journey_key`, `step_key`, `action_key` |
| `verification.prompt.viewed` | The identity-verification prompt is displayed | `purpose`, `entry_point`, `available_action` |
| `verification.action.selected` | Start, continue, retry, verify again, or support is selected | `purpose`, `entry_point`, `action_key` |
| `verification.handoff.started` | Redirect to Veriff begins | `purpose`, `entry_point` |
| `verification.handoff.failed` | UnicAthlete cannot complete the redirect | `purpose`, `entry_point`, `error_code` |
| `verification.return.received` | The browser returns from Veriff | `purpose`, `return_destination` |

   Allowed `journey_key` values for Slice 5 are `signup`, `athlete_onboarding`, and `scout_onboarding`. Step, action, requirement, help, field, and error identifiers must come from controlled catalogues; never send UI copy or entered values.

6. **Derive abandonment and outcomes instead of emitting duplicates**
   - Abandonment means a meaningful step was viewed but the corresponding database completion did not occur within the approved time window.
   - Verification prompt conversion joins `verification.prompt.viewed` to the existing verification-session record.
   - Validation difficulty compares `validation.failed` with the later authoritative database save.
   - Verification outcomes, onboarding completion, affiliation outcomes, and eligibility changes come from the database, not new analytics events.

7. **Validate and monitor event quality**
   - Validate every event against its registered schema.
   - Reject or quarantine invalid events outside trusted reporting.
   - Deduplicate repeated delivery using `event_id`.
   - Monitor accepted, invalid, duplicate, failed, and delayed events by environment and schema version.
   - Add automated contract tests for event validation, environment separation, and deduplication.

8. **Provide minimum internal tools**
   - Event registry with definitions, properties, sources, and versions.
   - Health report with event volume, invalid events, duplicates, failures, and delays.
   - Privacy-safe inspector for following one pseudonymous journey.

9. **Apply privacy and access controls**
   - Restrict analytics to authorized internal roles and log access to pilot or production data.
   - Never send names, emails, phone numbers, dates of birth, IP addresses as ordinary event properties, provider references, free-form text, messages, notes, documents, filenames, media content, signed URLs, authentication secrets, identity documents, biometrics, fraud details, or restricted safety reasons.
   - Use a derived age band only when separately approved and necessary.
   - Support the approved analytics preference or consent model.
   - Make raw-event retention configurable.
   - Support deletion or irreversible de-identification under the approved policy.

10. **Keep the foundation extensible**
   - Later feature specifications may register new events and properties without changing the shared envelope or rebuilding the pipeline.
   - Each new event must identify its product question, exact trigger, source, permitted properties, metric use, and privacy approval.

## Acceptance Criteria

- Every listed baseline event passes through the full pipeline in the correct environment.
- Invalid events are excluded from trusted data and visible in health monitoring.
- Sending the same `event_id` twice produces one logical event.
- Database-owned outcomes are not duplicated as analytics events.
- No event contains prohibited personal, sensitive, secret, or free-form content.
- Analytics failure does not prevent a valid product action.
- Unauthorized users cannot access analytics data.
- Optional analytics collection can be stopped without disabling necessary operational or security records.
- Linked analytics data can be deleted or irreversibly de-identified according to the approved policy.
- A later slice can register a new event without changing the shared event envelope or collection pipeline.

## Outside Slice 5

- tracking plans, metrics, funnels, or dashboards for future features;
- user-facing analytics or activity insights;
- pricing, billing, subscriptions, trials, paywalls, or entitlements;
- session replay, keystroke capture, advertising, or cross-site tracking;
- automated product, eligibility, ranking, moderation, or safety decisions; and
- final legal wording or unapproved fixed retention periods.
