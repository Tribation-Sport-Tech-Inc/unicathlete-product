# UnicAthlete - Legal Review Brief

- Document ID: 1zO4bxDUrQUbwjlFjnSN6pgIcN9Sy3-tMufh7e_TfA7w
- Revision ID: ANLCKQlAONTM_7bttddSyBBMQUkgC1ROAgx4POBP73U4abKCrrLzVcAe0AW1uT43mQIzryZPUlMS2XkrWp6YPHf4FGA_MzCSoCC1prYEJ3c
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

[P00028 | 2855:2965 | NORMAL_TEXT]
Before a minor athlete’s Sport Profile can be made visible to eligible scouts, the responsible guardian must:

[P00029 | 2965:2993 | NORMAL_TEXT | LIST id=kix.8vdujc3prvqi level=0]
Verify their account email.

[P00030 | 2993:3072 | NORMAL_TEXT | LIST id=kix.8vdujc3prvqi level=0]
Complete ID verification to confirm their identity and that they are an adult.

[P00031 | 3072:3193 | NORMAL_TEXT | LIST id=kix.8vdujc3prvqi level=0]
Declare that they are the athlete’s parent or authorized legal guardian. (No proof of relationship is collected, though)

[P00032 | 3193:3288 | NORMAL_TEXT | LIST id=kix.8vdujc3prvqi level=0]
Accept the applicable Terms, acknowledge the Privacy Notice, and provide any required consent.

[P00033 | 3288:3449 | NORMAL_TEXT]
Each action is recorded with its wording/version, actor and timestamp, including any later withdrawal. The MVP supports one active guardian per Athlete Profile.

[P00034 | 3449:3466 | HEADING_1]
Scout safeguards

[P00035 | 3466:3526 | NORMAL_TEXT]
Before Scout can access athletes’ Sport Profiles they must:

[P00036 | 3526:3561 | NORMAL_TEXT | LIST id=kix.vce0pdohdos8 level=0]
Verify the account email (private)

[P00037 | 3561:3586 | NORMAL_TEXT | LIST id=kix.vce0pdohdos8 level=0]
Complete ID verification

[P00038 | 3586:3661 | NORMAL_TEXT | LIST id=kix.vce0pdohdos8 level=0]
Must have a current, verifiable relationship with an eligible organization

[P00039 | 3661:3756 | NORMAL_TEXT]
Scout provides the following information for Admin to manually verify/confirm the affiliation:

[P00040 | 3756:3774 | NORMAL_TEXT | LIST id=kix.essvca3dvstv level=0]
Organization name

[P00041 | 3774:3792 | NORMAL_TEXT | LIST id=kix.essvca3dvstv level=0]
Organization type

[P00042 | 3792:3807 | NORMAL_TEXT | LIST id=kix.essvca3dvstv level=0]
Country/branch

[P00043 | 3807:3824 | NORMAL_TEXT | LIST id=kix.essvca3dvstv level=0]
Official website

[P00044 | 3824:3843 | NORMAL_TEXT | LIST id=kix.essvca3dvstv level=0]
Professional title

[P00045 | 3843:3881 | NORMAL_TEXT | LIST id=kix.essvca3dvstv level=0]
Relationship type (contract/employee)

[P00046 | 3881:3940 | NORMAL_TEXT | LIST id=kix.essvca3dvstv level=0]
Organization work email where available should be verified

[P00047 | 3940:4127 | NORMAL_TEXT | LIST id=kix.essvca3dvstv level=0]
Corroboration route one of three options:  an official staff page, official federation/league directory, or confirmation through an independently verified organization-controlled channel

[P00048 | 4127:4128 | NORMAL_TEXT]
⟦EMPTY PARAGRAPH⟧

[P00049 | 4128:4327 | NORMAL_TEXT]
Affiliation is subject to expiry/reverification (currently 12 months) and may be suspended or revoked. Losing an access requirement removes athlete access immediately and preserves an audit history.

[P00050 | 4327:4357 | HEADING_1]
Athlete visibility and access

[P00051 | 4357:4374 | NORMAL_TEXT]
Athlete Sport Pr

[P00052 | 4374:4532 | NORMAL_TEXT | LIST id=kix.yooecx2so2m6 level=0]
The only planned choices are Private and Visible to eligible scouts. Profiles are not public, anonymously accessible, or intended for search-engine indexing.

[P00053 | 4532:4659 | NORMAL_TEXT | LIST id=kix.yooecx2so2m6 level=0]
Visibility is never enabled automatically. All eligibility gates must pass and the authorized user must explicitly turn it on.

[P00054 | 4659:4734 | NORMAL_TEXT | LIST id=kix.yooecx2so2m6 level=0]
Under 14 and unjoined minors aged 14–17: the guardian controls visibility.

