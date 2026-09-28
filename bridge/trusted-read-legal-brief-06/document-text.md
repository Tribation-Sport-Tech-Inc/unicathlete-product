# UnicAthlete - Legal Review Brief

- Document ID: 1zO4bxDUrQUbwjlFjnSN6pgIcN9Sy3-tMufh7e_TfA7w
- Revision ID: ANLCKQkK-OzbgqgGZK6SuRrprY4uuwHLouoq9L7QGWTC8JGlwYwbIT5sl8dwAG8CpEqM0bpJ5XbFbnW4E1VGugLXvqgKv8oMmU0B8pLamSY
- Selected tab: all
- Protected controls: 0
- Opaque controls: 0
- Authoritative dropdowns: 0

Protected-control annotations are preservation instructions. Do not insert their displayed placeholder text to recreate a native control.

## Tab 1 (t.0)

[P00001 | 1:19 | HEADING_1]
Product overview 

[P00002 | 19:20 | NORMAL_TEXT]
⟦EMPTY PARAGRAPH⟧

[P00003 | 20:331 | NORMAL_TEXT]
UnicAthlete is a sports recruiting platform where athletes create sports portfolios and verified scouts search for and review athletes. The platform may include athletes as young as eight. Because adult scouts may access information about minor athletes, minor safety and privacy are core product requirements.

[P00004 | 331:332 | NORMAL_TEXT]
⟦EMPTY PARAGRAPH⟧

