# MVP Slice 9 — Messaging, Contact Permissions, and Information Requests

## Goal

Allow an eligible Scout to request contact, communicate safely after acceptance, and request defined media or private information from the athlete side.

## Slice 8 Workspace Revision

- The pilot shows one current Workspace, but the backend must support separate Workspaces for different verified organization relationships.
- Replace the earlier `one individual Workspace per Scout` assumption and data-model constraint with affiliation-scoped Workspace support.
- Renewal or reverification of the same organization relationship reuses its Workspace. A different organization affiliation uses a separate Workspace.
- Projects, conversations, requests, evaluations, notes, and sharing permissions never transfer automatically between Workspaces.
- The pilot Scout is the sole authorized member. Future team access requires explicit Workspace membership; affiliation alone grants no access.

## Conversation Scope

- One conversation belongs to one affiliation-scoped Workspace–Athlete Profile relationship and is not project-specific.
- Contacting an athlete does not save them or add them to a project. Project membership does not grant messaging access.
- Project names, criteria, stages, priorities, evaluations, and notes remain private and do not appear in the athlete-side conversation.
- Messages and requests do not appear automatically in project `Activity & Notes` and are not copied into projects.
- The authorized Scout may use information received at the Workspace–Athlete level across their own projects involving that athlete without creating project copies.
- Store participants separately and preserve the actual sender, participant role, verified affiliation context, and timestamp for every message. Future Workspace membership alone must not expose existing conversations or private information; any team access requires an explicit conversation and information-access model.

## Contact Requests

- Only an eligible Scout may initiate contact, from an Athlete Profile they are currently eligible to access. Saving or adding the athlete to a project is not required.
- The request shows the Scout's verified name, role, organization, and a short plain-text introduction. Do not allow attachments, external links, personal contact details, or internal project information.
- A conversation opens only after the current athlete-side decision-maker accepts. The introduction then becomes the first conversation item.
- A request may be `Pending`, `Accepted`, `Declined`, `Withdrawn`, or `Blocked`. It does not expire.
- Only one request may be pending for the Workspace–Athlete relationship. A declined request may be sent again unless the Scout is blocked; apply configurable rate limits.
- Declining requires no reason. The Scout may withdraw only a pending request.
- Revalidate current age, relationship, communication mode, authority, account state, Scout eligibility, affiliation, and athlete availability when the recipient acts.

## Age and Authority

| Athlete state | Contact decision | Conversation behaviour |
|---|---|---|
| Under 14 | Guardian | Guardian communicates; athlete has no login or access |
| Age 14–17, not joined | Guardian | Guardian communicates; athlete has no access |
| Joined age 14–15 | Guardian | Athlete and guardian view; athlete sending requires guardian approval; guardian may send as themselves |
| Joined age 16–17, supervised | Guardian | Athlete and guardian view; athlete sending requires guardian approval; guardian may send as themselves |
| Joined age 16–17, independent | Athlete | Athlete sends directly; guardian views and retains safety block/report actions but cannot send or approve |
| Adult | Athlete | Athlete communicates independently; guardian has no access |

- Joined supervised athletes may see a pending contact request, but only the guardian decides. For independent ages 16–17, both may see it but only the athlete decides.
- When an athlete joins an existing guardian conversation, add them to that conversation and show its existing recruiting communication.
- Independent communication for ages 16–17 means independent sending authority, not privacy from the guardian. Explain the guardian's continued visibility during the two-person independent-communication decision.
- If the active guardian is removed or replaced, the former guardian immediately loses access, their pending decisions and approvals are cancelled, and supervised communication pauses until an eligible guardian completes the applicable relationship and permission process. The replacement guardian may then see the history required for supervision; historical authorship never changes.
- At age 18, automatic guardian access ends with no grace period. If the athlete has an active account and completes the adult transition, the conversation continues with them. If they never joined, the conversation is unavailable on the athlete side and read-only for the Scout until the adult claims the existing profile and completes the transition; require a new contact request before messaging resumes.

## Messages and Guardian Approval

- Support plain-text messages only. Do not support ordinary attachments, external clickable links, editing, permanent deletion, conversation closing, archiving, muting, reactions, typing indicators, read receipts, or group-chat controls.
- In supervised mode, the athlete submits a draft for guardian approval. The guardian may approve or reject but cannot edit it. Approval sends the exact reviewed version; later edits require new approval.
- The guardian may add a private rejection explanation. The athlete may revise, resubmit, or withdraw the draft. The Scout never sees pending or rejected drafts or guardian comments.
- A guardian may send a separate message under their own identity where the age rules permit it.
- A sender may withdraw their sent message. Show `Message withdrawn`; retain the original only in restricted safety/audit history under the approved retention policy.
- Communication remains inside UnicAthlete. Do not provide a flow for sharing athlete or guardian phone numbers, email addresses, social accounts, home addresses, or equivalent direct contact information. A future private-contact feature requires separate review.

## Information Requests

- Requests require an accepted contact relationship and belong to the Workspace–Athlete relationship, not a project.
- Each request contains one specific item, an optional short explanation, and an optional informational `Requested by` date. It never expires.
- Do not allow project names, personal contact details, attachments, or external links in the explanation. Questions use ordinary messages.
- Use only `Pending`, `Submitted`, `Declined`, and `Withdrawn`. Upload, processing, and guardian-approval states are temporary interface states, not request statuses.
- The Scout may withdraw only a pending request. A declined request may be sent again unless blocked. Allow only one pending request for the same requested item and apply configurable rate limits.
- Show requests as structured cards in the conversation with a simple request list or filter; do not create a project-specific request area.

### Pilot Request Types

