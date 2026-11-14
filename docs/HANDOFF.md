# Phase-1 implementation handoff

## Scope

The English guide-library rebuild is prepared on `rebuild/english-guides-preview`, based on main `6de87b6b890ef55a09830e6eed01cceda48ee0ec`. Existing stack retained. New article content is ordinary Markdown with YAML, never executable MDX. The original homepage and application/legal/support content are retained; the privacy route adaptation is documented in MIGRATION.md.

## What works by implementation

Homepage and guide discovery, SSR GET search/filtering, article metadata/verification, safe Markdown rendering, per-block Copy and fallback, optional editor-controlled service CTA, Build With Me page and disabled form, supporting pages, content approval validation and generated published-only index. Advertising and analytics make no requests in the new implementation. No login, paywall, email gate or fabricated articles are introduced.

## What is deliberately not connected

- **Enquiry delivery:** UI disabled; API always 503/false. No provider, recipient, durable storage, delivery, deduplication or rate-limiting service is claimed.
- **Ads/CMP/analytics:** inert boundaries only. No publisher IDs, fake ads.txt or assumed approval. Production consent/provider work remains.
- **Public identity/contact:** no new personal identity or email is invented. Existing addresses are not automatically approved as enquiry destinations.
- **Real articles and runtime tests:** no approved article was supplied. The empty state is intentional. Synthetic test fixtures stay in tests and are not rendered as guides.
- **Private previews:** not implemented. Noindex does not secure a page; the repo itself is public.

## Tests and evidence

The repository contains Node tests for YAML/schema/date/slug validation, content-digest approval, draft exclusion, runtime-test gating, archives, CTA approval, URL safety, Markdown/MDX safety, exact code rendering, output labels and the unavailable form response.

Chromium tests cover new routes at desktop and 320px mobile widths, English document language, one H1, page overflow, GET search, disabled forms, draft 404, sitemap exclusion, keyboard skip navigation, no new third-party requests, no-JavaScript reading, important legacy-route responses and screenshots.

**Do not equate this test inventory with passing results.** The authoritative outcome is the actual `Rebuild checks` workflow run for the final branch commit. No completed build or visual inspection is claimed merely by this file. Clipboard permission-denial interaction, real delivery/provider error/dedup/rate-limit paths, production hosting, full legacy functionality, screen-reader testing, Safari/Firefox and a complete accessibility audit are not covered by the initial browser suite.

The local assistant sandbox could not resolve GitHub/npm hosts; source access and branch changes use the authenticated GitHub connector. CI is prepared to execute tests/build in GitHub Actions. Actual outcomes and any failures must be reported before launch. The inherited lint script has no completed ESLint setup; TypeScript checking is a separate check, not a lint pass.

## Production inputs and authorization

Required: approved public author/reviewer information, contact address, service capabilities, real reviewed guides, enquiry recipient/provider, retention/privacy decisions, hosting/deployment permission and canonical-host verification. Advertising requires a separate approved account/provider/CMP implementation later.

No main-branch update, merge, DNS change, ad activation or live form submission is part of this handoff. Automatic Vercel Git deployment is disabled for this feature branch. See README.md for commands, PUBLISHING.md for editorial approval, and MIGRATION.md for route decisions and rollback.
