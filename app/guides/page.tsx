import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/site/PageIntro";
import { GuideGrid, GuideSearch } from "@/components/site/GuideLibrary";
import { filterGuides, getPublishedGuides, normalizeSearch } from "@/lib/guides";
import { canonical, isPublicRelease } from "@/lib/site";

type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };
export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = await searchParams;
  return { title: "Setup Guides", description: "Browse free GitHub setup guides by tool, platform and category. Every guide includes requirements, source links and limitations.", alternates: { canonical: canonical("/guides") }, robots: { index: isPublicRelease() && Object.keys(params).length === 0, follow: true } };
}
export default async function Guides({ searchParams }: Props) {
  const all = getPublishedGuides();
  const values = normalizeSearch(await searchParams, all);
  const filtered = Boolean(values.q || values.category || values.platform);
  const matches = filterGuides(all, values);
  return <div className="hd-container hd-page"><PageIntro eyebrow="THE GUIDE LIBRARY" title="Start with a useful tool." description="Choose your platform, follow a clear setup path, and know the limitations before you begin." /><GuideSearch guides={all} values={values} /><div className="hd-result-heading"><h2>{filtered ? "Search results" : "Latest published guides"}</h2>{filtered && <Link href="/guides" className="hd-text-link">Clear filters</Link>}</div><GuideGrid guides={matches} filtered={filtered} /></div>;
}
