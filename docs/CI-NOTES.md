# CI and dependency notes

The first build used the inherited lockfile and new Markdown/test dependencies. GitHub Actions run 43594194402 passed 20 Node tests, the production build, TypeScript checking and 32 Chromium desktop/mobile checks. Installation also reported five dependency advisories (one moderate, three high and one critical); the passing functional checks were not treated as security clearance.

A subsequent owner-feature-branch-only repair step ran `npm audit fix --package-lock-only --ignore-scripts`, without `--force` and without changing package.json. Its lockfile commit is `a2eaac39c584f07e5992f875f7810ecbeee113dc`. The final CI run must confirm the resulting dependency audit and rebuild against that lockfile; do not infer zero findings from the presence of this commit.

The temporary lockfile-writing step has been removed. The maintained workflow has only `contents: read`, does not retain checkout credentials, installs using `npm ci`, never commits, never deploys, and fails if the audit reports high/critical findings or cannot produce a usable report. The npm advisory database can change, so a clean report is a dated result, not a guarantee of no vulnerabilities.

Use the latest completed Rebuild checks run and the PR handoff comment for final results. Review screenshots are real Chromium captures of this implementation, not generated product mockups. No live enquiry delivery is tested.
