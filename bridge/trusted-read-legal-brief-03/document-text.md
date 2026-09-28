# UnicAthlete - Legal Review Brief

- Document ID: 1zO4bxDUrQUbwjlFjnSN6pgIcN9Sy3-tMufh7e_TfA7w
- Revision ID: ANLCKQkKvihSZLvDdWtfTQLMF4r0TCVe2IrSbGKRjnBUpMZuqZ_36mINCBmZXUN0aspCbckzTaWfKQwrsi7tX1lKtFxiSrbC28-AvvdE0C4
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

[P00021 | 1086:1242 | NORMAL_TEXT]
Age band rules are derived from Athlete's date of birth. Date of birth can’t be changed. Requests about DOB change can be sent through contacting support. 

[P00022 | 1242:1304 | NORMAL_TEXT]
Athlete under 14: Guardian-managed profile; no Athlete login.

[P00023 | 1304:1622 | NORMAL_TEXT]
Athlete ages 14–15: Supervised mode: Guardian required. Athlete can have their own login. If Athlete joins the account, Guardian manages Visibility (link to visibility concept explanation), has access to the profile as a viewer and approves/disapproves every communication with scout (every message and info request).

[P00024 | 1622:2032 | NORMAL_TEXT]
Athlete ages 16–17: the same supervised model applies by default. Independent communication mode is possible and requires an activated athlete login and explicit agreement by both athlete and guardian; the guardian remains connected. Guardian does not need to approve/disapprove the communication, but still has access to communication and profile as a viewer. (Remind me if guardian stil manages visibility?)

[P00025 | 2032:2372 | NORMAL_TEXT]
Athlete age 18+: previous minor permissions do not automatically carry forward. Guardian access ends, visibility becomes private, and the athlete must complete the applicable adult Terms, Privacy Notice action, permissions, email verification, and identity verification (ID verification is optional right) before enabling visibility again.

[P00026 | 2372:2373 | NORMAL_TEXT]
⟦EMPTY PARAGRAPH⟧

[P00027 | 2373:2517 | NORMAL_TEXT]
Age changes never automatically grant access, independence, or visibility. Missing requirements move the account to the safer restricted state.

[P00028 | 2517:2537 | HEADING_1]
Guardian safeguards

[P00029 | 2537:2609 | NORMAL_TEXT | LIST id=kix.m4c9qigkf43y level=0]
Athlete and guardian use separate accounts and never share credentials.

[P00030 | 2609:2774 | NORMAL_TEXT | LIST id=kix.m4c9qigkf43y level=0]
The guardian must verify their account email and identity. Identity verification establishes identity and adult status; it does not prove the guardian relationship.

[P00031 | 2774:2921 | NORMAL_TEXT | LIST id=kix.m4c9qigkf43y level=0]
The guardian asserts that they are the athlete’s parent or authorized legal guardian. The current MVP does not collect proof of that relationship.

[P00032 | 2921:3092 | NORMAL_TEXT | LIST id=kix.m4c9qigkf43y level=0]
Terms agreement, Privacy Notice acknowledgment, guardian-authority assertion, purpose-specific consent, and product permissions are stored as separate, versioned records.

[P00033 | 3092:3261 | NORMAL_TEXT | LIST id=kix.m4c9qigkf43y level=0]
Records preserve who acted, their role, the affected profile, wording/version shown, language, action, timestamp, applicable age band/jurisdiction, status, and history.

[P00034 | 3261:3376 | NORMAL_TEXT | LIST id=kix.m4c9qigkf43y level=0]
Consent or permission may be granted, declined, withdrawn, expired, replaced, or renewed without deleting history.

[P00035 | 3376:3474 | NORMAL_TEXT | LIST id=kix.m4c9qigkf43y level=0]
The MVP supports one active guardian with management or visibility authority per Athlete Profile.

[P00036 | 3474:3494 | HEADING_2]
Legal review needed

[P00037 | 3494:3601 | NORMAL_TEXT | LIST id=kix.6e76fr256s90 level=0]
Whether guardian self-attestation is sufficient and when proof of parental or legal authority is required.

[P00038 | 3601:3675 | NORMAL_TEXT | LIST id=kix.6e76fr256s90 level=0]
What constitutes verifiable parental consent in each launch jurisdiction.

[P00039 | 3675:3770 | NORMAL_TEXT | LIST id=kix.6e76fr256s90 level=0]
Which actions require guardian consent, athlete assent, or both, and how withdrawal must work.

