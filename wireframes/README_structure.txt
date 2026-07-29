UnicAthlete prototype structure

index.html
  Platform architecture / global entry point.

signup.html
  Shared signup flow map. Shows profile-type selection, athlete guardian/age branch, and professional scout branch.

specs/
  Markdown product specifications for implementation rules behind the wireframes.
  - 01-mvp-slice-1-product-requirements.md: concise Slice 1 product requirements and acceptance criteria; source of truth for development.
  - 02-legal-consent-product-requirements.md: product capabilities needed for evolving legal documents and consent; implementation owned by the Lead Developer.
  - 03-athlete-sport-profile-completion-product-requirements.md: rules, weights, exclusions, and UI requirements for per-Sport-Profile completion.
  - archive/age-based-athlete-accounts.md: background product exploration; not part of the Slice 1 handoff.
  - archive/athlete-account-flow-schema.md: background product exploration; not part of the Slice 1 handoff.

recruiter/
  Recruiter-side product experience and wireframes.

athlete/
  Athlete-side product experience and wireframes.
  - onboarding.html: guided setup for the first private AthleteSportProfile after account creation.

shared/
  Shared CSS and JavaScript used across pages:
  - app-shell.css: fixed header, view switcher, role navigation overrides
  - backend-modal.css: shared backend note modal styling
  - app.js: backend note modal helpers

assets/
  Future static assets such as logos, icons, and images.

future/team-collaboration/
  Preserved reference copy of the collaboration-heavy organization workspace model.
  Use this for post-MVP planning, not for the first validation build.
