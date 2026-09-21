# MVP Slice 6 — Athlete Media and Documents

## Status

Draft product definition covering Athlete Soccer Media and the Athlete Documents decisions confirmed for the pilot.

## Outcome

The current ordinary-content editor can upload and privately manage Soccer evaluation media. Successfully processed media contributes to Soccer Profile Completion, and a successfully processed Main Evaluation Video satisfies the media requirement for Recruiter-Ready. The permitted athlete or guardian can also manage a private library of athlete-held academic documents without enabling Scout sharing.

Slice 6 uses configurable pilot allowances and measures usage to inform later capacity and pricing decisions. It does not introduce payments, paid capacity, subscriptions, upgrade prompts, or final free-tier limits.

## Included in the Media Scope

- Main Evaluation Video;
- Skill Clips;
- Extended Match Footage;
- upload, processing, playback, preview, replacement, and deletion;
- creating a Skill Clip from existing uploaded footage or uploading it separately;
- athlete-created timestamps for Extended Match Footage;
- position-based Skill Clip suggestions;
- Profile Completion and Recruiter-Ready recalculation;
- private storage and controlled playback;
- configurable pilot allowances and user-facing allowance states;
- moderation-compatible media states; and
- the Slice 5-compatible measurement requirements defined below.

Profile-photo upload remains separate and does not consume the Soccer-media allowance.

The document scope includes private upload, processing, preview, download, replacement, deletion, translations, expiry states, and the configurable pilot allowance defined below.

## Ownership and Placement

- Every media item belongs to one `AthleteSportProfile`; Slice 6 supports Soccer.
- A media item may optionally reference its relevant `TeamSeason` or match context.
- Soccer Media remains a section of the Soccer Sport Profile, not a shared Athlete Profile library.

## Editing Authority

The profile-management rules in Spec 06 remain authoritative:

- before an athlete joins, the authorized guardian may manage ordinary media for the private profile;
- after the athlete joins, the athlete becomes the ordinary-content editor and the guardian loses ordinary upload, replacement, and deletion controls;
- an athlete aged 14–17 does not require routine guardian approval for every ordinary media change; and
- guardian control of visibility remains separate from media editing.

Under-14 athletes have no login; their authorized guardian manages their media. Any future narrower approval rule for external requests or sharing belongs to the applicable interaction specification.

## Media Types

### Main Evaluation Video

- One current video is designated as the Main Evaluation Video for the Soccer Profile.
- Its maximum duration is five minutes.
- It is the primary video an eligible Scout will watch first when Scout-facing profile access exists.
- It contributes 10% to Soccer Profile Completion when processing succeeds.
- A successfully processed Main Evaluation Video is required for Recruiter-Ready.
- Replacing, deleting, invalidating, rejecting, or losing the ready state of the current Main Evaluation Video immediately removes its completion credit, makes Recruiter-Ready `No`, and triggers recalculation of effective visibility.

`Main Evaluation Video` is the canonical product term. Do not use `Main Highlight Video` as a separate type.

### Skill Clips

- An athlete may upload a separate Skill Clip or create one from existing Main Evaluation Video or Extended Match Footage.
- Each Skill Clip must be between 10 and 60 seconds long.
- Reuse the source-media reference when a clip is created from existing footage; do not duplicate the original source file solely to create the clip.
- Each Skill Clip has exactly one category.
- Selecting one of the 15 Skill Clip categories is required.
- A separate clip title is not required; the selected category is used as its visible title.
- The athlete may add a short description and match or training context. These do not affect completion.
- The athlete may manually reorder Skill Clips; their selected order determines presentation order.
- Multiple clips may use the same category, but repeated coverage does not create additional completion credit.
- Categories outside the primary-position suggestions remain allowed but do not add completion credit unless they later become applicable.
- Changing primary position recalculates suggestions and completion but never deletes, hides, or retags existing clips.

Successfully processed coverage of the categories mapped to the current primary position contributes up to 10%:

`completed mapped categories / all mapped categories × 10`

One Skill Clip satisfies no more than one mapped category. Missing categories reduce Profile Completion but do not block Recruiter-Ready.

### Extended Match Footage