[P00040 | 3770:3882 | NORMAL_TEXT | LIST id=kix.6e76fr256s90 level=0]
Whether one-guardian authorization is sufficient and how disputes or changes in guardianship should be handled.

[P00041 | 3882:3921 | HEADING_1]
Scout safeguards before athlete access

[P00042 | 3921:4048 | NORMAL_TEXT | LIST id=kix.gtsn3jfkdknx level=0]
The Scout must verify the account email and complete identity verification, including confirmation that the Scout is an adult.

[P00043 | 4048:4218 | NORMAL_TEXT | LIST id=kix.gtsn3jfkdknx level=0]
The Scout must have a current, verifiable relationship with an eligible organization; unaffiliated or self-declared independent Scout access is not supported in the MVP.

[P00044 | 4218:4454 | NORMAL_TEXT | LIST id=kix.gtsn3jfkdknx level=0]
Required affiliation information includes organization name, type, country/branch, official website, professional title, recruiting scope, relationship type, organization work email where available, and an official corroboration route.

[P00045 | 4454:4578 | NORMAL_TEXT | LIST id=kix.gtsn3jfkdknx level=0]
A verified organization work email proves mailbox control only; it does not prove the Scout’s role or recruiting authority.

[P00046 | 4578:4756 | NORMAL_TEXT | LIST id=kix.gtsn3jfkdknx level=0]
Affiliation must be supported by an official staff page, official federation/league directory, or confirmation through an independently verified organization-controlled channel.

[P00047 | 4756:4945 | NORMAL_TEXT | LIST id=kix.gtsn3jfkdknx level=0]
An authorized administrator manually confirms the organization’s eligibility and the Scout’s identity, current relationship, role, recruiting authority, and applicable recruiting category.

[P00048 | 4945:5085 | NORMAL_TEXT | LIST id=kix.gtsn3jfkdknx level=0]
Identity verification and affiliation confirmation remain separate. A Scout receives no athlete access until every eligibility gate passes.

[P00049 | 5085:5262 | NORMAL_TEXT | LIST id=kix.gtsn3jfkdknx level=0]
Affiliation is subject to expiry/reverification and may be suspended or revoked. Losing an access requirement removes athlete access immediately and preserves an audit history.

[P00050 | 5262:5443 | NORMAL_TEXT | LIST id=kix.gtsn3jfkdknx level=0]
Restricted Scouts cannot search for, discover, open, message, save, evaluate, request information from, or otherwise access athlete profiles, including through direct URLs or APIs.

[P00051 | 5443:5473 | HEADING_1]
Athlete visibility and access

[P00052 | 5473:5526 | NORMAL_TEXT | LIST id=kix.yooecx2so2m6 level=0]
Visibility is set separately for each Sport Profile.

[P00053 | 5526:5684 | NORMAL_TEXT | LIST id=kix.yooecx2so2m6 level=0]
The only planned choices are Private and Visible to eligible scouts. Profiles are not public, anonymously accessible, or intended for search-engine indexing.

[P00054 | 5684:5811 | NORMAL_TEXT | LIST id=kix.yooecx2so2m6 level=0]
Visibility is never enabled automatically. All eligibility gates must pass and the authorized user must explicitly turn it on.

[P00055 | 5811:5886 | NORMAL_TEXT | LIST id=kix.yooecx2so2m6 level=0]
Under 14 and unjoined minors aged 14–17: the guardian controls visibility.

[P00056 | 5886:6026 | NORMAL_TEXT | LIST id=kix.yooecx2so2m6 level=0]
Joined athletes aged 14–15 and joined supervised athletes aged 16–17: the athlete can see the status, but the guardian controls visibility.

[P00057 | 6026:6179 | NORMAL_TEXT | LIST id=kix.yooecx2so2m6 level=0]
Joined athletes aged 16–17 in accepted independent mode: the athlete may enable visibility; either the athlete or guardian may make the profile private.

[P00058 | 6179:6220 | NORMAL_TEXT | LIST id=kix.yooecx2so2m6 level=0]
Adults: the athlete controls visibility.

[P00059 | 6220:6447 | NORMAL_TEXT | LIST id=kix.yooecx2so2m6 level=0]
If consent/permission, verification, Recruiter-Ready status, account eligibility, or a safety condition later fails, the profile becomes private immediately. Visibility does not resume automatically when the issue is resolved.