- Main Evaluation Video;
- one controlled Skill Clip category;
- Extended Match Footage;
- one controlled Slice 6 document subtype; or
- one Coach Reference.

Exclude medical or health information, identity documents, custom free-text document requests, confidential reference letters, personal contact details, calls, meetings, and trials.

### Response Authority

- Under 14 or not joined: guardian submits or declines.
- Joined ages 14–15 and supervised ages 16–17: the athlete may prepare the response; guardian approval is required before submission. Either may decline.
- Independent ages 16–17: athlete submits or declines; guardian may view but does not approve.
- Adults submit or decline directly.
- The Scout sees only the final status and submitted item, not draft selections, rejected responses, guardian comments, filenames, or pre-submission upload errors.

### Media Requests

- A media request asks the athlete side to add or update that media type in the Athlete Profile Media section. It does not create private sharing, special access, an attachment, or a version-specific copy.
- Mark it `Submitted` when the athlete side confirms matching current media is ready.
- The Scout views the current item through the Athlete Profile under existing visibility and media rules. Other eligible Scouts may also see it.
- Later replacement shows the new current profile media; retain no request-based access to the previous version.

### Private Document Requests

- Use the existing Slice 6 document types and controlled subtypes. The athlete side selects a ready document or uploads one through the Documents area.
- Submission grants the receiving Workspace–Athlete relationship controlled access to the specific approved version. It grants no access to other Scouts, future Workspace members, or other Workspaces.
- Show the athlete side the authorized Scout and organization, grant date, current version access, and `Withdraw access`. Do not provide unsolicited document sharing during the pilot.
- Controlled preview is the baseline; never expose a permanent public URL. Scout download requires legal/privacy approval. If approved, explain before sharing that downloaded copies cannot be recalled, record downloads, and keep the capability configurable.
- Before replacement, show current recipients and explain that their access to the current version ends when the replacement becomes ready and that the replacement is not shared automatically.
- Keep the current version available while its replacement processes. When the replacement is ready, end access to the previous version and let the athlete side choose `Share updated version` or `Do not share` for each previous recipient, with current guardian approval where required. The Scout need not request again.
- If not shared, show `Document updated · New version not shared` and keep the request `Submitted`.
- Before deletion, show current recipients and explain the consequence. After deletion, show `Document no longer available`, keep the historical request `Submitted`, and retain no Scout-accessible copy.

### Coach Reference Requests

- Coach References remain structured Athlete Profile records, not documents.
- The athlete side selects an existing reference or creates one. Submission requires the coach's applicable agreement and contact-sharing permission.
- Share only the approved coach name, role, team or organization, relationship to the athlete, and permitted professional contact details.
- Do not support confidential written references or athlete-uploaded recommendation letters.
- Show current Scout recipients and allow withdrawal. Updated information is not exposed automatically and must be shared again under the current guardian-approval rules.

## Blocking, Reporting, and Access Changes

- The athlete side may block a Scout. Blocking stops messages and future requests, ends that Workspace's access to private documents and Coach References, and preserves history. Profile media remains governed by Athlete Profile visibility.
- In supervised mode, the athlete or guardian may block. For independent ages 16–17, the athlete may block and the guardian retains an emergency safety-block action.
- Unblocking restores nothing automatically; a new contact request and new private-item sharing are required.
- Athletes, guardians, and Scouts may report a message or conversation. Preserve relevant content for restricted review without treating a report as proof or disclosing the reporter, reason, or internal safety information. An authorized reviewer may temporarily restrict messaging.
- Loss, suspension, or expiry of Scout eligibility or the Workspace's organization relationship makes the conversation read-only without deleting history. Making a Sport Profile private does not end an accepted conversation.
- Account closure, a safety restriction, or loss of a required guardian relationship or communication permission stops sending under the applicable access rules.
- Renewal or reverification of the same organization relationship may restore the Workspace conversation and still-active sharing permissions when current requirements pass. Ended or withdrawn access is never restored automatically.
- A different organization affiliation uses a separate Workspace and requires new contact and information requests; nothing transfers automatically.

## Notifications and Unread State

- Maintain per-participant conversation unread state. Show `Sent`, but no delivery or read receipts during the pilot.
- Generate reusable notification events for contact-request changes, incoming messages, guardian actions, messaging restrictions, information-request changes, private-access withdrawal, and shared-item replacement, deletion, or unavailability.
- Slice 9 defines triggers, recipients, safe content, and action destinations. The future Notification Center owns the central notification list, global badges, notification read state, grouping, preferences, delivery channels, external summaries, and notification history.
- Notification failure never changes the underlying action. Messaging and information requests must not launch until the Notification Center provides the required user-facing delivery and routing.

## Privacy and Retention

- Messages and shared private information are available only to authorized participants and recipients.
- Administrators cannot browse conversations routinely. Authorized safety staff may access relevant content only for a report, approved safety flag or investigation, or legal requirement; audit the reviewer, reason, scope, and timestamp.
- Never send message text, introductions, request explanations, guardian comments, report reasons, filenames, document content, or other free text as ordinary analytics properties.
- Make retention for messages, drafts, requests, approvals, reports, withdrawn content, sharing grants, access history, and safety records configurable. Athlete and Scout erasure processes must locate all related records.
- Final retention, deletion, anonymization, severing, download, and safety-access rules require legal/privacy approval before launch.

## Outside Slice 9

- athlete or guardian private-contact sharing;
- medical, identity, confidential-reference, custom-document, call, meeting, or trial requests;
- team conversation access, shared inboxes, assignment, and group chat;
- adult-authorized post-18 guardian or representative access;
- voice or video calls;
- Notification Center interface and delivery preferences; and
- analytics, to be defined after the Slice 9 data model.