- One current item may satisfy Extended Match Footage completion for the Soccer Profile.
- Its maximum duration is 45 minutes.
- It is intended for deeper evaluation than the Main Evaluation Video.
- The athlete may add, edit, and remove timestamps identifying important moments.
- Timestamps are optional and do not affect Profile Completion.
- Each timestamp contains a valid point within the video and a short athlete-provided label.
- Timestamps are presented automatically in chronological order.
- A timestamp provides a `Create Skill Clip` action. The athlete must select the clip's start and end points and assign one of the 15 categories before creating it.
- A timestamp does not automatically become a Skill Clip, and creating a clip does not modify the original footage.
- Successfully processed Extended Match Footage contributes 5% to Soccer Profile Completion.
- It does not block Recruiter-Ready.

`Extended Match Footage` is the canonical product term. Do not create separate `Full Match Video` and `Extended Match Footage` product types.

## Skill Clip Categories

The pilot Soccer library contains these stable categories:

1. Pace in Match Situations
2. Ball Carrying & Attacking 1v1
3. Passing & Distribution
4. Finishing
5. Crossing & Chance Creation
6. Defending & Pressing
7. First Touch & Ball Control
8. Off-ball Movement & Positioning
9. Aerial Play
10. Hold-up & Link Play
11. Shot Stopping
12. Handling & Cross Management
13. Goalkeeper 1v1
14. Goalkeeper Distribution
15. Goalkeeper Positioning

Category identifiers and the position-to-category mappings are configurable and versioned. Display labels may change without changing stored identifiers.

## Primary-Position Suggestions

| Primary position | Suggested Skill Clip categories used for completion |
|---|---|
| Goalkeeper | Shot Stopping; Handling & Cross Management; Goalkeeper 1v1; Goalkeeper Distribution; Goalkeeper Positioning |
| Centre Back | Defending & Pressing; Aerial Play; Passing & Distribution; First Touch & Ball Control; Off-ball Movement & Positioning |
| Right Back; Left Back; Right Wing-Back; Left Wing-Back | Pace in Match Situations; Defending & Pressing; Crossing & Chance Creation; Passing & Distribution; Off-ball Movement & Positioning; First Touch & Ball Control |
| Defensive Midfielder | Defending & Pressing; Passing & Distribution; First Touch & Ball Control; Off-ball Movement & Positioning |
| Central Midfielder | Passing & Distribution; First Touch & Ball Control; Off-ball Movement & Positioning; Ball Carrying & Attacking 1v1; Crossing & Chance Creation |
| Attacking Midfielder | Ball Carrying & Attacking 1v1; Passing & Distribution; First Touch & Ball Control; Off-ball Movement & Positioning; Crossing & Chance Creation; Finishing |
| Right Winger; Left Winger | Ball Carrying & Attacking 1v1; Crossing & Chance Creation; Off-ball Movement & Positioning; Pace in Match Situations; First Touch & Ball Control; Finishing |
| Forward / Striker | Finishing; Off-ball Movement & Positioning; Ball Carrying & Attacking 1v1; First Touch & Ball Control; Hold-up & Link Play |

Only the current primary position determines suggested coverage. The secondary position does not add another completion denominator.

## Upload and Processing Behaviour

- Show the applicable duration limit before the athlete selects or creates a video.
- Reject media outside the applicable duration range with a clear message and a recovery action.
- The UI supports these user-facing states and actions:
  - `Uploading`: show progress and allow cancellation;
  - `Processing`: explain that preparation continues if the athlete leaves the page;
  - `Ready`: allow preview, replacement, and deletion;
  - `Upload failed` or `Processing failed`: provide retry, replacement, and deletion;
  - `Under review`: exclude the item from completion and Scout exposure, and allow deletion or contacting support; and
  - `Restricted` or `Removed`: show a general reason and, where applicable, allow replacement, deletion, or contacting support.
