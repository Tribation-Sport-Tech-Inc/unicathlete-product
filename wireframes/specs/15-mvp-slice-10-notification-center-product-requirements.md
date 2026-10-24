# MVP Slice 10 — Notification Center

## Goal

Provide Athletes, Guardians, and Scouts with one place to see important product updates and open the relevant action. Reuse the channel-independent notification events created by earlier slices.

## Access and Layout

- Add a notification bell to the main Athlete and Scout navigation with an unread count.
- The bell opens a dedicated Notification Center page.
- Show one chronological list, newest first, with `All` and `Unread` filters.
- Visually distinguish unread items.
- Administrators continue to use their dedicated review and safety queues.

## Notification Content

Each notification contains:

- a short title;
- an optional second line only when it adds useful context;
- date and time;
- read state; and
- one action link to the relevant item.

Do not include message text, private document names or contents, identity-verification details, report or safety details, internal reasons, project names, evaluations, or notes.

## Read State

- A notification becomes read when the user opens it, opens its specific related item directly, or marks it as read.
- Opening the Notification Center alone does not mark items as read.
- Provide `Mark as read` and `Mark all as read`.
- Opening a conversation marks related message notifications and the conversation's separate unread-message state as read.
- Marking a notification as read without opening the conversation does not mark messages as read.

## Repeated Events

- Deduplicate repeated delivery of the same event.
- Group unread ordinary messages from the same conversation, for example `3 new messages from Mike Brown`.
- Keep different conversations separate.
- Do not group safety, access, verification, or guardian-approval events with unrelated events.

## Action Links and Access

- Open the specific conversation, request, approval, verification, or profile-status destination.
- Recheck current authorization before showing the destination.
- If the item is unavailable or access has ended, show `This item is no longer available` without exposing its content.
- Mark the opened notification as read even when its destination is unavailable.

## Supported Pilot Events

- account email, identity verification, and reverification changes;
- Scout affiliation verification, expiry, suspension, restoration, and required actions;
- guardian consent, approval, relationship, and age-transition actions;
- Athlete Profile visibility changes required by Slice 7;
- contact-request changes, new messages, guardian message approval, and messaging restrictions;
- information-request changes; and
- private-document access, replacement, deletion, withdrawal, or unavailability.

Do not notify users about profile views, Scout evaluations, notes, project activity, analytics events, ordinary profile edits, or routine media-processing progress.

## Recipients

- Use the current age, authority, relationship, and access rules from the originating slice.
- Under-14 and not-joined minor notifications go to the guardian.
- Joined supervised Athletes receive relevant updates; decisions and approval requests go to the guardian.
- Independent Athletes aged 16–17 receive their own notifications; guardians receive only required safety, visibility, and supervision updates.
- Adults receive their own notifications.
- Scouts receive notifications only for their own account, affiliation, Workspace conversations, and requests.
- When Athlete and Guardian must both be notified, provide role-appropriate wording.

## Channels

- Create in-platform notifications for all supported events.
- Continue required transactional email from previous slices.
- Email action-required contact requests, guardian approvals, information requests, and access or safety restrictions.
- Do not email every ordinary message.
- Do not add notification preferences, push, SMS, digests, or quiet hours during the pilot.
- Email delivery state remains internal and never changes the underlying product action.

## History and States

- Keep notifications visible for a configurable 90 days; underlying records follow their own retention rules.
- Users cannot delete individual notifications during the pilot.
- Support `Unread`, `Read`, empty, loading-failed with retry, and unavailable-destination states.
- Do not add user-facing priority levels.

## Privacy and Reliability

- Notification payloads contain only registered safe fields and no free text from users.
- Notification failure does not reverse or delay the underlying action.
- Notification read state is separate from the state of the underlying message, request, verification, or profile.

## Outside Slice 10

- notification preferences;
- push notifications, SMS, digests, and quiet hours;
- advanced filters, categories, search, folders, or priority levels;
- administrator case-management notifications; and
- notification analytics, to be defined after the data model.