[P00005 | 332:402 | NORMAL_TEXT]
Link to the platform (work in progress): [https://app.unicathlete.com/](https://app.unicathlete.com/)

[P00006 | 402:415 | NORMAL_TEXT]
Wireframes: 

[P00007 | 415:433 | NORMAL_TEXT]
[Platform Overview](https://tribation-sport-tech-inc.github.io/unicathlete-product/wireframes/index.html)

[P00008 | 433:455 | NORMAL_TEXT]
[Athlete Side Overview](https://tribation-sport-tech-inc.github.io/unicathlete-product/wireframes/athlete/overview.html)

[P00009 | 455:475 | NORMAL_TEXT]
[Scout Side Overview](https://tribation-sport-tech-inc.github.io/unicathlete-product/wireframes/recruiter/overview.html)

[P00010 | 475:495 | NORMAL_TEXT]
[Create Account Flow](https://tribation-sport-tech-inc.github.io/unicathlete-product/wireframes/signup.html)

[P00011 | 495:496 | NORMAL_TEXT]
⟦EMPTY PARAGRAPH⟧

[P00012 | 496:512 | HEADING_1]
Users and roles

[P00013 | 512:534 | HEADING_2]
Athlete Profile users

[P00014 | 534:590 | NORMAL_TEXT | LIST id=kix.uk9izeo2kidy level=0]
Athlete: the person represented by the Athlete Profile.

[P00015 | 590:682 | NORMAL_TEXT | LIST id=kix.uk9izeo2kidy level=0]
Guardian: the adult user who manages or supervises a minor athlete’s profile when required.

[P00016 | 682:787 | NORMAL_TEXT]
See “Age-based athlete account model” below for the applicable management, supervision and access rules.

[P00017 | 787:817 | HEADING_2]
Scout and administrator users

[P00018 | 817:893 | NORMAL_TEXT | LIST id=kix.cs7w1mjv6ohd level=0]
Scout: must be 18 or older and is the only user managing the Scout profile.

[P00019 | 893:1054 | NORMAL_TEXT | LIST id=kix.cs7w1mjv6ohd level=0]
Administrator: a named, MFA-protected internal account with restricted permission to review Scout affiliations. Shared administrator credentials are prohibited.

[P00020 | 1054:1086 | HEADING_1]
Age-based athlete account model

[P00021 | 1086:1258 | NORMAL_TEXT]
Age bands are calculated from the athlete’s date of birth. After account creation, date of birth is locked and may be corrected only through an authorized support process.

[P00022 | 1258:1359 | NORMAL_TEXT | LIST id=kix.2nvn7x2ggzc3 level=0]
Under 14 — Guardian-managed: the guardian creates and manages the profile; the athlete has no login.

[P00023 | 1359:1801 | NORMAL_TEXT | LIST id=kix.2nvn7x2ggzc3 level=0]
Ages 14–15 — Supervised: a guardian is required. The athlete or guardian may start the account. Before the athlete joins, the guardian manages the private profile. After the athlete joins, the athlete edits ordinary profile content while the guardian retains view access and controls visibility and guardian-required permissions. External communication remains supervised; the exact approval mechanism is subject to legal and product review.

[P00024 | 1801:2267 | NORMAL_TEXT | LIST id=kix.2nvn7x2ggzc3 level=0]
Ages 16–17 — Supervised by default: the same supervised rules apply unless independent communication is jointly accepted by the athlete and guardian after the athlete activates their login. In independent mode, routine guardian approval is not required unless a separate legal or safety rule applies. The athlete may enable visibility once all gates pass; either the athlete or guardian may make the profile private. The guardian remains connected with view access.

[P00025 | 2267:2650 | NORMAL_TEXT | LIST id=kix.2nvn7x2ggzc3 level=0]
Age 18+ — Athlete-managed: minor-based guardian access ends and the athlete becomes the sole profile manager. The profile becomes private at the transition. The athlete may manage it privately without identity verification, but must complete the applicable adult legal actions, email verification, identity verification and other eligibility requirements before enabling visibility.

[P00026 | 2650:2835 | NORMAL_TEXT]
Age transitions never automatically grant access, independence or visibility. If newly applicable requirements are incomplete, the affected feature moves to the safer restricted state.

[P00027 | 2835:2855 | HEADING_1]
Guardian safeguards

[P00028 | 2855:3198 | NORMAL_TEXT]
Guardians and athletes use separate accounts and never share credentials. A guardian must verify their email and identity, which confirms that they are an adult but does not prove their relationship to the athlete. They must also declare that they are the parent or authorized legal guardian and provide the required consents and permissions.

[P00029 | 3198:3341 | NORMAL_TEXT]
We retain a versioned audit record of these actions, including any later withdrawal. The MVP supports one active guardian per Athlete Profile.

[P00030 | 3341:3361 | HEADING_2]
Legal review needed

[P00031 | 3361:3588 | NORMAL_TEXT]
Please confirm whether guardian self-attestation is sufficient, what parental consent or minor assent is required, and how withdrawal, multiple guardians and guardianship disputes should be handled in each launch jurisdiction.

[P00032 | 3588:3627 | HEADING_1]
Scout safeguards before athlete access

[P00033 | 3627:3754 | NORMAL_TEXT | LIST id=kix.gtsn3jfkdknx level=0]
The Scout must verify the account email and complete identity verification, including confirmation that the Scout is an adult.

[P00034 | 3754:3924 | NORMAL_TEXT | LIST id=kix.gtsn3jfkdknx level=0]
The Scout must have a current, verifiable relationship with an eligible organization; unaffiliated or self-declared independent Scout access is not supported in the MVP.

[P00035 | 3924:4160 | NORMAL_TEXT | LIST id=kix.gtsn3jfkdknx level=0]
Required affiliation information includes organization name, type, country/branch, official website, professional title, recruiting scope, relationship type, organization work email where available, and an official corroboration route.

[P00036 | 4160:4284 | NORMAL_TEXT | LIST id=kix.gtsn3jfkdknx level=0]
A verified organization work email proves mailbox control only; it does not prove the Scout’s role or recruiting authority.

[P00037 | 4284:4462 | NORMAL_TEXT | LIST id=kix.gtsn3jfkdknx level=0]
Affiliation must be supported by an official staff page, official federation/league directory, or confirmation through an independently verified organization-controlled channel.

[P00038 | 4462:4651 | NORMAL_TEXT | LIST id=kix.gtsn3jfkdknx level=0]
An authorized administrator manually confirms the organization’s eligibility and the Scout’s identity, current relationship, role, recruiting authority, and applicable recruiting category.

[P00039 | 4651:4791 | NORMAL_TEXT | LIST id=kix.gtsn3jfkdknx level=0]
Identity verification and affiliation confirmation remain separate. A Scout receives no athlete access until every eligibility gate passes.

[P00040 | 4791:4968 | NORMAL_TEXT | LIST id=kix.gtsn3jfkdknx level=0]
Affiliation is subject to expiry/reverification and may be suspended or revoked. Losing an access requirement removes athlete access immediately and preserves an audit history.

[P00041 | 4968:5149 | NORMAL_TEXT | LIST id=kix.gtsn3jfkdknx level=0]
Restricted Scouts cannot search for, discover, open, message, save, evaluate, request information from, or otherwise access athlete profiles, including through direct URLs or APIs.

[P00042 | 5149:5179 | HEADING_1]
Athlete visibility and access

[P00043 | 5179:5232 | NORMAL_TEXT | LIST id=kix.yooecx2so2m6 level=0]
Visibility is set separately for each Sport Profile.

[P00044 | 5232:5390 | NORMAL_TEXT | LIST id=kix.yooecx2so2m6 level=0]
The only planned choices are Private and Visible to eligible scouts. Profiles are not public, anonymously accessible, or intended for search-engine indexing.

[P00045 | 5390:5517 | NORMAL_TEXT | LIST id=kix.yooecx2so2m6 level=0]
Visibility is never enabled automatically. All eligibility gates must pass and the authorized user must explicitly turn it on.

[P00046 | 5517:5592 | NORMAL_TEXT | LIST id=kix.yooecx2so2m6 level=0]
Under 14 and unjoined minors aged 14–17: the guardian controls visibility.

[P00047 | 5592:5732 | NORMAL_TEXT | LIST id=kix.yooecx2so2m6 level=0]
Joined athletes aged 14–15 and joined supervised athletes aged 16–17: the athlete can see the status, but the guardian controls visibility.

[P00048 | 5732:5885 | NORMAL_TEXT | LIST id=kix.yooecx2so2m6 level=0]
Joined athletes aged 16–17 in accepted independent mode: the athlete may enable visibility; either the athlete or guardian may make the profile private.

[P00049 | 5885:5926 | NORMAL_TEXT | LIST id=kix.yooecx2so2m6 level=0]
Adults: the athlete controls visibility.

[P00050 | 5926:6153 | NORMAL_TEXT | LIST id=kix.yooecx2so2m6 level=0]
If consent/permission, verification, Recruiter-Ready status, account eligibility, or a safety condition later fails, the profile becomes private immediately. Visibility does not resume automatically when the issue is resolved.

[P00051 | 6153:6208 | HEADING_1]
Athlete information intended for scout-facing profiles

[P00052 | 6208:6295 | NORMAL_TEXT]
Subject to field-level legal review, the planned recruiter-facing profile may include:

[P00053 | 6295:6405 | NORMAL_TEXT | LIST id=kix.69emqmq8uk8m level=0]
identity and basic location information, such as name, city, country of residence, citizenship and languages;

[P00054 | 6405:6452 | NORMAL_TEXT | LIST id=kix.69emqmq8uk8m level=0]
education and recruiting timeline information;

[P00055 | 6452:6525 | NORMAL_TEXT | LIST id=kix.69emqmq8uk8m level=0]
measurements and soccer details, including positions and preferred foot;

[P00056 | 6525:6593 | NORMAL_TEXT | LIST id=kix.69emqmq8uk8m level=0]
current team context, playing history, statistics and achievements;

[P00057 | 6593:6644 | NORMAL_TEXT | LIST id=kix.69emqmq8uk8m level=0]
recruiting availability and destination interests;

[P00058 | 6644:6752 | NORMAL_TEXT | LIST id=kix.69emqmq8uk8m level=0]
profile photo and approved recruiting media, including evaluation video, skill clips and match footage; and

[P00059 | 6752:6818 | NORMAL_TEXT | LIST id=kix.69emqmq8uk8m level=0]
coach-reference status, without exposing private contact details.

[P00060 | 6818:6882 | NORMAL_TEXT]
Information excluded from ordinary profile visibility includes:

[P00061 | 6882:6944 | NORMAL_TEXT | LIST id=kix.d5dzkyvyzrct level=0]
direct contact information and private coach contact details;

[P00062 | 6944:6995 | NORMAL_TEXT | LIST id=kix.d5dzkyvyzrct level=0]
guardian, legal, consent and verification records;

[P00063 | 6995:7059 | NORMAL_TEXT | LIST id=kix.d5dzkyvyzrct level=0]
internal safety, moderation, affiliation and audit information;

[P00064 | 7059:7136 | NORMAL_TEXT | LIST id=kix.d5dzkyvyzrct level=0]
identity documents, biometric information and raw verification evidence; and

[P00065 | 7136:7240 | NORMAL_TEXT | LIST id=kix.d5dzkyvyzrct level=0]
athlete-uploaded academic documents. Profile visibility alone never grants access to private documents.

[P00066 | 7240:7501 | NORMAL_TEXT]
Open point for legal review: confirm the exact field-level projection, including whether a minor’s exact date of birth, school, precise location, team information, photos, videos, statistics and citizenship should be shown, generalized, age-gated, or withheld.

[P00067 | 7501:7539 | HEADING_1]
Communication and information sharing

[P00068 | 7539:7612 | NORMAL_TEXT | LIST id=kix.z3tzrjgk4xve level=0]
Detailed messaging and off-platform contact flows are not yet finalized.

[P00069 | 7612:7782 | NORMAL_TEXT | LIST id=kix.z3tzrjgk4xve level=0]
For ages 16–17, independent communication is a product permission requiring explicit acceptance by both athlete and guardian; otherwise communication remains supervised.

[P00070 | 7782:8009 | NORMAL_TEXT | LIST id=kix.z3tzrjgk4xve level=0]
Independent communication may cover eligible Scout messages, information-request responses, requested media/documents and recruiting follow-up, but it does not automatically constitute legal consent for every related data use.

[P00071 | 8009:8169 | NORMAL_TEXT | LIST id=kix.z3tzrjgk4xve level=0]
Private contact details, documents and other restricted information require separate sharing rules and access grants; profile visibility alone is insufficient.

[P00072 | 8169:8189 | HEADING_2]
Legal review needed

[P00073 | 8189:8297 | NORMAL_TEXT | LIST id=kix.1rklxmv8cpj3 level=0]
Permitted communication model for each age group, including whether guardians must receive or see messages.

[P00074 | 8297:8373 | NORMAL_TEXT | LIST id=kix.1rklxmv8cpj3 level=0]
Rules for sharing contact information or moving communication off-platform.

[P00075 | 8373:8459 | NORMAL_TEXT | LIST id=kix.1rklxmv8cpj3 level=0]
Required reporting, blocking, moderation, record-retention and escalation mechanisms.

[P00076 | 8459:8489 | HEADING_1]
Media and document safeguards

[P00077 | 8489:8662 | NORMAL_TEXT | LIST id=kix.uk7d2ilmwrmy level=0]
Original media, derivatives and documents are stored as private objects and delivered only through authorized, controlled access; permanent public file URLs are prohibited.

[P00078 | 8662:8840 | NORMAL_TEXT | LIST id=kix.uk7d2ilmwrmy level=0]
Uploaded video is automatically checked before becoming available. Flagged media is held for authorized manual review; automated checks do not make the final rejection decision.

[P00079 | 8840:8944 | NORMAL_TEXT | LIST id=kix.uk7d2ilmwrmy level=0]
Only media in a ready and permitted state can contribute to profile readiness or Scout-facing playback.

[P00080 | 8944:9082 | NORMAL_TEXT | LIST id=kix.uk7d2ilmwrmy level=0]
Athlete documents remain private and require separate access rules. PDF uploads undergo a server-side malware scan before becoming ready.

[P00081 | 9082:9216 | NORMAL_TEXT | LIST id=kix.uk7d2ilmwrmy level=0]
Deletion or replacement removes the item from user-facing access immediately; internal retention follows the legally approved policy.

[P00082 | 9216:9264 | HEADING_1]
Consent, notices and documents for legal review

[P00083 | 9264:9278 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Terms of Use.

[P00084 | 9278:9400 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Privacy Notice, including identity-verification provider involvement, cross-border processing, retention and user rights.

[P00085 | 9400:9459 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Guardian authority assertion and parental-consent wording.

[P00086 | 9459:9513 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Minor assent/acknowledgment wording where applicable.

[P00087 | 9513:9562 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Visibility and communication permission wording.

[P00088 | 9562:9631 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Scout restricted-access acknowledgment and affiliation declarations.

[P00089 | 9631:9665 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Pre-identity-verification notice.

[P00090 | 9665:9724 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Media and document upload, moderation and sharing notices.

[P00091 | 9724:9750 | HEADING_1]
Key questions for counsel

[P00092 | 9750:9869 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
Are the proposed age bands, management roles and visibility controls appropriate for the planned launch jurisdictions?

[P00093 | 9869:9943 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
Which safeguards are legally required, strongly recommended, or optional?

[P00094 | 9943:10069 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
Is adult identity verification plus guardian self-attestation sufficient? If not, what relationship verification is required?

[P00095 | 10069:10171 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
What consent and assent must be obtained, from whom, and for which processing or disclosure purposes?

[P00096 | 10171:10241 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
What athlete fields and media may verified Scouts access at each age?

[P00097 | 10241:10358 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
What restrictions should apply to messaging, contact sharing, downloads, saving, exporting and off-platform contact?

[P00098 | 10358:10475 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
Are Scout identity and affiliation checks sufficient, or are background/safeguarding checks required or recommended?

[P00099 | 10475:10566 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
What access, correction, deletion, withdrawal and parental-control workflows are required?

[P00100 | 10566:10733 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
What retention periods and deletion rules should apply to accounts, consent records, identity checks, affiliation evidence, media, documents, messages and audit logs?

[P00101 | 10733:10914 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
What additional requirements arise from the current MVP assumption of Scouts in the United States and athletes in Spain, including international access and cross-border processing?

[P00102 | 10914:11030 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
What changes are required to the Terms of Use, Privacy Notice and all consent/permission wording before production?

[P00103 | 11030:11068 | HEADING_1]
Items still to be linked or confirmed

[P00104 | 11068:11102 | NORMAL_TEXT | LIST id=kix.8vknkvddemvc level=0]
Draft Terms of Use: [insert link]

[P00105 | 11102:11138 | NORMAL_TEXT | LIST id=kix.8vknkvddemvc level=0]
Draft Privacy Notice: [insert link]

[P00106 | 11138:11192 | NORMAL_TEXT | LIST id=kix.8vknkvddemvc level=0]
Consent and permission wording/screens: [insert link]

[P00107 | 11192:11257 | NORMAL_TEXT | LIST id=kix.8vknkvddemvc level=0]
Messaging and reporting wireframes: [insert link when available]

[P00108 | 11257:11327 | NORMAL_TEXT | LIST id=kix.8vknkvddemvc level=0]
Initial launch jurisdictions and entity/controller details: [confirm]

[P00109 | 11327:11328 | NORMAL_TEXT]
⟦EMPTY PARAGRAPH⟧

