# CI and dependency notes

## Verification history

The first implementation run, 43594194402, passed 20 Node tests, the production build, TypeScript checking and 32 Chromium desktop/mobile checks. Installation also reported five dependency advisories (one moderate, three high and one critical). Passing functional checks were not treated as security clearance.

Compatible `npm audit fix --package-lock-only --ignore-scripts` updates were committed as `a2eaac39c584f07e5992f875f7810ecbeee113dc`, without `--force` or a framework major upgrade. Run 43594810424 again passed functional/build/type checks but correctly failed the audit gate: Next's nested PostCSS still produced one high and one moderate package finding. That run is NOT a fully passing CI result.

## Targeted PostCSS override

`package.json` now overrides only Next's PostCSS dependency to **8.5.23**. The upstream advisory identifies 8.5.23 as the patched version for GHSA-fxqj-rqcc-2cmp (affected <=8.5.22); the other reported PostCSS advisories affect earlier versions. Next.js remains on the existing major version. This is a targeted compatibility decision, not a claim that all future vulnerabilities are prevented.

References:
- https://github.com/postcss/postcss/security/advisories/GHSA-fxqj-rqcc-2cmp
- https://docs.npmjs.com/cli/v10/configuring-npm/package-json/#overrides

The reviewed manifest was locked in `ee8b835a440276d2c076fcd0de32a06a741a6823`. The temporary, feature-branch-only lock repair workflow removed itself in that same commit. No repair workflow remains in the delivered tree. Review this override when upgrading Next; remove it only after the upstream dependency is patched and the same build/browser/audit checks pass.

## Maintained workflow

The maintained Rebuild checks workflow has only `contents: read`, does not retain checkout credentials, uses `npm ci`, never commits, never deploys, and fails on high/critical audit findings or an unusable audit report. It runs against the exact committed lockfile. The final completed run on the final PR head is authoritative; intermediate green functional steps do not override a failed audit.

The npm advisory database can change. A clean report is a dated check, not a guarantee of no vulnerabilities. Screenshots are actual Chromium captures of this implementation, not generated mockups. Lint, full accessibility, Safari/Firefox, live enquiry delivery and production hosting have not been certified.
