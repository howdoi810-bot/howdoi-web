import { readFile, readdir, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { compileGuides } from "../lib/content-schema";

async function main() {
  const directory = path.join(process.cwd(), "content", "guides");
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;
    if (!entry.isFile() || !entry.name.endsWith(".md")) throw new Error(`Unsupported content entry: ${entry.name}; use ordinary .md files, not MDX, symlinks or directories`);
    files.push({ name: entry.name, source: await readFile(path.join(directory, entry.name), "utf8") });
  }
  const registry = JSON.parse(await readFile("content/editorial.json", "utf8"));
  const guides = compileGuides(files, registry);
  // Do not serialize reviewer names or approval digests into public content.
  const published = guides.map(({ editorial, ...guide }) => ({ ...guide, editorial: {
    author: editorial.author, published_at: editorial.published_at,
    ...(editorial.updated_at ? { updated_at: editorial.updated_at } : {}),
    ...(editorial.runtime ? { runtime: editorial.runtime } : {})
  } }));
  await mkdir("generated", { recursive: true });
  await writeFile("generated/public-guides.json", JSON.stringify(published, null, 2) + "\n");
  console.log(`Validated ${files.length} Markdown files. Public: ${guides.filter(g => g.publication_status === "published").length}; archived: ${guides.filter(g => g.publication_status === "archived").length}; drafts excluded: ${files.length - guides.length}.`);
}
main().catch(error => { console.error(error instanceof Error ? error.message : "Content validation failed"); process.exitCode = 1; });