- Do not expose raw technical errors or internal moderation details. Use controlled internal error and reason codes.
- Every unsuccessful state must present a clear available next action.
- Media does not contribute to completion, Recruiter-Ready, or Scout-facing playback until it is `Ready` and permitted for exposure.
- A failed upload provides a retry or replacement action without creating completion credit.
- Upload and processing failure must not delete or replace an existing ready item unless the replacement succeeds.
- Replacing a ready item keeps the existing item active until the replacement becomes ready, unless safety or policy requires immediate removal.
- Only one Main Evaluation Video and one Extended Match Footage video are current. When a replacement becomes ready, it automatically becomes current and the previous item is removed from the Athlete Profile.
- If a replacement fails, the existing current item remains unchanged.
- The pilot does not provide an athlete-facing archive of previous versions.
- Replaced and deleted files are hidden immediately, stop contributing to completion and allowance usage, and follow the platform's approved internal retention policy.
- Skill Clips are managed individually; an athlete may replace or delete any clip within the eight-clip allowance.
- Deletion requires confirmation and immediately removes the item from playback and applicable completion calculations.
- The owner can preview ready media as it will be presented, subject to the current product-access state.

Engineering selects file formats, codecs, technical file-size limits, upload method, storage, transcoding, thumbnails, streaming, retries, and safe operational defaults. Technical controls and the product duration limits must be configurable. Product approves any limits and messages presented to users.

## Pilot Allowance

- The pilot allowance is one Main Evaluation Video, up to eight Skill Clips, and one Extended Match Footage video per Soccer Profile.
- These values are configurable and are not permanent free-tier limits.
- The interface shows item usage in understandable terms, such as `6 of 8 Skill Clips used`; it does not present technical storage consumption to athletes.
- Engineering monitors storage, processing, moderation, and streaming consumption separately.
- When the allowance is reached, new uploads are blocked safely while playback, replacement, and deletion of existing media remain available.
- The message states that the pilot allowance has been reached. It must not show an upgrade, price, purchase action, or promise that paid capacity will be introduced.
- Replacement and deletion behaviour must not allow hidden or failed uploads to consume capacity indefinitely.
- Pilot allowance values are not represented as final free-tier limits.

The model may remain extensible to future capacity entitlements, but Slice 6 does not implement them.

## Storage, Safety, and Access Boundary

- Original files and playback derivatives are private objects; do not expose permanent public URLs.
- Media is accessible only through authorized, time-limited or otherwise controlled delivery.
- Existing Sport Profile access rules remain authoritative. Slice 6 adds no media-specific visibility or sharing controls.
- Media that is processing, failed, rejected, removed, or held for review is unavailable outside its management state.
- Do not require a separate permission checkbox for each video upload.
- The platform consent or terms flow must cover authorization to upload and use media: the guardian accepts it when managing an under-14 athlete account, and the applicable account holder accepts it in other cases.
- Store the accepted consent version and time in the authoritative consent record, not as an analytics event.
- Provide access to the applicable media rules from the upload area without requiring repeated consent. Final wording and any requirement to obtain renewed consent after a material change require legal/privacy approval.
- The system must support restricting or removing media for safety, rights, or policy reasons without deleting the required audit history.

Slice 6 does not introduce athlete discovery, Scout profile access, messaging, media requests, or sharing through a recruiting interaction.

## Completion and Status Recalculation

- Recalculate Soccer Profile Completion and Recruiter-Ready after any successful media status, category, designation, replacement, or deletion change that can affect them.
- Main Evaluation Video contributes 10%, mapped Skill Clip coverage contributes up to 10%, and Extended Match Footage contributes 5%.
- Empty, uploading, processing, failed, rejected, removed, or inapplicable items contribute zero.
- Additional media beyond the defined coverage does not increase completion above 25%.
- Profile Completion, Recruiter-Ready, visibility, and Scout eligibility remain separate states.
- No media action automatically enables Sport Profile visibility.

## Pilot Measurement Requirements

Use the Slice 5 analytics foundation and existing operational records without duplicating authoritative media state. The pilot must support answering:

- How much of the configured allowance do athletes use?
- How many athletes approach, reach, or attempt to exceed the allowance?
- Do athletes replace or delete media to create capacity?
- Which media types are uploaded and successfully processed?
- Which upload or processing problems prevent successful media creation?
- What storage, processing, moderation, and streaming cost is attributable to media usage?

