# URL inventory, migration and rollback

Baseline: main at `6de87b6b890ef55a09830e6eed01cceda48ee0ec`. No production content/database was deleted, no DNS was changed and no production deployment is authorized by this branch.

| Existing route | Preview decision | Notes |
| --- | --- | --- |
| `/` | Rebuild as English guide-library homepage | Original component preserved verbatim at `/legacy`. |
| `/#tools` | Retain a relevant on-page bridge to `/legacy#tools` | Fragment URLs cannot be HTTP-redirected by the server. Full old calculator UI lives at the legacy URL. |
| `/#products` and other old home fragments | Original targets preserved under `/legacy` | Check analytics/bookmark importance before launch; not silently redirected to unrelated guides. |
| `/huong-dan` | Keep existing page and content | Vietnamese finance library, not imported as English setup articles. |
| `/huong-dan/[slug]` | Keep original routes/content | Existing metadata/claims still need an editorial audit; no fresh dates fabricated. |
| `/projects` | Keep original page/layout | Not promoted as fabricated proof for the new service. |
| `/support` | Keep | Older support API is not part of the new enquiry boundary. |
| `/support/cho-con` | Keep | App support URL retained. |
| `/privacy` | Keep original application policy verbatim | Existing app-related policy must not be replaced by a new website draft. |
| `/privacy/cho-con` | Keep original page | App policy URL retained. |
| `/api/subscribe` | Keep original endpoint | Filesystem storage concern remains; do not rely on it without a hosting/storage review. |
| `/api/support` | Keep original endpoint | No live test data was submitted. |

New routes: `/guides`, `/guides/[slug]`, `/build-with-me`, `/about`, `/editorial-policy`, `/website-privacy`, `/terms`, `/contact`, `/api/project-enquiries`, `/robots.txt`, `/sitemap.xml`, `/legacy`, `/legacy/privacy`.

The brief's proposed `/privacy` route is adapted to `/website-privacy` for the new website notice because `/privacy` already serves application policies. New footer and project-form privacy links use the website notice. No blanket homepage redirects are added.

The existing metadata canonical `https://howdoi.id.vn` is preserved. The current live apex/www redirect and Vercel account settings were not independently verified in this implementation environment. Confirm them before enabling indexing. This branch does not change either domain or DNS.

## Rollback

Before merge: close the draft PR or leave the feature branch unmerged. Production main remains untouched.

After a future authorized merge: use a reviewed revert of the merge commit on a rollback branch, run checks and authorize deployment of the revert. Alternatively, restore the known-good prior deployment through the hosting provider after checking its content/environment dependencies. Do not force-reset main or delete data. The baseline commit and copied legacy source files provide a recovery reference, but the owner should also export current hosting configuration before launch.

## Launch checklist still open

- Confirm public identity, service capabilities, contact and legal/privacy text.
- Approve the real enquiry recipient, provider and retention rules; implement and test reliable storage/delivery.
- Audit legacy form endpoints, privacy claims and important inbound fragment links.
- Confirm canonical-host redirects, indexable legacy URLs and any needed relevant redirects.
- Import genuinely reviewed articles; do not use test fixtures as production guides.
- Confirm current security/dependency audit and hosting runtime support.
- Approve a protected preview or explicit public deployment; remove the feature-branch deployment block only when authorized.
