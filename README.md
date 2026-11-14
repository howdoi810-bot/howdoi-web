# HowDoI - guide-library rebuild preview

This branch implements phase 1 of the owner's 2026-11-14 rebuild brief. It keeps the existing Next.js App Router, React, TypeScript and Tailwind stack. It is not an authorization to publish, enable ads, or accept enquiries.

## Run and check

Use Node.js 22 and npm:

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Stop and restart the dev server after changing Markdown; the content index is generated at startup, not watched.

```bash
npm run content:build
npm test
npm run build
npm run typecheck
npx playwright install chromium
npm run test:e2e
npm audit --audit-level=high
```

The browser suite starts a local production server. Its report goes to `playwright-report/` and screenshots to `test-results/`. No command here deploys the site. The inherited `npm run lint` script needs a separately configured ESLint setup; do not count it as a passed lint check.

## What is implemented

- English, light-first publication shell, homepage and navigation.
- Server-rendered `/guides` search with shareable, bounded query parameters and category/platform filters derived only from real published content.
- Ordinary Markdown plus safe YAML validation, separate editorial approvals, verification labels, publication dates, archived URLs and a sanitized article renderer.
- Individual code Copy controls, edit-required notices, manual clipboard fallback and Copy guide link.
- `/build-with-me`, its full proposed project-brief form, and a deliberately closed `POST /api/project-enquiries` boundary.
- About, editorial policy, contact-availability page, draft website privacy and terms.
- Canonical metadata, preview noindex and a published-only sitemap after launch approval.
- Original homepage preserved at `/legacy`; existing articles, projects, support and application privacy routes preserved.

The initial library is intentionally empty. No real installation article, author, testimonial or runtime test is invented.

## Important route adaptation

The existing `/privacy` page describes policies for the owner's iOS/web applications and may be linked from an app store. It remains unchanged. The rebuilt website's separate privacy notice is at `/website-privacy`; new website footer/form links point there. See `docs/MIGRATION.md`.

## Publishing

See `docs/PUBLISHING.md`. Article sources live in `content/guides/*.md`. The editor-owned `content/editorial.json` grants approval to an exact SHA-256 content digest. Drafts are validated but excluded from `generated/public-guides.json`. Runtime-tested publication requires an approved date, environment and scope.

**This GitHub repository is public.** Website exclusion does not make a committed draft private on GitHub. Keep sensitive drafts, HOLD notes, personal details and secrets outside this repository. There is no private-draft web preview in this release.

## Integration boundaries

The new form is disabled in the UI, and its API always returns HTTP 503 with `success: false`. It does not read, log, store or forward request bodies. This is not a working enquiry delivery service. A provider, approved destination, retention policy, durable rate limiting, idempotency, origin/CSRF handling, server validation and real authorized delivery tests are launch work, not completed features.

Ads and analytics have no active provider or script. `AdSlot` is an intentionally inert integration boundary, not an AdSense implementation or CMP. Enabling advertising requires a separate reviewed implementation; an environment variable alone cannot enable it.

Legacy `/api/subscribe` and `/api/support` are preserved, not repaired or endorsed. Their existing filesystem writes require a hosting-compatible storage review before relying on them. No live legacy form submission was authorized or performed.

## Deployment safety and rollback

`vercel.json` disables automatic Vercel Git deployments specifically for `rebuild/english-guides-preview`. Do not merge, change DNS, activate a public preview, or deploy production without owner approval. The existing canonical setting `https://howdoi.id.vn` is preserved; verify the current apex/www redirect in the hosting account before launch.

`HOWDOI_PUBLIC_RELEASE` defaults to false. The preview is noindex and its sitemap is empty. Noindex is not access control. Do not put sensitive drafts in it.

The maintained CI workflow has read-only repository permission and installs the committed lockfile using `npm ci`. It never commits, deploys or writes to main. It runs unit tests, a Next build, TypeScript checks, Chromium desktop/mobile checks and a dependency audit. The initial lockfile repair history is documented in `docs/CI-NOTES.md`. Verify the actual run results; the presence of tests is not a passing result.

The production baseline before this work is `6de87b6b890ef55a09830e6eed01cceda48ee0ec`. Main is not moved by this implementation. See `docs/HANDOFF.md` for blockers and `docs/MIGRATION.md` for rollback guidance.
