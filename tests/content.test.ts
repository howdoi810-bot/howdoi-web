import test from "node:test";
import assert from "node:assert/strict";
import { compileGuides, contentHash, isDate, parseGuide } from "../lib/content-schema";
import { codeNeedsEdits, safeMarkdownUrl } from "../lib/markdown";
import { filterGuides, normalizeSearch, VERIFICATION_LABELS, type Guide } from "../lib/guides";
import { POST } from "../app/api/project-enquiries/route";

// Synthetic data, created only in tests. Never import this module into a public route.
const fixture = (status = "needs-human-review", verification = "docs-only") => `---\ntitle: "Synthetic validation fixture"\nslug: "synthetic-test"\ndescription: "A synthetic fixture for automated validation only."\nrepository: "https://github.com/example/fixture"\ntarget_platform: "Test OS"\ntarget_shell: "Bash"\nsource_version: "test-commit"\nsource_reviewed_at: "2026-01-01"\nverification: "${verification}"\npublication_status: "${status}"\n---\n## Before you start\nSynthetic prerequisite.\n## Install and run\n\n\`\`\`bash\nprintf 'synthetic fixture'\n\`\`\`\n## Confirm it works\nSynthetic check.\n## Limitations\nNot a real installation guide.\n## Sources\nSynthetic source.\n`;
const record = (source: string) => ({ "synthetic-test": { author: { name: "Test-only author" }, reviewer: "Test-only reviewer", published_at: "2026-01-02", content_sha256: contentHash(source) } });

test("compatibility defaults and docs-only label are explicit", () => {
  const { metadata } = parseGuide(fixture());
  assert.equal(metadata.schema_version, 1); assert.equal(metadata.language, "en");
  assert.deepEqual(metadata.tags, []); assert.equal(metadata.build_with_me, false);
  assert.equal(VERIFICATION_LABELS[metadata.verification], "Documentation-reviewed");
  assert.equal(metadata.tool_name, undefined);
});
test("drafts never enter the public index, even with an editorial record", () => {
  const source = fixture(); assert.deepEqual(compileGuides([{ name: "draft.md", source }], record(source)), []);
});
test("an imported published flag cannot authorize publication", () => {
  assert.throws(() => compileGuides([{ name: "a.md", source: fixture("published") }], {}), /approval/);
});
test("a reviewed exact file can publish without claiming a runtime test", () => {
  const source = fixture("published"); const guides = compileGuides([{ name: "a.md", source }], record(source));
  assert.equal(guides.length, 1); assert.equal(guides[0].verification, "docs-only"); assert.equal(guides[0].editorial.runtime, undefined);
});
test("edited content requires renewed approval", () => {
  const source = fixture("published");
  assert.throws(() => compileGuides([{ name: "a.md", source: source + "Changed.\n" }], record(source)), /stale/);
});
test("runtime-tested requires test environment, date and scope", () => {
  const source = fixture("published", "runtime-tested");
  assert.throws(() => compileGuides([{ name: "a.md", source }], record(source)), /runtime-tested/);
});
test("an archived approved URL remains in the public renderer index", () => {
  const source = fixture("archived"); assert.equal(compileGuides([{ name: "a.md", source }], record(source))[0].publication_status, "archived");
});
test("missing required fields, duplicate slugs and unexpected fields fail", () => {
  assert.throws(() => parseGuide(fixture().replace('target_shell: "Bash"\n', "")), /target_shell/);
  assert.throws(() => compileGuides([{ name: "a.md", source: fixture() }, { name: "b.md", source: fixture() }], {}), /Duplicate slug/);
  assert.throws(() => parseGuide(fixture().replace('title:', 'ads_enabled: true\ntitle:')), /Unknown frontmatter/);
});
test("real dates and safe slugs are required", () => {
  assert.equal(isDate("2026-02-30"), false); assert.equal(isDate("2024-02-29"), true);
  assert.throws(() => parseGuide(fixture().replace("2026-01-01", "2026-02-30")), /date/);
  assert.throws(() => parseGuide(fixture().replace('slug: "synthetic-test"', 'slug: "../escape"')), /slug/);
});
test("unsafe URLs, custom YAML tags, aliases and duplicate keys fail", () => {
  assert.throws(() => parseGuide(fixture().replace("https://github.com/example/fixture", "javascript:alert(1)")), /repository/);
  assert.throws(() => parseGuide(fixture().replace('title: "Synthetic validation fixture"', 'title: !!js/function "function(){}"')));
  assert.throws(() => parseGuide(fixture().replace('target_shell: "Bash"', 'target_shell: &s "Bash"\ntool_name: *s')));
  assert.throws(() => parseGuide(fixture().replace('slug: "synthetic-test"', 'slug: "first"\nslug: "second"')));
});
test("required headings cannot be faked inside a code fence", () => {
  assert.throws(() => parseGuide(fixture().replace("## Limitations", "```text\n## Limitations\n```")), /limitations/);
});
test("build CTA requires separate editor approval", () => {
  const source = fixture("published").replace('publication_status:', 'build_with_me: true\npublication_status:');
  assert.equal(compileGuides([{ name: "a.md", source }], record(source))[0].build_with_me, false);
});
test("URL sanitization blocks scripts, protocol-relative URLs and credentials", () => {
  for (const url of ["javascript:alert(1)", "data:text/html,a", "//evil.example", "https://user:password@example.com", "https:\\evil.example"]) assert.equal(safeMarkdownUrl(url), "");
  assert.equal(safeMarkdownUrl("https://github.com/example/fixture"), "https://github.com/example/fixture");
  assert.equal(safeMarkdownUrl("/guides"), "/guides");
  assert.equal(codeNeedsEdits("API_KEY=YOUR_API_KEY"), true);
});
test("query normalization bounds values and excludes unknown filters", () => {
  const values = normalizeSearch({ q: "x".repeat(200), category: "unknown", platform: ["a", "b"] }, []);
  assert.equal(values.q.length, 100); assert.equal(values.category, ""); assert.equal(values.platform, "");
  assert.deepEqual(filterGuides([] as Guide[], values), []);
});
test("unconfigured form returns 503 and never claims acceptance", async () => {
  const response = await POST(); assert.equal(response.status, 503);
  assert.equal((await response.json()).success, false);
});