[P00060 | 6447:6502 | HEADING_1]
Athlete information intended for scout-facing profiles

[P00061 | 6502:6589 | NORMAL_TEXT]
Subject to field-level legal review, the planned recruiter-facing profile may include:

[P00062 | 6589:6699 | NORMAL_TEXT | LIST id=kix.69emqmq8uk8m level=0]
identity and basic location information, such as name, city, country of residence, citizenship and languages;

[P00063 | 6699:6746 | NORMAL_TEXT | LIST id=kix.69emqmq8uk8m level=0]
education and recruiting timeline information;

[P00064 | 6746:6819 | NORMAL_TEXT | LIST id=kix.69emqmq8uk8m level=0]
measurements and soccer details, including positions and preferred foot;

[P00065 | 6819:6887 | NORMAL_TEXT | LIST id=kix.69emqmq8uk8m level=0]
current team context, playing history, statistics and achievements;

[P00066 | 6887:6938 | NORMAL_TEXT | LIST id=kix.69emqmq8uk8m level=0]
recruiting availability and destination interests;

[P00067 | 6938:7046 | NORMAL_TEXT | LIST id=kix.69emqmq8uk8m level=0]
profile photo and approved recruiting media, including evaluation video, skill clips and match footage; and

[P00068 | 7046:7112 | NORMAL_TEXT | LIST id=kix.69emqmq8uk8m level=0]
coach-reference status, without exposing private contact details.

[P00069 | 7112:7176 | NORMAL_TEXT]
Information excluded from ordinary profile visibility includes:

[P00070 | 7176:7238 | NORMAL_TEXT | LIST id=kix.d5dzkyvyzrct level=0]
direct contact information and private coach contact details;

[P00071 | 7238:7289 | NORMAL_TEXT | LIST id=kix.d5dzkyvyzrct level=0]
guardian, legal, consent and verification records;

[P00072 | 7289:7353 | NORMAL_TEXT | LIST id=kix.d5dzkyvyzrct level=0]
internal safety, moderation, affiliation and audit information;

[P00073 | 7353:7430 | NORMAL_TEXT | LIST id=kix.d5dzkyvyzrct level=0]
identity documents, biometric information and raw verification evidence; and

[P00074 | 7430:7534 | NORMAL_TEXT | LIST id=kix.d5dzkyvyzrct level=0]
athlete-uploaded academic documents. Profile visibility alone never grants access to private documents.

[P00075 | 7534:7795 | NORMAL_TEXT]
Open point for legal review: confirm the exact field-level projection, including whether a minor’s exact date of birth, school, precise location, team information, photos, videos, statistics and citizenship should be shown, generalized, age-gated, or withheld.

[P00076 | 7795:7833 | HEADING_1]
Communication and information sharing

[P00077 | 7833:7906 | NORMAL_TEXT | LIST id=kix.z3tzrjgk4xve level=0]
Detailed messaging and off-platform contact flows are not yet finalized.

[P00078 | 7906:8076 | NORMAL_TEXT | LIST id=kix.z3tzrjgk4xve level=0]
For ages 16–17, independent communication is a product permission requiring explicit acceptance by both athlete and guardian; otherwise communication remains supervised.

[P00079 | 8076:8303 | NORMAL_TEXT | LIST id=kix.z3tzrjgk4xve level=0]
Independent communication may cover eligible Scout messages, information-request responses, requested media/documents and recruiting follow-up, but it does not automatically constitute legal consent for every related data use.

[P00080 | 8303:8463 | NORMAL_TEXT | LIST id=kix.z3tzrjgk4xve level=0]
Private contact details, documents and other restricted information require separate sharing rules and access grants; profile visibility alone is insufficient.

[P00081 | 8463:8483 | HEADING_2]
Legal review needed

[P00082 | 8483:8591 | NORMAL_TEXT | LIST id=kix.1rklxmv8cpj3 level=0]
Permitted communication model for each age group, including whether guardians must receive or see messages.

[P00083 | 8591:8667 | NORMAL_TEXT | LIST id=kix.1rklxmv8cpj3 level=0]
Rules for sharing contact information or moving communication off-platform.

[P00084 | 8667:8753 | NORMAL_TEXT | LIST id=kix.1rklxmv8cpj3 level=0]
Required reporting, blocking, moderation, record-retention and escalation mechanisms.

[P00085 | 8753:8783 | HEADING_1]
Media and document safeguards

