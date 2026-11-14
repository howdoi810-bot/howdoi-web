import { createHash } from "node:crypto";
import { parseDocument } from "yaml";

export const CATEGORIES = ["ai-tools", "automation", "developer-tools", "productivity", "self-hosted", "media-tools"] as const;
export type Category = typeof CATEGORIES[number];
export type Verification = "docs-only" | "supplied-files-only" | "runtime-tested";
export type PublicationStatus = "needs-human-review" | "published" | "archived";
export interface GuideMetadata {
  schema_version: 1; title: string; slug: string; description: string; language: "en";
  tool_name?: string; repository: string; category?: Category; tags: string[];
  target_platform: string; target_shell: string; source_version: string;
  source_reviewed_at: string; verification: Verification;
  publication_status: PublicationStatus; build_with_me: boolean;
}
export interface EditorialRecord {
  author: { name: string; url?: string }; reviewer: string;
  published_at: string; updated_at?: string; content_sha256: string;
  build_with_me?: boolean;
  runtime?: { tested_at: string; environment: string; scope: string };
}
export interface PublicGuide extends GuideMetadata {
  body: string; editorial: EditorialRecord;
}
export const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const MAX_BYTES = 256_000;
const allowedFields = new Set(["schema_version", "title", "slug", "description", "language", "tool_name", "repository", "category", "tags", "target_platform", "target_shell", "source_version", "source_reviewed_at", "verification", "publication_status", "build_with_me"]);

