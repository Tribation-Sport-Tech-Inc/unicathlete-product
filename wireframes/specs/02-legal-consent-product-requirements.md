# Legal and Consent — Product Requirements

## Purpose

This document defines non-obvious legal-data distinctions the product must preserve.

Before production, qualified review must determine the applicable laws, legal basis, required wording, age/capacity rules, verification standard, retention rules, and consequences of withdrawal for each launch jurisdiction.

## Distinctions the Product Must Preserve

- **Terms agreement:** records that a person acted on the Terms for their account. For a minor, the required form of assent and guardian involvement remains subject to legal review.
- **Privacy Notice presentation/acknowledgment:** records which notice was shown. It is not blanket consent and does not replace consent where consent is the applicable legal basis.
- **Purpose-specific consent:** applies only when the approved legal basis requires consent for a stated collection, use, or disclosure. It must not authorize unrelated future features.
- **Product permission:** controls product behavior, such as supervised or independent communication. It is not automatically legal consent for every related processing activity.
- **Guardian authority:** may be asserted or verified. A checkbox assertion does not prove identity, parental authority, or legal guardianship.
- **Verification:** email ownership, identity/adult status, age, guardian relationship, Scout identity, and Scout organization-affiliation confirmation are separate results.
- **Verifiable parental consent:** where legally required, it is a specific process and must not be inferred from an ordinary checkbox, verified email, or adult-ID result alone.

## Evidence the Product Must Preserve

For every agreement, acknowledgment, consent, or product-permission decision, the product must be able to identify:

- who acted and in what role or capacity;
- the affected account/profile and other person, when applicable;
- the exact document, notice, or purpose and its version;
- the language/locale presented;
- the action taken and timestamp;
- the age band and jurisdictional rule applied at that time, when relevant;
- collection method and optional provider/result reference;
- current status and history.

Updated wording creates a new identifiable version. Historical records must continue to identify what was originally presented. Product/legal review determines whether a new version requires renewed action.

The model must support granted, declined, withdrawn, expired, replaced, and renewed decisions without deleting history. It must not collapse withdrawal, relationship removal, account deletion, and verification expiry into one status.

## Consent-Presentation Constraints

- Required information must be understandable and adapted to the intended age group.
- Each purpose requiring consent must be sufficiently specific and separable from unrelated purposes.
- Required account actions must remain distinguishable from optional choices.
- Where withdrawal is available, the person must be able to understand how to exercise it and the resulting product consequences once those consequences are legally approved.
- Consent does not justify collecting information that is unnecessary for the stated purpose.

## Slice 1 Records

| Path | Required records |
|---|---|
| Under-14 guardian | Guardian Terms action, Privacy Notice presentation/acknowledgment, authority assertion, profile creation/management decision |
| Athlete aged 14–17 starts | Athlete Terms action and Privacy Notice presentation/acknowledgment; guardian relationship pending |
| Guardian starts for athlete aged 14–17 | Guardian Terms action, Privacy Notice presentation/acknowledgment, authority assertion |
| Invited athlete aged 14–17 | Athlete Terms action and Privacy Notice presentation/acknowledgment when activating their login |
| Athlete aged 16–17 requests independent communication | Starter request plus invited person's explicit acceptance or supervised fallback |
| Adult athlete | Adult Terms action, Privacy Notice presentation/acknowledgment, self-managed profile decision |
| Scout | Scout Terms action, Privacy Notice presentation/acknowledgment, restricted-access acknowledgment |

The 16–17 communication-mode record is a product permission. Legal review may require the related messaging, media/document sharing, or other data uses to be explained or consented to separately before production.

Apart from the defined communication-mode decision, Slice 1 does not request permission for discovery, published visibility, evaluations, international scout access, or other recruiting-data uses.

Slice 1 is an internal development milestone. Its placeholder notices, checkboxes, and authority assertions must not be represented as production-ready legal content or as completed verifiable parental consent.

## Future-Safety Rules

- Do not hard-code one global legal rule; requirements may vary by jurisdiction, age/capacity, account type, role, information sensitivity, and processing purpose.
- Age transitions must not silently remove guardian access, grant permissions, or convert prior decisions into new consent.
- New collection, use, disclosure, third-party access, or materially changed purpose requires Product/privacy review.
- Cross-border processing and international access require jurisdiction-specific review before activation.
- Identity documents, biometrics, health information, and other sensitive information require separate necessity, notice, consent, security, and retention review before collection.
- The product must be able to support applicable access, correction, deletion, withdrawal, and parental-control requests; the actual workflows are defined later.
- Approved retention and deletion rules are required before production.