[P00086 | 8783:8956 | NORMAL_TEXT | LIST id=kix.uk7d2ilmwrmy level=0]
Original media, derivatives and documents are stored as private objects and delivered only through authorized, controlled access; permanent public file URLs are prohibited.

[P00087 | 8956:9134 | NORMAL_TEXT | LIST id=kix.uk7d2ilmwrmy level=0]
Uploaded video is automatically checked before becoming available. Flagged media is held for authorized manual review; automated checks do not make the final rejection decision.

[P00088 | 9134:9238 | NORMAL_TEXT | LIST id=kix.uk7d2ilmwrmy level=0]
Only media in a ready and permitted state can contribute to profile readiness or Scout-facing playback.

[P00089 | 9238:9376 | NORMAL_TEXT | LIST id=kix.uk7d2ilmwrmy level=0]
Athlete documents remain private and require separate access rules. PDF uploads undergo a server-side malware scan before becoming ready.

[P00090 | 9376:9510 | NORMAL_TEXT | LIST id=kix.uk7d2ilmwrmy level=0]
Deletion or replacement removes the item from user-facing access immediately; internal retention follows the legally approved policy.

[P00091 | 9510:9558 | HEADING_1]
Consent, notices and documents for legal review

[P00092 | 9558:9572 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Terms of Use.

[P00093 | 9572:9694 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Privacy Notice, including identity-verification provider involvement, cross-border processing, retention and user rights.

[P00094 | 9694:9753 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Guardian authority assertion and parental-consent wording.

[P00095 | 9753:9807 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Minor assent/acknowledgment wording where applicable.

[P00096 | 9807:9856 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Visibility and communication permission wording.

[P00097 | 9856:9925 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Scout restricted-access acknowledgment and affiliation declarations.

[P00098 | 9925:9959 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Pre-identity-verification notice.

[P00099 | 9959:10018 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Media and document upload, moderation and sharing notices.

[P00100 | 10018:10044 | HEADING_1]
Key questions for counsel

[P00101 | 10044:10163 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
Are the proposed age bands, management roles and visibility controls appropriate for the planned launch jurisdictions?

[P00102 | 10163:10237 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
Which safeguards are legally required, strongly recommended, or optional?

[P00103 | 10237:10363 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
Is adult identity verification plus guardian self-attestation sufficient? If not, what relationship verification is required?

[P00104 | 10363:10465 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
What consent and assent must be obtained, from whom, and for which processing or disclosure purposes?

[P00105 | 10465:10535 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
What athlete fields and media may verified Scouts access at each age?

[P00106 | 10535:10652 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
What restrictions should apply to messaging, contact sharing, downloads, saving, exporting and off-platform contact?

[P00107 | 10652:10769 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
Are Scout identity and affiliation checks sufficient, or are background/safeguarding checks required or recommended?

[P00108 | 10769:10860 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
What access, correction, deletion, withdrawal and parental-control workflows are required?

[P00109 | 10860:11027 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
What retention periods and deletion rules should apply to accounts, consent records, identity checks, affiliation evidence, media, documents, messages and audit logs?

[P00110 | 11027:11208 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
What additional requirements arise from the current MVP assumption of Scouts in the United States and athletes in Spain, including international access and cross-border processing?

[P00111 | 11208:11324 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
What changes are required to the Terms of Use, Privacy Notice and all consent/permission wording before production?

[P00112 | 11324:11362 | HEADING_1]
Items still to be linked or confirmed

[P00113 | 11362:11396 | NORMAL_TEXT | LIST id=kix.8vknkvddemvc level=0]
Draft Terms of Use: [insert link]

[P00114 | 11396:11432 | NORMAL_TEXT | LIST id=kix.8vknkvddemvc level=0]
Draft Privacy Notice: [insert link]

[P00115 | 11432:11486 | NORMAL_TEXT | LIST id=kix.8vknkvddemvc level=0]
Consent and permission wording/screens: [insert link]

[P00116 | 11486:11551 | NORMAL_TEXT | LIST id=kix.8vknkvddemvc level=0]
Messaging and reporting wireframes: [insert link when available]

[P00117 | 11551:11621 | NORMAL_TEXT | LIST id=kix.8vknkvddemvc level=0]
Initial launch jurisdictions and entity/controller details: [confirm]

[P00118 | 11621:11622 | NORMAL_TEXT]
⟦EMPTY PARAGRAPH⟧