Scout engagement questions, including views, watch time, completion, repeat viewing, and later recruiting actions, are activated only when a later slice introduces eligible Scout playback.

Analytics must not contain filenames, media content, permanent object URLs, descriptions, timestamp labels, or other free-form content.

## Acceptance Criteria

- The authorized ordinary-content editor can upload and privately preview each supported media type.
- Uploading, processing, ready, and failed states are presented correctly.
- Only ready and permitted media contributes to completion.
- One current ready Main Evaluation Video satisfies the Recruiter-Ready media requirement.
- Removing or invalidating that video removes the requirement immediately and recalculates dependent status.
- Skill Clip completion follows the versioned primary-position mapping and never awards repeated-category credit.
- Changing primary position recalculates suggestions without modifying existing media records.
- Extended Match Footage timestamps remain within the video and can be managed by the editor.
- Existing ready media remains active while a replacement processes, unless it must be restricted for safety or policy.
- Pilot allowance enforcement is configurable and contains no payment or upgrade flow.
- Private files are not exposed through permanent public URLs or unauthorized access.
- Media does not grant Scout access or make a Sport Profile visible.
- Media analytics use the Slice 5 contract and do not duplicate authoritative media status or collect prohibited content.

Document acceptance criteria:

- The permitted athlete or guardian can upload and manage documents according to the defined age and management rules.
- Only the three controlled types and their configured subtypes are available; there is no free-text `Other` subtype.
- A non-English document can have one optional certified English translation attached to the same record.
- Multiple documents may use the same subtype, and replacement keeps the existing ready version available until the new version is ready.
- The library enforces the configurable 10-document allowance without payment or upgrade messaging.
- Collapsed rows show minimal information; expanded rows show the agreed metadata and actions.
- Documents display the system-controlled `Athlete-uploaded copy` source and are not represented as official or independently verified.
- Expiry states follow the entered date without deleting the document or changing profile readiness.
- The UI exposes no Sport Profile selector, Scout sharing, document-request flow, or athlete-facing version archive.
- Document analytics remain pending the Slice 6 data-model review.

## Athlete Documents

The following boundaries are already agreed:

- Documents will be a separate top-level area of the Athlete Profile, not part of Soccer Media.
- Every document belongs to the shared Athlete Profile.
- The backend supports an optional link from a document to one or more Sport Profiles, but the one-sport pilot does not show a sport selector or automatically link academic documents to Soccer.
- Documents remain private unless a later approved sharing flow grants access.
- Document records must use stable identifiers so later access grants can refer to a specific document without exposing its storage location.
- Achievements remain structured Soccer Profile information and are not document types.
- Coach References remain structured reference records containing the coach relationship, private contact details, agreement status, and sharing permission; they are not athlete-uploaded documents.
- A future Scout request for a Coach Reference follows the reference workflow rather than the document-request workflow.
- If confidential written references are introduced later, the coach submits the reference through a secure invitation. The athlete may see its submission status but cannot upload, view, or edit the confidential content.
- Slice 6 does not include a Scout document-request interface or workflow; that belongs with the later Scout interaction and evaluation tools.

### Pilot Types and Subtypes

The athlete or guardian selects a controlled subtype; the pilot does not provide a free-text `Other` subtype.

| Type | Controlled subtypes |
|---|---|
| Academic Record | Transcript; Grade Report / Report Card; School Report |
| Graduation or Examination Credential | Diploma / Proof of Graduation; Leaving Certificate; National Examination Results |
| Test Score Report | SAT; ACT; TOEFL; IELTS; Duolingo English Test; Cambridge English |

Product owns the configurable subtype list. When the document language is not English, a certified English translation may be attached to the same document record; it is not a separate subtype.

### Document Information

The athlete or guardian provides:

- type and subtype;
- document language;
- issuing school or organization;
- issue date, or issue year if the exact date is unavailable;
- optionally, an expiry date; and
- if the document language is not English, optionally, a certified English translation attached to the same document record.

The system records:

- a stable document identifier;
- original filename, file type, and size;
- processing status and private storage reference;
- uploader and upload time;
- replacement/version history; and
- system-controlled source status `Athlete-uploaded copy`.

