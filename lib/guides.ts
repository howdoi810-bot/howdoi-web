import data from "../generated/public-guides.json";
import type { GuideMetadata, EditorialRecord, Verification } from "./content-schema";

export type Guide = GuideMetadata & {
  body: string;
  editorial: Pick<EditorialRecord, "author" | "published_at" | "updated_at" | "runtime">;
};
const all = data as Guide[];
export const VERIFICATION_LABELS: Record<Verification, string> = {
  "docs-only": "Documentation-reviewed",
  "supplied-files-only": "Based on supplied files",
  "runtime-tested": "Runtime-tested"
};
export function getPublishedGuides(): Guide[] { return all.filter(g => g.publication_status === "published"); }
export function getGuide(slug: string): Guide | undefined { return all.find(g => g.slug === slug); }
export function getPublicSlugs(): string[] { return all.map(g => g.slug); }
export function label(value: string): string { return value.replace(/-/g, " ").replace(/^./, c => c.toUpperCase()); }
export function displayDate(value: string): string {
  return new Intl.DateTimeFormat("en", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(value + "T00:00:00Z"));
}
export type SearchValues = { q: string; category: string; platform: string };
export function normalizeSearch(params: Record<string, string | string[] | undefined>, guides: Guide[]): SearchValues {
  const clean = (value: unknown, max: number) => typeof value === "string" ? value.replace(/[\u0000-\u001f\u007f]/g, "").trim().slice(0, max) : "";
  const category = clean(params.category, 50), platform = clean(params.platform, 150);
  return {
    q: clean(params.q, 100),
    category: guides.some(g => g.category === category) ? category : "",
    platform: guides.some(g => g.target_platform === platform) ? platform : ""
  };
}
export function filterGuides(guides: Guide[], query: SearchValues): Guide[] {
  const term = query.q.toLocaleLowerCase("en");
  return guides.filter(g => (!query.category || g.category === query.category)
    && (!query.platform || g.target_platform === query.platform)
    && (!term || [g.title, g.tool_name ?? "", g.description, ...g.tags].join(" ").toLocaleLowerCase("en").includes(term)));
}
