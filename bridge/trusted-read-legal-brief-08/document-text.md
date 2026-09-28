# UnicAthlete - Legal Review Brief

- Document ID: 1zO4bxDUrQUbwjlFjnSN6pgIcN9Sy3-tMufh7e_TfA7w
- Revision ID: ANLCKQl1t9l5VqMVfLvePHuBzSKL8kMrLvqdR-vJVc4taNDnM0wHMg8r_9l7Q9LGkEYmytLNCJxb3GRJbveiogfs3df-HDh0DOIa7I6JdsA
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

[P00020 | 1054:1055 | NORMAL_TEXT]
⟦EMPTY PARAGRAPH⟧

[P00021 | 1055:1085 | HEADING_1]
Athlete visibility and access

[P00022 | 1085:1167 | NORMAL_TEXT]
Athlete Sport Profile has Visibility switch (Private/Visible to eligible scouts).

[P00023 | 1167:1256 | NORMAL_TEXT]
Profiles are not public, anonymously accessible, or intended for search-engine indexing.

[P00024 | 1256:1383 | NORMAL_TEXT]
Visibility is never enabled automatically. All eligibility gates must pass and the authorized user must explicitly turn it on.

[P00025 | 1383:1415 | HEADING_1]
Age-based athlete account model

[P00026 | 1415:1587 | NORMAL_TEXT]
Age bands are calculated from the athlete’s date of birth. After account creation, date of birth is locked and may be corrected only through an authorized support process.

[P00027 | 1587:1688 | NORMAL_TEXT | LIST id=kix.2nvn7x2ggzc3 level=0]
Under 14 — Guardian-managed: the guardian creates and manages the profile; the athlete has no login.

[P00028 | 1688:2075 | NORMAL_TEXT | LIST id=kix.2nvn7x2ggzc3 level=0]
Ages 14–15 — Supervised: a guardian is required. The athlete or guardian may start the account. Before the athlete joins, the guardian manages the private profile. After the athlete joins, the athlete edits ordinary profile content while the guardian retains view access and controls Visibility and guardian-required communication permissions. External communication remains supervised.

[P00029 | 2075:2569 | NORMAL_TEXT | LIST id=kix.2nvn7x2ggzc3 level=0]
Ages 16–17 — Supervised by default: the same supervised rules apply unless independent communication is jointly accepted by the athlete and guardian after the athlete activates their login. In independent mode, routine guardian approval of communication with Scout is not required unless a separate legal or safety rule applies. The athlete may enable Visibility once all gates pass; either the athlete or guardian may make the profile private. The guardian remains connected with view access.

[P00030 | 2569:2952 | NORMAL_TEXT | LIST id=kix.2nvn7x2ggzc3 level=0]
Age 18+ — Athlete-managed: minor-based guardian access ends and the athlete becomes the sole profile manager. The profile becomes private at the transition. The athlete may manage it privately without identity verification, but must complete the applicable adult legal actions, email verification, identity verification and other eligibility requirements before enabling visibility.

[P00031 | 2952:3137 | NORMAL_TEXT]
Age transitions never automatically grant access, independence or visibility. If newly applicable requirements are incomplete, the affected feature moves to the safer restricted state.

[P00032 | 3137:3157 | HEADING_1]
Guardian safeguards

[P00033 | 3157:3267 | NORMAL_TEXT]
Before a minor athlete’s Sport Profile can be made visible to eligible scouts, the responsible guardian must:

[P00034 | 3267:3295 | NORMAL_TEXT | LIST id=kix.8vdujc3prvqi level=0]
Verify their account email.

[P00035 | 3295:3374 | NORMAL_TEXT | LIST id=kix.8vdujc3prvqi level=0]
Complete ID verification to confirm their identity and that they are an adult.

[P00036 | 3374:3495 | NORMAL_TEXT | LIST id=kix.8vdujc3prvqi level=0]
Declare that they are the athlete’s parent or authorized legal guardian. (No proof of relationship is collected, though)

[P00037 | 3495:3590 | NORMAL_TEXT | LIST id=kix.8vdujc3prvqi level=0]
Accept the applicable Terms, acknowledge the Privacy Notice, and provide any required consent.

[P00038 | 3590:3751 | NORMAL_TEXT]
Each action is recorded with its wording/version, actor and timestamp, including any later withdrawal. The MVP supports one active guardian per Athlete Profile.

[P00039 | 3751:3768 | HEADING_1]
Scout safeguards

[P00040 | 3768:3829 | NORMAL_TEXT]
Before a Scout can access athlete Sport Profiles, they must:

[P00041 | 3829:3857 | NORMAL_TEXT | LIST id=kix.8eb498v8i5q2 level=0]
Verify their account email.

