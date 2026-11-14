# Markdown publishing workflow

## Draft import

Keep one ordinary `.md` file per article in `content/guides/`. Do not use MDX, scripts, symlinks or directories. HOLD notes are not articles and must remain outside this directory. This repository is public: anything committed is visible on GitHub even when excluded from the website.

The shared frontmatter fields are: `schema_version`, `title`, `slug`, `description`, `language`, `tool_name`, `repository`, `category`, `tags`, `target_platform`, `target_shell`, `source_version`, `source_reviewed_at`, `verification`, `publication_status`, `build_with_me`. Required fields and compatibility defaults follow the brief. The agent's output must use `publication_status: needs-human-review` and `build_with_me: false`.

Required H2 sections, in order: Before you start; Install and run; Confirm it works; Limitations; optional Troubleshooting; Sources. A terminal period in a heading is accepted. Keep prerequisites before commands. Code fences must be closed.

Run `npm run content:build`. Invalid dates, repository URLs, duplicate slugs, unsupported YAML, missing fields, malformed sections and unexpected metadata fail the build with a filename. YAML aliases and custom tags are not accepted. File size is bounded. The site never executes repository commands or imported MDX.

## Authorized editorial action

1. Review the sources, actual platform, version, commands, costs and limitations. A docs-only article is eligible for publication without implying a runtime test.
2. Change the reviewed Markdown's `publication_status` to `published`.
3. Compute the digest of that final file, with CRLF normalized to LF:

```bash
node -e "const fs=require('node:fs'),c=require('node:crypto');console.log(c.createHash('sha256').update(fs.readFileSync(process.argv[1],'utf8').replace(/\r\n/g,'\n')).digest('hex'))" content/guides/YOUR-SLUG.md
```

4. Add a record keyed by the exact slug in `content/editorial.json`, replacing every placeholder with real approved data:

```json
{
  "YOUR-SLUG": {
    "author": { "name": "APPROVED PUBLIC AUTHOR NAME" },
    "reviewer": "ACTUAL AUTHORIZED REVIEWER",
    "published_at": "ACTUAL-YYYY-MM-DD",
    "content_sha256": "EXACT-64-CHARACTER-DIGEST",
    "build_with_me": false
  }
}
```

This example is documentation, not valid publishable metadata. Do not copy placeholder values into production. `author.url` is optional and must be HTTPS. Do not invent an author, reviewer or publication date. Dates use real YYYY-MM-DD values, not build timestamps. The public index omits the reviewer and approval digest.

For a real approved runtime test, include `runtime: { tested_at, environment, scope }` with the actual date, tested environment and scope. `runtime-tested` without this record is rejected. A test after original publication requires an actual `updated_at` date. It does not silently change `published_at`.

5. Run `npm run content:build`, `npm test`, `npm run build` and `npm run typecheck`. Review the built article before an owner-authorized merge/deployment. Any source edit invalidates the digest and requires a new review.

This controlled-branch workflow depends on trusted editors and repository permissions. A hash is not an authentication system and does not prevent a person with permission to change both files from publishing. There is no public import or publishing endpoint. Branch protection/CODEOWNERS approval policy should be configured by the owner before regular publishing.

## Code block conventions

Use a real fence language: `bash`, `powershell`, `json`, `yaml`, etc. Use `text` or `output` for expected output, never a runnable shell label. For configuration files, name the file in nearby prose and optionally in the fence:

````markdown
```env filename=".env" needs-edit
API_KEY=YOUR_API_KEY
```
````

Copy transfers only the block text and does not execute it. One parser-added newline is removed; internal whitespace and quoting remain unchanged. A failed clipboard request shows manually selectable text. HTML is ignored, URLs are allowlisted, and MDX is not evaluated. External Markdown images are shown as alt text rather than fetched as tracking resources.

## Optional service CTA and archive

A service CTA needs **both** `build_with_me: true` in the reviewed Markdown and a true flag in the editor record. It is template-managed, appears after all article content, and points to a validated source slug. It is not permission to commercialize a third-party project.

To archive, set `publication_status: archived`, review the change, update its digest and retain original publication metadata. The URL remains renderable with a warning, but the guide is removed from library/search/sitemap/related-guide discovery. No draft is previewed on a public route. No RSS feed is introduced in phase 1.
