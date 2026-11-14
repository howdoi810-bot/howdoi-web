import Link from "next/link";
import { displayDate, label, VERIFICATION_LABELS, type Guide, type SearchValues } from "@/lib/guides";

export function GuideSearch({ guides, values = { q: "", category: "", platform: "" } }: { guides: Guide[]; values?: SearchValues }) {
  const categories = Array.from(new Set(guides.map(g => g.category).filter((c): c is NonNullable<Guide["category"]> => Boolean(c)))).sort();
  const platforms = Array.from(new Set(guides.map(g => g.target_platform))).sort();
  return <form action="/guides" method="get" className="hd-search" role="search" aria-label="Find installation guides">
    <div className="hd-search-term"><label htmlFor="guide-search">Find a tool or task</label><input id="guide-search" type="search" name="q" maxLength={100} defaultValue={values.q} placeholder="Search titles, tools or tags" /></div>
    {categories.length > 0 && <div><label htmlFor="guide-category">Category</label><select id="guide-category" name="category" defaultValue={values.category}><option value="">All categories</option>{categories.map(c => <option key={c} value={c}>{label(c)}</option>)}</select></div>}
    {platforms.length > 0 && <div><label htmlFor="guide-platform">Platform</label><select id="guide-platform" name="platform" defaultValue={values.platform}><option value="">All platforms</option>{platforms.map(p => <option key={p} value={p}>{p}</option>)}</select></div>}
    <button className="hd-button" type="submit">Search guides</button>
  </form>;
}
export function GuideGrid({ guides, filtered = false }: { guides: Guide[]; filtered?: boolean }) {
  if (!guides.length) return <div className="hd-empty">
    <span className="hd-eyebrow">{filtered ? "NO MATCHES" : "THE LIBRARY STARTS HERE"}</span>
    <h3>{filtered ? "No guides found." : "Good guides take a little groundwork."}</h3>
    <p>{filtered ? "No guides found. Try another tool name or clear your filters." : "The first guides are being prepared. Only reviewed, published articles will appear here. No sample installations or unverified recommendations."}</p>
    {filtered ? <Link href="/guides" className="hd-text-link">Clear your filters</Link> : <Link href="/editorial-policy" className="hd-text-link">Read the editorial policy <span aria-hidden="true">&rarr;</span></Link>}
  </div>;
  return <div className="hd-guide-grid">{guides.map(guide => <article key={guide.slug} className="hd-guide-card">
    <div className="hd-card-top"><span className="hd-badge">{VERIFICATION_LABELS[guide.verification]}</span>{guide.category && <span className="hd-muted">{label(guide.category)}</span>}</div>
    <h3><Link href={`/guides/${guide.slug}`}>{guide.title}</Link></h3><p>{guide.description}</p>
    <dl className="hd-card-meta"><div><dt>Platform</dt><dd>{guide.target_platform}</dd></div><div><dt>Sources reviewed</dt><dd><time dateTime={guide.source_reviewed_at}>{displayDate(guide.source_reviewed_at)}</time></dd></div></dl>
    <Link className="hd-text-link" href={`/guides/${guide.slug}`}>Read the guide <span aria-hidden="true">&rarr;</span></Link>
  </article>)}</div>;
}
