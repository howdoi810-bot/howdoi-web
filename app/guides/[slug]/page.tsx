import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "@/components/site/Markdown";
import CopyGuideLink from "@/components/site/CopyGuideLink";
import ServiceCTA from "@/components/site/ServiceCTA";
import AdSlot from "@/components/site/AdSlot";
import { GuideGrid } from "@/components/site/GuideLibrary";
import { displayDate, getGuide, getPublishedGuides, getPublicSlugs, VERIFICATION_LABELS } from "@/lib/guides";
import { canonical, isPublicRelease } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };
// Unknown paths reach the explicit notFound below, including when the library is empty.
// getGuide reads only the compiled approved-public index, never draft source files.
export const dynamicParams = true;
export function generateStaticParams() { return getPublicSlugs().map(slug => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = getGuide((await params).slug);
  if (!guide) return { title: "Guide not found", robots: { index: false } };
  return { title: guide.title, description: guide.description, alternates: { canonical: canonical(`/guides/${guide.slug}`) }, robots: { index: isPublicRelease() && guide.publication_status === "published", follow: true }, openGraph: { title: guide.title, description: guide.description, type: "article", url: canonical(`/guides/${guide.slug}`), publishedTime: guide.editorial.published_at, ...(guide.editorial.updated_at ? { modifiedTime: guide.editorial.updated_at } : {}) } };
}
export default async function GuidePage({ params }: Props) {
  const guide = getGuide((await params).slug);
  if (!guide) notFound();
  const archived = guide.publication_status === "archived";
  const url = canonical(`/guides/${guide.slug}`);
  const related = getPublishedGuides().filter(g => g.slug !== guide.slug && g.category && g.category === guide.category).slice(0, 3);
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: guide.title, description: guide.description, mainEntityOfPage: url, author: { "@type": "Person", ...guide.editorial.author }, datePublished: guide.editorial.published_at, ...(guide.editorial.updated_at ? { dateModified: guide.editorial.updated_at } : {}) };
  return <div className="hd-container hd-page"><article className="hd-article">
    <nav className="hd-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/guides">Guides</Link><span aria-hidden="true">/</span><span aria-current="page">{guide.tool_name ?? guide.title}</span></nav>
    <header className="hd-article-header"><span className="hd-badge">{VERIFICATION_LABELS[guide.verification]}</span><h1>{guide.title}</h1><p className="hd-lead">{guide.description}</p><p className="hd-byline">By {guide.editorial.author.name} &middot; Published <time dateTime={guide.editorial.published_at}>{displayDate(guide.editorial.published_at)}</time>{guide.editorial.updated_at && <> &middot; Updated <time dateTime={guide.editorial.updated_at}>{displayDate(guide.editorial.updated_at)}</time></>}</p></header>
    {archived && <aside className="hd-notice"><strong>Archived guide.</strong> This URL is preserved for existing readers. These instructions are no longer part of the current guide library and may be outdated.</aside>}
    <dl className="hd-guide-details"><div><dt>Platform</dt><dd>{guide.target_platform}</dd></div><div><dt>Shell</dt><dd>{guide.target_shell}</dd></div><div><dt>Source version</dt><dd>{guide.source_version}</dd></div><div><dt>Sources reviewed</dt><dd><time dateTime={guide.source_reviewed_at}>{displayDate(guide.source_reviewed_at)}</time></dd></div></dl>
    <aside className="hd-notice"><strong>{VERIFICATION_LABELS[guide.verification]}.</strong>{guide.verification === "docs-only" ? " These instructions were checked against the cited documentation. A runtime installation test is not claimed." : guide.verification === "supplied-files-only" ? " This guide is based on supplied materials, without a live freshness check." : " This workflow was tested only within the environment and scope reported below."}{guide.verification === "runtime-tested" && guide.editorial.runtime && <p>Tested {displayDate(guide.editorial.runtime.tested_at)}. Environment: {guide.editorial.runtime.environment}. Scope: {guide.editorial.runtime.scope}.</p>}</aside>
    <div className="hd-article-actions"><a className="hd-text-link" href={guide.repository} rel="noopener noreferrer">Source repository <span aria-hidden="true">&#8599;</span></a><CopyGuideLink url={url} /></div>
    <Markdown body={guide.body} />
    {!archived && <AdSlot />}
    {!archived && guide.build_with_me && <ServiceCTA source={guide.slug} />}
    {!archived && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />}
  </article>{!archived && related.length > 0 && <section className="hd-section" aria-labelledby="related-guides"><h2 id="related-guides">Related guides</h2><GuideGrid guides={related} /></section>}</div>;
}