[P00042 | 3857:3942 | NORMAL_TEXT | LIST id=kix.8eb498v8i5q2 level=0]
Complete identity verification to confirm their identity and that they are an adult.

[P00043 | 3942:4131 | NORMAL_TEXT | LIST id=kix.8eb498v8i5q2 level=0]
Provide affiliation details: organization name, type, country/branch, official website, professional title, relationship type, recruiting scope and organization work email where available.

[P00044 | 4131:4312 | NORMAL_TEXT | LIST id=kix.8eb498v8i5q2 level=0]
Provide an official corroboration route: an organization staff page, federation/league directory, or confirmation through an independently verified organization-controlled channel.

[P00045 | 4312:4473 | NORMAL_TEXT | LIST id=kix.8eb498v8i5q2 level=0]
Pass manual review. An authorized administrator must confirm the organization’s eligibility and the Scout’s current relationship, role and recruiting authority.

[P00046 | 4473:4603 | NORMAL_TEXT]
Until every gate passes, the Scout cannot search for, open, message, save, evaluate or request information from athlete profiles.

[P00047 | 4603:4794 | NORMAL_TEXT]
Confirmed affiliations are currently valid for 12 months and may be suspended or revoked. If any access requirement is lost, athlete access is removed immediately and the change is recorded.

[P00048 | 4794:4795 | NORMAL_TEXT]
⟦EMPTY PARAGRAPH⟧

[P00049 | 4795:4850 | HEADING_1]
Athlete information intended for scout-facing profiles

[P00050 | 4850:4911 | NORMAL_TEXT | LIST id=kix.69emqmq8uk8m level=0]
Name, city, country of residence, citizenship and languages;

[P00051 | 4911:4973 | NORMAL_TEXT | LIST id=kix.69emqmq8uk8m level=0]
Education(what exactly?) and recruiting timeline information;

[P00052 | 4973:5062 | NORMAL_TEXT | LIST id=kix.69emqmq8uk8m level=0]
Measurements (height/weight) and soccer details, including positions and preferred foot;

[P00053 | 5062:5130 | NORMAL_TEXT | LIST id=kix.69emqmq8uk8m level=0]
Current team context, playing history, statistics and achievements;

[P00054 | 5130:5181 | NORMAL_TEXT | LIST id=kix.69emqmq8uk8m level=0]
Recruiting availability and destination interests;

[P00055 | 5181:5285 | NORMAL_TEXT | LIST id=kix.69emqmq8uk8m level=0]
Profile photo and approved recruiting media, including evaluation video, skill clips and match footage;

[P00056 | 5285:5353 | NORMAL_TEXT]
Information which can be posted privately but scout can request it:

[P00057 | 5353:5435 | NORMAL_TEXT | LIST id=kix.69emqmq8uk8m level=0]
Coach contact details for reference, only couch-reference status is public status

[P00058 | 5435:5499 | NORMAL_TEXT | LIST id=kix.69emqmq8uk8m level=0]
Documents (give the list of exact documents types and subtypes)

[P00059 | 5499:5500 | NORMAL_TEXT]
⟦EMPTY PARAGRAPH⟧

[P00060 | 5500:5538 | HEADING_1]
Communication and information sharing

[P00061 | 5538:5611 | NORMAL_TEXT | LIST id=kix.z3tzrjgk4xve level=0]
Detailed messaging and off-platform contact flows are not yet finalized.

[P00062 | 5611:5781 | NORMAL_TEXT | LIST id=kix.z3tzrjgk4xve level=0]
For ages 16–17, independent communication is a product permission requiring explicit acceptance by both athlete and guardian; otherwise communication remains supervised.

[P00063 | 5781:6008 | NORMAL_TEXT | LIST id=kix.z3tzrjgk4xve level=0]
Independent communication may cover eligible Scout messages, information-request responses, requested media/documents and recruiting follow-up, but it does not automatically constitute legal consent for every related data use.

[P00064 | 6008:6168 | NORMAL_TEXT | LIST id=kix.z3tzrjgk4xve level=0]
Private contact details, documents and other restricted information require separate sharing rules and access grants; profile visibility alone is insufficient.

[P00065 | 6168:6188 | HEADING_2]
Legal review needed

[P00066 | 6188:6296 | NORMAL_TEXT | LIST id=kix.1rklxmv8cpj3 level=0]
Permitted communication model for each age group, including whether guardians must receive or see messages.

[P00067 | 6296:6372 | NORMAL_TEXT | LIST id=kix.1rklxmv8cpj3 level=0]
Rules for sharing contact information or moving communication off-platform.