Do not collect student identifiers, passport or government identifiers, copied grades or test scores, or free-text descriptions as separate document metadata. Generate the display title from subtype, issuer, and issue date rather than requesting a manual title.

- Do not describe athlete- or guardian-uploaded documents as official or verified.
- An attached translation may be labelled `Certified translation` when identified as such by the uploader, but UnicAthlete does not verify that certification during the pilot.
- Explain that a school, the NCAA, or a testing organization may still require a document directly from its issuer.
- Reserve separate source statuses for future documents submitted directly by an issuing organization or reference provider.

### Upload and Management Behaviour

- Before the athlete joins, the authorized guardian manages the document library.
- For an under-14 athlete, the authorized guardian can upload, preview, download, replace, and delete documents.
- After an athlete aged 14–17 joins, the athlete manages documents; the guardian retains preview and download access but cannot upload, replace, or delete them.
- When the athlete turns 18, previous guardian document access ends under the existing adult-transition rules.
- An adult athlete manages and accesses documents independently.
- Slice 6 does not allow either the athlete or guardian to share documents with Scouts.
- Allow multiple documents of the same subtype.
- Each ready document provides preview, download, replace, and delete actions.
- `Upload another` creates a separate document; `Replace` creates a new version of the selected document.
- Keep the existing ready version available while its replacement uploads and processes.
- If replacement processing fails, keep the existing version unchanged.
- When the replacement becomes ready, make it current and hide the previous version.
- Do not provide an athlete-facing version archive during the pilot.
- Deletion requires confirmation and removes the document from the athlete library immediately; retained internal data follows the approved retention policy.
- Manage a certified English translation as an attachment to the original document, not as a separate library item.
- Show clear `Uploading`, `Processing`, `Ready`, and `Upload failed` states, with an appropriate retry or replacement action after failure.

### Pilot Document Allowance

- Allow up to 10 current documents per Athlete Profile.
- A translation attached to a document and hidden previous versions do not count as additional documents.
- Show usage in item-count terms, such as `4 of 10 documents`.
- At the limit, block additional documents while keeping preview, download, replacement, and deletion available.
- Do not present payment or upgrade messaging.
- Keep the item allowance configurable. Engineering determines technical file-size and storage limits.

### Expiry and Profile Status

- Documents are optional and do not affect Profile Completion, Recruiter-Ready, visibility, or search ranking.
- Keep an expired document in the library and mark it `Expired`; do not delete it automatically.
- Mark a document `Expiring soon` beginning 30 days before its entered expiry date.
- During the pilot, show expiry states only in the Documents area and do not send expiry notifications.
- Do not calculate expiry automatically; the entered expiry date is authoritative.
- The permitted manager may replace or delete an expired document.

### Library Presentation

- Present Documents as a separate top-level Athlete Profile page.
- Group documents by the three document types, sort each group newest first, and hide empty groups.
- A collapsed document row shows only its subtype, issuing school or organization, and an expand control.
- Show a collapsed-row status badge only when action or attention is relevant: `Processing`, `Upload failed`, `Expiring soon`, or `Expired`. Do not show a badge for an ordinary ready document.
- Expanding a row shows issue date or year, language, source label, optional expiry date, attached translation, upload date, and the available actions.
- `Preview` opens the document itself; expanding a row only reveals its metadata.
- Keep the translation nested under its original document.
- Show total allowance usage near the upload action.
- Do not add document search or filters during the pilot.

### Document Analytics — Pending Data-Model Review

Define document analytics after reviewing the Slice 6 data model. Use authoritative document and status records wherever they already answer the product question, and add behavioural events only for unanswered user-interaction questions. Do not send filenames, issuer names, document contents, dates, or other document metadata to analytics.

Later sharing permissions still require Product definition.

## Explicitly Outside This Revision

- payments, subscriptions, paid capacity, purchases, paywalls, or upgrade prompts;
- final free-tier limits;
- athlete discovery or Scout access to Athlete Profiles;
- Scout media requests;
- messaging, evaluations, recruiting projects, and pipelines;
- athlete-facing recruiter-activity insights;
- Scout document requests, sharing, or access grants; and
- final legal wording or unapproved retention periods.
