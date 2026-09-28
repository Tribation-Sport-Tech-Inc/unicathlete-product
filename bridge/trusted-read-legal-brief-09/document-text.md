# UnicAthlete - Legal Review Brief

- Document ID: 1zO4bxDUrQUbwjlFjnSN6pgIcN9Sy3-tMufh7e_TfA7w
- Revision ID: ANLCKQm_s0K2Me1-2m1bp5GRSF-L67GjeBf3HYQ-MYLgA-C9cwT3mpIf6dDUSOKrc5jrqRjzetyhLpA0Cs_2p3R9i_FEz0LccoeaftB5j7A
- Selected tab: all
- Protected controls: 0
- Opaque controls: 0
- Authoritative dropdowns: 0

Protected-control annotations are preservation instructions. Do not insert their displayed placeholder text to recreate a native control.

## Tab 1 (t.0)

[P00001 | 1:564 | HEADING_1]
The current document is meant to outline the components of the product we have/planning to have to satisfy applicable legal requirements. We are currently building MVP (pre-launch stage). Our Athlete side users will be from Spain and Scout side users will be from the US. The company is based in Canada and Spain. Our goal for the first legal review is to make sure we meet minimal legal requirements for the first launch. We suggest we provide all the information about the platform and you will let us know what is sufficient, whats lacking, whats unnecessary.

[P00002 | 564:582 | HEADING_1]
Product overview 

[P00003 | 582:583 | NORMAL_TEXT]
⟦EMPTY PARAGRAPH⟧

[P00004 | 583:891 | NORMAL_TEXT]
UnicAthlete is a sports recruiting platform where athletes create sports portfolios and scouts search for and review athletes. The platform may include athletes as young as 8 years old. Because adult scouts may access information about minor athletes, minor safety and privacy are core product requirements.

[P00005 | 891:892 | NORMAL_TEXT]
⟦EMPTY PARAGRAPH⟧