[P00068 | 6372:6458 | NORMAL_TEXT | LIST id=kix.1rklxmv8cpj3 level=0]
Required reporting, blocking, moderation, record-retention and escalation mechanisms.

[P00069 | 6458:6488 | HEADING_1]
Media and document safeguards

[P00070 | 6488:6661 | NORMAL_TEXT | LIST id=kix.uk7d2ilmwrmy level=0]
Original media, derivatives and documents are stored as private objects and delivered only through authorized, controlled access; permanent public file URLs are prohibited.

[P00071 | 6661:6839 | NORMAL_TEXT | LIST id=kix.uk7d2ilmwrmy level=0]
Uploaded video is automatically checked before becoming available. Flagged media is held for authorized manual review; automated checks do not make the final rejection decision.

[P00072 | 6839:6943 | NORMAL_TEXT | LIST id=kix.uk7d2ilmwrmy level=0]
Only media in a ready and permitted state can contribute to profile readiness or Scout-facing playback.

[P00073 | 6943:7081 | NORMAL_TEXT | LIST id=kix.uk7d2ilmwrmy level=0]
Athlete documents remain private and require separate access rules. PDF uploads undergo a server-side malware scan before becoming ready.

[P00074 | 7081:7215 | NORMAL_TEXT | LIST id=kix.uk7d2ilmwrmy level=0]
Deletion or replacement removes the item from user-facing access immediately; internal retention follows the legally approved policy.

[P00075 | 7215:7263 | HEADING_1]
Consent, notices and documents for legal review

[P00076 | 7263:7277 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Terms of Use.

[P00077 | 7277:7399 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Privacy Notice, including identity-verification provider involvement, cross-border processing, retention and user rights.

[P00078 | 7399:7458 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Guardian authority assertion and parental-consent wording.

[P00079 | 7458:7512 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Minor assent/acknowledgment wording where applicable.

[P00080 | 7512:7561 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Visibility and communication permission wording.

[P00081 | 7561:7630 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Scout restricted-access acknowledgment and affiliation declarations.

[P00082 | 7630:7664 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Pre-identity-verification notice.

[P00083 | 7664:7723 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Media and document upload, moderation and sharing notices.

[P00084 | 7723:7749 | HEADING_1]
Key questions for counsel

[P00085 | 7749:7868 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
Are the proposed age bands, management roles and visibility controls appropriate for the planned launch jurisdictions?

[P00086 | 7868:7942 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
Which safeguards are legally required, strongly recommended, or optional?

[P00087 | 7942:8068 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
Is adult identity verification plus guardian self-attestation sufficient? If not, what relationship verification is required?

[P00088 | 8068:8170 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
What consent and assent must be obtained, from whom, and for which processing or disclosure purposes?

[P00089 | 8170:8240 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
What athlete fields and media may verified Scouts access at each age?

[P00090 | 8240:8357 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
What restrictions should apply to messaging, contact sharing, downloads, saving, exporting and off-platform contact?

[P00091 | 8357:8474 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
Are Scout identity and affiliation checks sufficient, or are background/safeguarding checks required or recommended?

[P00092 | 8474:8565 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
What access, correction, deletion, withdrawal and parental-control workflows are required?

[P00093 | 8565:8732 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
What retention periods and deletion rules should apply to accounts, consent records, identity checks, affiliation evidence, media, documents, messages and audit logs?

[P00094 | 8732:8913 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
What additional requirements arise from the current MVP assumption of Scouts in the United States and athletes in Spain, including international access and cross-border processing?

[P00095 | 8913:9029 | NORMAL_TEXT | LIST id=kix.scj4i8nfu9hy level=0]
What changes are required to the Terms of Use, Privacy Notice and all consent/permission wording before production?

[P00096 | 9029:9067 | HEADING_1]
Items still to be linked or confirmed

[P00097 | 9067:9101 | NORMAL_TEXT | LIST id=kix.8vknkvddemvc level=0]
Draft Terms of Use: [insert link]

[P00098 | 9101:9137 | NORMAL_TEXT | LIST id=kix.8vknkvddemvc level=0]
Draft Privacy Notice: [insert link]

[P00099 | 9137:9191 | NORMAL_TEXT | LIST id=kix.8vknkvddemvc level=0]
Consent and permission wording/screens: [insert link]

[P00100 | 9191:9256 | NORMAL_TEXT | LIST id=kix.8vknkvddemvc level=0]
Messaging and reporting wireframes: [insert link when available]

[P00101 | 9256:9326 | NORMAL_TEXT | LIST id=kix.8vknkvddemvc level=0]
Initial launch jurisdictions and entity/controller details: [confirm]

[P00102 | 9326:9327 | NORMAL_TEXT]
⟦EMPTY PARAGRAPH⟧

