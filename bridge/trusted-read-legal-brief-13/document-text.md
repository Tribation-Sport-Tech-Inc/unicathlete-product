# UnicAthlete - Legal Review Brief

- Document ID: 1zO4bxDUrQUbwjlFjnSN6pgIcN9Sy3-tMufh7e_TfA7w
- Revision ID: ANLCKQlVdhtwePN7cT-Mx9So2ZWk6MIDSt7oUldlhlnjPD7n5Li_niHZDodVBkcL3rb6c-FPtYnMles_Rakp6AcDIAmfMbvC6eRs_LHOJHU
- Selected tab: all
- Protected controls: 0
- Opaque controls: 0
- Authoritative dropdowns: 0

Protected-control annotations are preservation instructions. Do not insert their displayed placeholder text to recreate a native control.

## Tab 1 (t.0)

[P00001 | 1:26 | HEADING_1]
Purpose of this document

[P00002 | 26:389 | NORMAL_TEXT]
This document summarizes the safeguards currently planned for the UnicAthlete MVP. The company operates from Canada and Spain; the initial athlete market is Spain, and Scouts will be based in the United States. We are requesting legal review to identify which measures are required for launch, which are recommended, and which are unnecessary or may be deferred.

[P00003 | 389:407 | HEADING_1]
Product overview 

[P00004 | 407:408 | NORMAL_TEXT]
⟦EMPTY PARAGRAPH⟧

[P00005 | 408:716 | NORMAL_TEXT]
UnicAthlete is a sports recruiting platform where athletes create sports portfolios and Scouts search for and review athletes. The platform may include athletes as young as 8 years old. Because adult Scouts may access information about minor athletes, minor safety and privacy are core product requirements.

[P00006 | 716:717 | NORMAL_TEXT]
⟦EMPTY PARAGRAPH⟧