[P00055 | 4734:4874 | NORMAL_TEXT | LIST id=kix.yooecx2so2m6 level=0]
Joined athletes aged 14–15 and joined supervised athletes aged 16–17: the athlete can see the status, but the guardian controls visibility.

[P00056 | 4874:5027 | NORMAL_TEXT | LIST id=kix.yooecx2so2m6 level=0]
Joined athletes aged 16–17 in accepted independent mode: the athlete may enable visibility; either the athlete or guardian may make the profile private.

[P00057 | 5027:5068 | NORMAL_TEXT | LIST id=kix.yooecx2so2m6 level=0]
Adults: the athlete controls visibility.

[P00058 | 5068:5295 | NORMAL_TEXT | LIST id=kix.yooecx2so2m6 level=0]
If consent/permission, verification, Recruiter-Ready status, account eligibility, or a safety condition later fails, the profile becomes private immediately. Visibility does not resume automatically when the issue is resolved.

[P00059 | 5295:5350 | HEADING_1]
Athlete information intended for scout-facing profiles

[P00060 | 5350:5437 | NORMAL_TEXT]
Subject to field-level legal review, the planned recruiter-facing profile may include:

[P00061 | 5437:5547 | NORMAL_TEXT | LIST id=kix.69emqmq8uk8m level=0]
identity and basic location information, such as name, city, country of residence, citizenship and languages;

[P00062 | 5547:5594 | NORMAL_TEXT | LIST id=kix.69emqmq8uk8m level=0]
education and recruiting timeline information;

[P00063 | 5594:5667 | NORMAL_TEXT | LIST id=kix.69emqmq8uk8m level=0]
measurements and soccer details, including positions and preferred foot;

[P00064 | 5667:5735 | NORMAL_TEXT | LIST id=kix.69emqmq8uk8m level=0]
current team context, playing history, statistics and achievements;

[P00065 | 5735:5786 | NORMAL_TEXT | LIST id=kix.69emqmq8uk8m level=0]
recruiting availability and destination interests;

[P00066 | 5786:5894 | NORMAL_TEXT | LIST id=kix.69emqmq8uk8m level=0]
profile photo and approved recruiting media, including evaluation video, skill clips and match footage; and

[P00067 | 5894:5960 | NORMAL_TEXT | LIST id=kix.69emqmq8uk8m level=0]
coach-reference status, without exposing private contact details.

[P00068 | 5960:6024 | NORMAL_TEXT]
Information excluded from ordinary profile visibility includes:

[P00069 | 6024:6086 | NORMAL_TEXT | LIST id=kix.d5dzkyvyzrct level=0]
direct contact information and private coach contact details;

[P00070 | 6086:6137 | NORMAL_TEXT | LIST id=kix.d5dzkyvyzrct level=0]
guardian, legal, consent and verification records;

[P00071 | 6137:6201 | NORMAL_TEXT | LIST id=kix.d5dzkyvyzrct level=0]
internal safety, moderation, affiliation and audit information;

[P00072 | 6201:6278 | NORMAL_TEXT | LIST id=kix.d5dzkyvyzrct level=0]
identity documents, biometric information and raw verification evidence; and

[P00073 | 6278:6382 | NORMAL_TEXT | LIST id=kix.d5dzkyvyzrct level=0]
athlete-uploaded academic documents. Profile visibility alone never grants access to private documents.

[P00074 | 6382:6643 | NORMAL_TEXT]
Open point for legal review: confirm the exact field-level projection, including whether a minor’s exact date of birth, school, precise location, team information, photos, videos, statistics and citizenship should be shown, generalized, age-gated, or withheld.

[P00075 | 6643:6681 | HEADING_1]
Communication and information sharing

[P00076 | 6681:6754 | NORMAL_TEXT | LIST id=kix.z3tzrjgk4xve level=0]
Detailed messaging and off-platform contact flows are not yet finalized.

[P00077 | 6754:6924 | NORMAL_TEXT | LIST id=kix.z3tzrjgk4xve level=0]
For ages 16–17, independent communication is a product permission requiring explicit acceptance by both athlete and guardian; otherwise communication remains supervised.

[P00078 | 6924:7151 | NORMAL_TEXT | LIST id=kix.z3tzrjgk4xve level=0]
Independent communication may cover eligible Scout messages, information-request responses, requested media/documents and recruiting follow-up, but it does not automatically constitute legal consent for every related data use.

[P00079 | 7151:7311 | NORMAL_TEXT | LIST id=kix.z3tzrjgk4xve level=0]
Private contact details, documents and other restricted information require separate sharing rules and access grants; profile visibility alone is insufficient.

[P00080 | 7311:7331 | HEADING_2]
Legal review needed

[P00081 | 7331:7439 | NORMAL_TEXT | LIST id=kix.1rklxmv8cpj3 level=0]
Permitted communication model for each age group, including whether guardians must receive or see messages.