function fail(message: string): never { throw new Error(message); }
function object(value: unknown, label: string): Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) fail(`${label} must be an object`);
  return value as Record<string, unknown>;
}
function text(value: unknown, label: string, max = 200): string {
  if (typeof value !== "string" || !value.trim() || value.length > max || /[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(value)) fail(`Invalid ${label}`);
  return value.trim();
}
export function isDate(value: unknown): value is string {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00Z`);
  return Number.isFinite(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
}
function date(value: unknown, label: string): string {
  if (!isDate(value)) fail(`Invalid ${label}; use a real YYYY-MM-DD date`);
  if (value > new Date().toISOString().slice(0, 10)) fail(`${label} cannot be in the future`);
  return value;
}
function secureUrl(value: unknown, label: string): string {
  const raw = text(value, label, 500);
  let url: URL;
  try { url = new URL(raw); } catch { return fail(`Invalid ${label}`); }
  if (url.protocol !== "https:" || url.username || url.password || /[\s\\]/.test(raw)) fail(`Unsafe ${label}`);
  return raw;
}
export function contentHash(source: string): string {
  return createHash("sha256").update(source.replace(/\r\n/g, "\n"), "utf8").digest("hex");
}
function sectionHeadings(body: string): string[] {
  const headings: string[] = [];
  let fence: { char: string; length: number } | undefined;
  for (const line of body.split("\n")) {
    const marker = line.match(/^ {0,3}(`{3,}|~{3,})(.*)$/);
    if (marker) {
      if (!fence) fence = { char: marker[1][0], length: marker[1].length };
      else if (marker[1][0] === fence.char && marker[1].length >= fence.length && !marker[2].trim()) fence = undefined;
      continue;
    }
    if (!fence) {
      const match = line.match(/^##\s+(.+?)\s*#*$/);
      if (match) headings.push(match[1].trim().replace(/\.$/, "").toLowerCase());
    }
  }
  if (fence) fail("Unclosed fenced code block");
  return headings;
}
export function parseGuide(source: string, filename = "guide.md"): { metadata: GuideMetadata; body: string; hash: string } {
  if (Buffer.byteLength(source, "utf8") > MAX_BYTES) fail(`${filename}: file too large`);
  const normalized = source.replace(/\r\n/g, "\n");
  const match = normalized.match(/^---\n([\s\S]*?)\n---(?:\n|$)([\s\S]*)$/);
  if (!match) fail(`${filename}: YAML frontmatter is required`);
  const document = parseDocument(match[1], { schema: "core", uniqueKeys: true, strict: true, merge: false });
  if (document.errors.length || document.warnings.length) fail(`${filename}: invalid or unsupported YAML`);
  const raw = object(document.toJS({ maxAliasCount: 0 }), "Frontmatter");
  for (const key of Object.keys(raw)) if (!allowedFields.has(key)) fail(`Unknown frontmatter field: ${key}`);
  if ((raw.schema_version ?? 1) !== 1) fail("Unsupported schema_version");
  if ((raw.language ?? "en") !== "en") fail("New guides must use language: en");
  const slug = text(raw.slug, "slug", 100);
  if (!SLUG.test(slug)) fail("Invalid slug; use lowercase hyphenated words");
  const repository = secureUrl(raw.repository, "repository");
  const repo = new URL(repository);
  if (repo.hostname !== "github.com" || !/^\/[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+\/?$/.test(repo.pathname) || repo.search || repo.hash || repo.pathname === "/OWNER/REPO") fail("repository must be a real GitHub repository URL");
  const verification = raw.verification;
  if (!["docs-only", "supplied-files-only", "runtime-tested"].includes(String(verification))) fail("Invalid verification");
  const status = raw.publication_status;
  if (!["needs-human-review", "published", "archived"].includes(String(status))) fail("Invalid publication_status");
  const tags = raw.tags ?? [];
  if (!Array.isArray(tags) || tags.length > 12 || tags.some(t => typeof t !== "string" || !t.trim() || t.length > 40)) fail("Invalid tags");
  if (raw.category !== undefined && !CATEGORIES.includes(raw.category as Category)) fail("Invalid category");
  if (raw.build_with_me !== undefined && typeof raw.build_with_me !== "boolean") fail("build_with_me must be a boolean");
  const metadata: GuideMetadata = {
    schema_version: 1, title: text(raw.title, "title", 160), slug,
    description: text(raw.description, "description", 300), language: "en",
    ...(raw.tool_name === undefined ? {} : { tool_name: text(raw.tool_name, "tool_name", 100) }),
    repository, ...(raw.category === undefined ? {} : { category: raw.category as Category }),
    tags: tags.map(t => t.trim()), target_platform: text(raw.target_platform, "target_platform", 150),
    target_shell: text(raw.target_shell, "target_shell", 80), source_version: text(raw.source_version, "source_version", 150),
    source_reviewed_at: date(raw.source_reviewed_at, "source_reviewed_at"),
    verification: verification as Verification, publication_status: status as PublicationStatus,
    build_with_me: raw.build_with_me === true
  };
  for (const value of [metadata.title, metadata.description, metadata.target_platform, metadata.target_shell, metadata.source_version]) {
    if (/^\[.*\]$/.test(value) || /\[(Tool|OS)\]/.test(value)) fail("Replace schema placeholders before importing a guide");
  }
  const body = match[2];
  const headings = sectionHeadings(body);
  const expected = ["before you start", "install and run", "confirm it works", "limitations", "sources"];
  let previous = -1;
  for (const heading of expected) {
    const index = headings.indexOf(heading);
    if (index < 0 || index <= previous || headings.lastIndexOf(heading) !== index) fail(`Missing, duplicate or misplaced section: ${heading}`);
    previous = index;
  }
  const troubleshooting = headings.indexOf("troubleshooting");
  if (troubleshooting >= 0 && (troubleshooting < headings.indexOf("limitations") || troubleshooting > headings.indexOf("sources"))) fail("Troubleshooting must follow Limitations and precede Sources");
  return { metadata, body, hash: contentHash(source) };
}
function editorialRecord(value: unknown, hash: string): EditorialRecord {
  const raw = object(value, "Editorial record");
  if (raw.content_sha256 !== hash) fail("Editorial approval is missing or stale; review this exact file and update its SHA-256");
  const author = object(raw.author, "author");
  const published_at = date(raw.published_at, "published_at");
  const updated_at = raw.updated_at === undefined ? undefined : date(raw.updated_at, "updated_at");
  if (updated_at && updated_at < published_at) fail("updated_at precedes published_at");
  if (raw.build_with_me !== undefined && typeof raw.build_with_me !== "boolean") fail("Invalid editorial build_with_me");
  let runtime: EditorialRecord["runtime"];
  if (raw.runtime !== undefined) {
    const record = object(raw.runtime, "runtime");
    runtime = { tested_at: date(record.tested_at, "tested_at"), environment: text(record.environment, "test environment", 300), scope: text(record.scope, "test scope", 1000) };
  }
  return {
    author: { name: text(author.name, "author.name", 100), ...(author.url === undefined ? {} : { url: secureUrl(author.url, "author.url") }) },
    reviewer: text(raw.reviewer, "reviewer", 100), published_at,
    ...(updated_at ? { updated_at } : {}), content_sha256: hash,
    build_with_me: raw.build_with_me === true, ...(runtime ? { runtime } : {})
  };
}
export function compileGuides(files: { name: string; source: string }[], registry: unknown): PublicGuide[] {
  const approvals = object(registry, "Editorial registry");
  const seen = new Set<string>();
  const publicGuides: PublicGuide[] = [];
  for (const file of files) {
    try {
      const { metadata, body, hash } = parseGuide(file.source, file.name);
      if (seen.has(metadata.slug)) fail(`Duplicate slug: ${metadata.slug}`);
      seen.add(metadata.slug);
      if (metadata.publication_status === "needs-human-review") continue;
      if (!Object.hasOwn(approvals, metadata.slug)) fail("An article cannot publish itself; an editorial approval is required");
      const editorial = editorialRecord(approvals[metadata.slug], hash);
      if (metadata.verification === "runtime-tested" && !editorial.runtime) fail("runtime-tested requires an approved test date, environment and scope");
      if (editorial.runtime && editorial.runtime.tested_at > (editorial.updated_at ?? editorial.published_at)) fail("Test date is after the approved publication/update date");
      // Only the public subset of metadata is shipped. Reviewer and digest stay server-side in build inputs.
      publicGuides.push({ ...metadata, body, editorial, build_with_me: metadata.build_with_me && editorial.build_with_me === true });
    } catch (error) {
      throw new Error(`${file.name}: ${error instanceof Error ? error.message : "Invalid guide"}`);
    }
  }
  return publicGuides.sort((a, b) => b.editorial.published_at.localeCompare(a.editorial.published_at) || a.slug.localeCompare(b.slug));
}