[P00007 | 717:787 | NORMAL_TEXT]
Link to the platform (work in progress): [https://app.unicathlete.com/](https://app.unicathlete.com/)

[P00008 | 787:788 | NORMAL_TEXT]
⟦EMPTY PARAGRAPH⟧

[P00009 | 788:801 | NORMAL_TEXT]
Wireframes: 

[P00010 | 801:819 | NORMAL_TEXT]
[Platform Overview](https://tribation-sport-tech-inc.github.io/unicathlete-product/wireframes/index.html)

[P00011 | 819:841 | NORMAL_TEXT]
[Athlete Side Overview](https://tribation-sport-tech-inc.github.io/unicathlete-product/wireframes/athlete/overview.html)

[P00012 | 841:861 | NORMAL_TEXT]
[Scout Side Overview](https://tribation-sport-tech-inc.github.io/unicathlete-product/wireframes/recruiter/overview.html)

[P00013 | 861:881 | NORMAL_TEXT]
[Create Account Flow](https://tribation-sport-tech-inc.github.io/unicathlete-product/wireframes/signup.html)

[P00014 | 881:882 | NORMAL_TEXT]
⟦EMPTY PARAGRAPH⟧

[P00015 | 882:898 | HEADING_1]
Users and roles

[P00016 | 898:920 | HEADING_2]
Athlete Profile users

[P00017 | 920:976 | NORMAL_TEXT | LIST id=kix.uk9izeo2kidy level=0]
Athlete: the person represented by the Athlete Profile.

[P00018 | 976:1068 | NORMAL_TEXT | LIST id=kix.uk9izeo2kidy level=0]
Guardian: the adult user who manages or supervises a minor athlete’s profile when required.

[P00019 | 1068:1098 | HEADING_2]
Scout and administrator users

[P00020 | 1098:1174 | NORMAL_TEXT | LIST id=kix.cs7w1mjv6ohd level=0]
Scout: must be 18 or older and is the only user managing the Scout profile.

[P00021 | 1174:1335 | NORMAL_TEXT | LIST id=kix.cs7w1mjv6ohd level=0]
Administrator: a named, MFA-protected internal account with restricted permission to review Scout affiliations. Shared administrator credentials are prohibited.

[P00022 | 1335:1336 | NORMAL_TEXT]
⟦EMPTY PARAGRAPH⟧

[P00023 | 1336:1366 | HEADING_1]
Athlete visibility and access

[P00024 | 1366:1367 | NORMAL_TEXT]
⟦EMPTY PARAGRAPH⟧

[P00025 | 1367:1421 | NORMAL_TEXT]
Profiles are not intended for search-engine indexing.

[P00026 | 1421:1513 | NORMAL_TEXT]
Each Athlete Sport Profile has a visibility setting: Private or Visible to eligible Scouts.

[P00027 | 1513:1640 | NORMAL_TEXT]
Visibility is never enabled automatically. All eligibility gates must pass and the authorized user must explicitly turn it on.

[P00028 | 1640:1672 | HEADING_1]
Age-based athlete account model

[P00029 | 1672:1848 | NORMAL_TEXT]
Age bands are calculated from the athlete’s date of birth. After account creation, the date of birth is locked and may be corrected only through an authorized support process.

[P00030 | 1848:1949 | NORMAL_TEXT | LIST id=kix.2nvn7x2ggzc3 level=0]
Under 14 — Guardian-managed: the Guardian creates and manages the profile; the athlete has no login.

[P00031 | 1949:2434 | NORMAL_TEXT | LIST id=kix.2nvn7x2ggzc3 level=0]
Ages 14–15 — Supervised: a Guardian is required. The athlete or Guardian may start the account. Before the athlete joins, the Guardian manages the private profile. After the athlete joins, the athlete edits ordinary profile content while the Guardian retains view access and controls visibility. A Guardian must approve each new Scout conversation and each request to share private information or documents. The Guardian can view the communication and withdraw permission at any time.

[P00032 | 2434:2881 | NORMAL_TEXT | LIST id=kix.2nvn7x2ggzc3 level=0]
Ages 16–17 — Supervised by default: the same supervised rules apply unless independent communication is jointly accepted by the athlete and Guardian after the athlete activates their login. In independent mode, routine Guardian approval of communication with Scout is not required. The athlete may enable visibility once all gates pass; either the athlete or Guardian may make the profile private. The Guardian remains connected with view access.

[P00033 | 2881:2991 | NORMAL_TEXT | LIST id=kix.2nvn7x2ggzc3 level=0]
Age 18+ — Athlete-managed: minor-based Guardian access ends and the athlete becomes the sole profile manager.

[P00034 | 2991:2992 | NORMAL_TEXT]
⟦EMPTY PARAGRAPH⟧

[P00035 | 2992:3177 | NORMAL_TEXT]
Age transitions never automatically grant access, independence or visibility. If newly applicable requirements are incomplete, the affected feature moves to the safer restricted state.

[P00036 | 3177:3197 | HEADING_1]
Guardian safeguards

[P00037 | 3197:3307 | NORMAL_TEXT]
Before a minor athlete’s Sport Profile can be made visible to eligible Scouts, the responsible Guardian must:

[P00038 | 3307:3335 | NORMAL_TEXT | LIST id=kix.8vdujc3prvqi level=0]
Verify their account email.

[P00039 | 3335:3414 | NORMAL_TEXT | LIST id=kix.8vdujc3prvqi level=0]
Complete ID verification to confirm their identity and that they are an adult.

[P00040 | 3414:3588 | NORMAL_TEXT | LIST id=kix.8vdujc3prvqi level=0]
Declare that they are the athlete’s parent or authorized legal Guardian. The Guardian relationship is self-declared and is not independently verified under the current plan.

[P00041 | 3588:3690 | NORMAL_TEXT | LIST id=kix.8vdujc3prvqi level=0]
Accept the applicable Terms of Use, acknowledge the Privacy Notice, and provide any required consent.

[P00042 | 3690:3851 | NORMAL_TEXT]
Each action is recorded with its wording/version, actor and timestamp, including any later withdrawal. The MVP supports one active Guardian per Athlete Profile.

[P00043 | 3851:3868 | HEADING_1]
Scout safeguards

[P00044 | 3868:3929 | NORMAL_TEXT]
Before a Scout can access athlete Sport Profiles, they must:

[P00045 | 3929:3957 | NORMAL_TEXT | LIST id=kix.8eb498v8i5q2 level=0]
Verify their account email.

[P00046 | 3957:4036 | NORMAL_TEXT | LIST id=kix.8eb498v8i5q2 level=0]
Complete ID verification to confirm their identity and that they are an adult.

[P00047 | 4036:4225 | NORMAL_TEXT | LIST id=kix.8eb498v8i5q2 level=0]
Provide affiliation details: organization name, type, country/branch, official website, professional title, relationship type, recruiting scope and organization work email where available.

[P00048 | 4225:4406 | NORMAL_TEXT | LIST id=kix.8eb498v8i5q2 level=0]
Provide an official corroboration route: an organization staff page, federation/league directory, or confirmation through an independently verified organization-controlled channel.

[P00049 | 4406:4567 | NORMAL_TEXT | LIST id=kix.8eb498v8i5q2 level=0]
Pass manual review. An authorized administrator must confirm the organization’s eligibility and the Scout’s current relationship, role and recruiting authority.

[P00050 | 4567:4697 | NORMAL_TEXT]
Until every gate passes, the Scout cannot search for, open, message, save, evaluate or request information from athlete profiles.

[P00051 | 4697:4888 | NORMAL_TEXT]
Confirmed affiliations are currently valid for 12 months and may be suspended or revoked. If any access requirement is lost, athlete access is removed immediately and the change is recorded.

[P00052 | 4888:4889 | NORMAL_TEXT]
⟦EMPTY PARAGRAPH⟧

[P00053 | 4889:4944 | HEADING_1]
Athlete information intended for Scout-facing profiles

[P00054 | 4944:5039 | NORMAL_TEXT]
When a Sport Profile is visible, eligible Scouts may see the following recruiting information:

[P00055 | 5039:5115 | NORMAL_TEXT | LIST id=kix.oqbv9yfcyjxp level=0]
Basic profile: name, city, country of residence, citizenship and languages.

[P00056 | 5115:5294 | NORMAL_TEXT | LIST id=kix.oqbv9yfcyjxp level=0]
Education and timeline: education level, school country, expected or completed graduation date, target college start term/year, recruiting availability and destination interests.

[P00057 | 5294:5424 | NORMAL_TEXT | LIST id=kix.oqbv9yfcyjxp level=0]
Soccer profile: height, weight, positions, preferred foot, current team and season, playing history, statistics and achievements.

[P00058 | 5424:5564 | NORMAL_TEXT | LIST id=kix.oqbv9yfcyjxp level=0]
Approved media: profile photo, Main Evaluation Video, Skill Clips and Extended Match Footage that are ready and permitted for Scout access.

[P00059 | 5564:5565 | NORMAL_TEXT]
⟦EMPTY PARAGRAPH⟧

[P00060 | 5565:5729 | NORMAL_TEXT]
The following information remains private even when the Sport Profile is visible. A Scout may receive it only through a separate request and approved access grant:

[P00061 | 5729:5841 | NORMAL_TEXT | LIST id=kix.bwuyv08bwem6 level=0]
Coach-reference contact details. Only the existence/status of a coach reference appears on the visible profile.

[P00062 | 5841:6147 | NORMAL_TEXT | LIST id=kix.bwuyv08bwem6 level=0]
Athlete documents: Academic Records (Transcript, Grade Report / Report Card, School Report); Graduation or Examination Credentials (Diploma / Proof of Graduation, Leaving Certificate, National Examination Results); and Test Score Reports (SAT, ACT, TOEFL, IELTS, Duolingo English Test, Cambridge English).

[P00063 | 6147:6195 | HEADING_1]
Consent, notices and documents for legal review

[P00064 | 6195:6278 | NORMAL_TEXT]
For the legal review we will also provide the following documents and information:

[P00065 | 6278:6292 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Terms of Use.

[P00066 | 6292:6414 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Privacy Notice, including identity-verification provider involvement, cross-border processing, retention and user rights.

[P00067 | 6414:6473 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Guardian authority assertion and parental-consent wording.

[P00068 | 6473:6527 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Minor assent/acknowledgment wording where applicable.

[P00069 | 6527:6576 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Visibility and communication permission wording.

[P00070 | 6576:6645 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Scout restricted-access acknowledgment and affiliation declarations.

[P00071 | 6645:6679 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Pre-identity-verification notice.

[P00072 | 6679:6738 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Media and document upload, moderation and sharing notices.

[P00073 | 6738:6780 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Data retention periods and deletion rules

[P00074 | 6780:6781 | NORMAL_TEXT]
⟦EMPTY PARAGRAPH⟧

[P00075 | 6781:6782 | NORMAL_TEXT]
⟦EMPTY PARAGRAPH⟧

[P00076 | 6782:6783 | NORMAL_TEXT]
⟦EMPTY PARAGRAPH⟧

[P00077 | 6783:6784 | NORMAL_TEXT]
⟦EMPTY PARAGRAPH⟧

[P00078 | 6784:6785 | NORMAL_TEXT]
⟦EMPTY PARAGRAPH⟧