[P00082 | 7439:7515 | NORMAL_TEXT | LIST id=kix.1rklxmv8cpj3 level=0]
Rules for sharing contact information or moving communication off-platform.

[P00083 | 7515:7601 | NORMAL_TEXT | LIST id=kix.1rklxmv8cpj3 level=0]
Required reporting, blocking, moderation, record-retention and escalation mechanisms.

[P00084 | 7601:7631 | HEADING_1]
Media and document safeguards

[P00085 | 7631:7804 | NORMAL_TEXT | LIST id=kix.uk7d2ilmwrmy level=0]
Original media, derivatives and documents are stored as private objects and delivered only through authorized, controlled access; permanent public file URLs are prohibited.

[P00086 | 7804:7982 | NORMAL_TEXT | LIST id=kix.uk7d2ilmwrmy level=0]
Uploaded video is automatically checked before becoming available. Flagged media is held for authorized manual review; automated checks do not make the final rejection decision.

[P00087 | 7982:8086 | NORMAL_TEXT | LIST id=kix.uk7d2ilmwrmy level=0]
Only media in a ready and permitted state can contribute to profile readiness or Scout-facing playback.

[P00088 | 8086:8224 | NORMAL_TEXT | LIST id=kix.uk7d2ilmwrmy level=0]
Athlete documents remain private and require separate access rules. PDF uploads undergo a server-side malware scan before becoming ready.

[P00089 | 8224:8358 | NORMAL_TEXT | LIST id=kix.uk7d2ilmwrmy level=0]
Deletion or replacement removes the item from user-facing access immediately; internal retention follows the legally approved policy.

[P00090 | 8358:8406 | HEADING_1]
Consent, notices and documents for legal review

[P00091 | 8406:8420 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Terms of Use.

[P00092 | 8420:8542 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Privacy Notice, including identity-verification provider involvement, cross-border processing, retention and user rights.

[P00093 | 8542:8601 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Guardian authority assertion and parental-consent wording.

[P00094 | 8601:8655 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Minor assent/acknowledgment wording where applicable.

[P00095 | 8655:8704 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Visibility and communication permission wording.

[P00096 | 8704:8773 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Scout restricted-access acknowledgment and affiliation declarations.

[P00097 | 8773:8807 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Pre-identity-verification notice.

[P00098 | 8807:8866 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Media and document upload, moderation and sharing notices.

[P00099 | 8866:8892 | HEADING_1]
Key questions for counsel

[P00100 | 8892:9011 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
Are the proposed age bands, management roles and visibility controls appropriate for the planned launch jurisdictions?

[P00101 | 9011:9085 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
Which safeguards are legally required, strongly recommended, or optional?

[P00102 | 9085:9211 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
Is adult identity verification plus guardian self-attestation sufficient? If not, what relationship verification is required?

[P00103 | 9211:9313 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
What consent and assent must be obtained, from whom, and for which processing or disclosure purposes?

[P00104 | 9313:9383 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
What athlete fields and media may verified Scouts access at each age?

[P00105 | 9383:9500 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
What restrictions should apply to messaging, contact sharing, downloads, saving, exporting and off-platform contact?

[P00106 | 9500:9617 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
Are Scout identity and affiliation checks sufficient, or are background/safeguarding checks required or recommended?

[P00107 | 9617:9708 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
What access, correction, deletion, withdrawal and parental-control workflows are required?

[P00108 | 9708:9875 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
What retention periods and deletion rules should apply to accounts, consent records, identity checks, affiliation evidence, media, documents, messages and audit logs?

[P00109 | 9875:10056 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
What additional requirements arise from the current MVP assumption of Scouts in the United States and athletes in Spain, including international access and cross-border processing?

[P00110 | 10056:10172 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
What changes are required to the Terms of Use, Privacy Notice and all consent/permission wording before production?

[P00111 | 10172:10210 | HEADING_1]
Items still to be linked or confirmed

[P00112 | 10210:10244 | NORMAL_TEXT | LIST id=kix.8vknkvddemvc level=0]
Draft Terms of Use: [insert link]

[P00113 | 10244:10280 | NORMAL_TEXT | LIST id=kix.8vknkvddemvc level=0]
Draft Privacy Notice: [insert link]

[P00114 | 10280:10334 | NORMAL_TEXT | LIST id=kix.8vknkvddemvc level=0]
Consent and permission wording/screens: [insert link]

[P00115 | 10334:10399 | NORMAL_TEXT | LIST id=kix.8vknkvddemvc level=0]
Messaging and reporting wireframes: [insert link when available]

[P00116 | 10399:10469 | NORMAL_TEXT | LIST id=kix.8vknkvddemvc level=0]
Initial launch jurisdictions and entity/controller details: [confirm]

[P00117 | 10469:10470 | NORMAL_TEXT]
⟦EMPTY PARAGRAPH⟧