[P00006 | 892:962 | NORMAL_TEXT]
Link to the platform (work in progress): [https://app.unicathlete.com/](https://app.unicathlete.com/)

[P00007 | 962:963 | NORMAL_TEXT]
⟦EMPTY PARAGRAPH⟧

[P00008 | 963:976 | NORMAL_TEXT]
Wireframes: 

[P00009 | 976:994 | NORMAL_TEXT]
[Platform Overview](https://tribation-sport-tech-inc.github.io/unicathlete-product/wireframes/index.html)

[P00010 | 994:1016 | NORMAL_TEXT]
[Athlete Side Overview](https://tribation-sport-tech-inc.github.io/unicathlete-product/wireframes/athlete/overview.html)

[P00011 | 1016:1036 | NORMAL_TEXT]
[Scout Side Overview](https://tribation-sport-tech-inc.github.io/unicathlete-product/wireframes/recruiter/overview.html)

[P00012 | 1036:1056 | NORMAL_TEXT]
[Create Account Flow](https://tribation-sport-tech-inc.github.io/unicathlete-product/wireframes/signup.html)

[P00013 | 1056:1057 | NORMAL_TEXT]
⟦EMPTY PARAGRAPH⟧

[P00014 | 1057:1073 | HEADING_1]
Users and roles

[P00015 | 1073:1095 | HEADING_2]
Athlete Profile users

[P00016 | 1095:1151 | NORMAL_TEXT | LIST id=kix.uk9izeo2kidy level=0]
Athlete: the person represented by the Athlete Profile.

[P00017 | 1151:1243 | NORMAL_TEXT | LIST id=kix.uk9izeo2kidy level=0]
Guardian: the adult user who manages or supervises a minor athlete’s profile when required.

[P00018 | 1243:1273 | HEADING_2]
Scout and administrator users

[P00019 | 1273:1349 | NORMAL_TEXT | LIST id=kix.cs7w1mjv6ohd level=0]
Scout: must be 18 or older and is the only user managing the Scout profile.

[P00020 | 1349:1510 | NORMAL_TEXT | LIST id=kix.cs7w1mjv6ohd level=0]
Administrator: a named, MFA-protected internal account with restricted permission to review Scout affiliations. Shared administrator credentials are prohibited.

[P00021 | 1510:1511 | NORMAL_TEXT]
⟦EMPTY PARAGRAPH⟧

[P00022 | 1511:1541 | HEADING_1]
Athlete visibility and access

[P00023 | 1541:1542 | NORMAL_TEXT]
⟦EMPTY PARAGRAPH⟧

[P00024 | 1542:1596 | NORMAL_TEXT]
Profiles are not intended for search-engine indexing.

[P00025 | 1596:1678 | NORMAL_TEXT]
Athlete Sport Profile has Visibility switch (Private/Visible to eligible scouts).

[P00026 | 1678:1805 | NORMAL_TEXT]
Visibility is never enabled automatically. All eligibility gates must pass and the authorized user must explicitly turn it on.

[P00027 | 1805:1837 | HEADING_1]
Age-based athlete account model

[P00028 | 1837:2013 | NORMAL_TEXT]
Age bands are calculated from the athlete’s date of birth. After account creation, the date of birth is locked and may be corrected only through an authorized support process.

[P00029 | 2013:2114 | NORMAL_TEXT | LIST id=kix.2nvn7x2ggzc3 level=0]
Under 14 — Guardian-managed: the guardian creates and manages the profile; the athlete has no login.

[P00030 | 2114:2482 | NORMAL_TEXT | LIST id=kix.2nvn7x2ggzc3 level=0]
Ages 14–15 — Supervised: a guardian is required. The athlete or guardian may start the account. Before the athlete joins, the guardian manages the private profile. After the athlete joins, the athlete edits ordinary profile content while the guardian retains view access and controls Visibility and reviews and gives permission for every scout communication instance.

[P00031 | 2482:2929 | NORMAL_TEXT | LIST id=kix.2nvn7x2ggzc3 level=0]
Ages 16–17 — Supervised by default: the same supervised rules apply unless Independent communication is jointly accepted by the athlete and guardian after the athlete activates their login. In independent mode, routine guardian approval of communication with Scout is not required. The athlete may enable Visibility once all gates pass; either the athlete or guardian may make the profile private. The guardian remains connected with view access.

[P00032 | 2929:3039 | NORMAL_TEXT | LIST id=kix.2nvn7x2ggzc3 level=0]
Age 18+ — Athlete-managed: minor-based guardian access ends and the athlete becomes the sole profile manager.

[P00033 | 3039:3040 | NORMAL_TEXT]
⟦EMPTY PARAGRAPH⟧

[P00034 | 3040:3225 | NORMAL_TEXT]
Age transitions never automatically grant access, independence or visibility. If newly applicable requirements are incomplete, the affected feature moves to the safer restricted state.

[P00035 | 3225:3245 | HEADING_1]
Guardian safeguards

[P00036 | 3245:3355 | NORMAL_TEXT]
Before a minor athlete’s Sport Profile can be made visible to eligible scouts, the responsible guardian must:

[P00037 | 3355:3383 | NORMAL_TEXT | LIST id=kix.8vdujc3prvqi level=0]
Verify their account email.

[P00038 | 3383:3462 | NORMAL_TEXT | LIST id=kix.8vdujc3prvqi level=0]
Complete ID verification to confirm their identity and that they are an adult.

[P00039 | 3462:3583 | NORMAL_TEXT | LIST id=kix.8vdujc3prvqi level=0]
Declare that they are the athlete’s parent or authorized legal guardian. (No proof of relationship is collected, though)

[P00040 | 3583:3678 | NORMAL_TEXT | LIST id=kix.8vdujc3prvqi level=0]
Accept the applicable Terms, acknowledge the Privacy Notice, and provide any required consent.

[P00041 | 3678:3839 | NORMAL_TEXT]
Each action is recorded with its wording/version, actor and timestamp, including any later withdrawal. The MVP supports one active guardian per Athlete Profile.

[P00042 | 3839:3856 | HEADING_1]
Scout safeguards

[P00043 | 3856:3917 | NORMAL_TEXT]
Before a Scout can access athlete Sport Profiles, they must:

[P00044 | 3917:3945 | NORMAL_TEXT | LIST id=kix.8eb498v8i5q2 level=0]
Verify their account email.

[P00045 | 3945:4030 | NORMAL_TEXT | LIST id=kix.8eb498v8i5q2 level=0]
Complete identity verification to confirm their identity and that they are an adult.

[P00046 | 4030:4219 | NORMAL_TEXT | LIST id=kix.8eb498v8i5q2 level=0]
Provide affiliation details: organization name, type, country/branch, official website, professional title, relationship type, recruiting scope and organization work email where available.

[P00047 | 4219:4400 | NORMAL_TEXT | LIST id=kix.8eb498v8i5q2 level=0]
Provide an official corroboration route: an organization staff page, federation/league directory, or confirmation through an independently verified organization-controlled channel.

[P00048 | 4400:4561 | NORMAL_TEXT | LIST id=kix.8eb498v8i5q2 level=0]
Pass manual review. An authorized administrator must confirm the organization’s eligibility and the Scout’s current relationship, role and recruiting authority.

[P00049 | 4561:4691 | NORMAL_TEXT]
Until every gate passes, the Scout cannot search for, open, message, save, evaluate or request information from athlete profiles.

[P00050 | 4691:4882 | NORMAL_TEXT]
Confirmed affiliations are currently valid for 12 months and may be suspended or revoked. If any access requirement is lost, athlete access is removed immediately and the change is recorded.

[P00051 | 4882:4883 | NORMAL_TEXT]
⟦EMPTY PARAGRAPH⟧

[P00052 | 4883:4938 | HEADING_1]
Athlete information intended for scout-facing profiles

[P00053 | 4938:5033 | NORMAL_TEXT]
When a Sport Profile is visible, eligible Scouts may see the following recruiting information:

[P00054 | 5033:5109 | NORMAL_TEXT | LIST id=kix.oqbv9yfcyjxp level=0]
Basic profile: name, city, country of residence, citizenship and languages.

[P00055 | 5109:5288 | NORMAL_TEXT | LIST id=kix.oqbv9yfcyjxp level=0]
Education and timeline: education level, school country, expected or completed graduation date, target college start term/year, recruiting availability and destination interests.

[P00056 | 5288:5418 | NORMAL_TEXT | LIST id=kix.oqbv9yfcyjxp level=0]
Soccer profile: height, weight, positions, preferred foot, current team and season, playing history, statistics and achievements.

[P00057 | 5418:5558 | NORMAL_TEXT | LIST id=kix.oqbv9yfcyjxp level=0]
Approved media: profile photo, Main Evaluation Video, Skill Clips and Extended Match Footage that are ready and permitted for Scout access.

[P00058 | 5558:5559 | NORMAL_TEXT]
⟦EMPTY PARAGRAPH⟧

[P00059 | 5559:5723 | NORMAL_TEXT]
The following information remains private even when the Sport Profile is visible. A Scout may receive it only through a separate request and approved access grant:

[P00060 | 5723:5835 | NORMAL_TEXT | LIST id=kix.bwuyv08bwem6 level=0]
Coach-reference contact details. Only the existence/status of a coach reference appears on the visible profile.

[P00061 | 5835:6141 | NORMAL_TEXT | LIST id=kix.bwuyv08bwem6 level=0]
Athlete documents: Academic Records (Transcript, Grade Report / Report Card, School Report); Graduation or Examination Credentials (Diploma / Proof of Graduation, Leaving Certificate, National Examination Results); and Test Score Reports (SAT, ACT, TOEFL, IELTS, Duolingo English Test, Cambridge English).

[P00062 | 6141:6189 | HEADING_1]
Consent, notices and documents for legal review

[P00063 | 6189:6272 | NORMAL_TEXT]
For the legal review we will also provide the following documents and information:

[P00064 | 6272:6286 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Terms of Use.

[P00065 | 6286:6408 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Privacy Notice, including identity-verification provider involvement, cross-border processing, retention and user rights.

[P00066 | 6408:6467 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Guardian authority assertion and parental-consent wording.

[P00067 | 6467:6521 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Minor assent/acknowledgment wording where applicable.

[P00068 | 6521:6570 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Visibility and communication permission wording.

[P00069 | 6570:6639 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Scout restricted-access acknowledgment and affiliation declarations.

[P00070 | 6639:6673 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Pre-identity-verification notice.

[P00071 | 6673:6732 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Media and document upload, moderation and sharing notices.

[P00072 | 6732:6774 | NORMAL_TEXT | LIST id=kix.4b00ngvlrkk2 level=0]
Data retention periods and deletion rules

[P00073 | 6774:6775 | NORMAL_TEXT]
⟦EMPTY PARAGRAPH⟧

[P00074 | 6775:6776 | NORMAL_TEXT]
⟦EMPTY PARAGRAPH⟧

[P00075 | 6776:6777 | NORMAL_TEXT]
⟦EMPTY PARAGRAPH⟧

[P00076 | 6777:6778 | NORMAL_TEXT]
⟦EMPTY PARAGRAPH⟧

[P00077 | 6778:6779 | NORMAL_TEXT]
⟦EMPTY PARAGRAPH⟧

