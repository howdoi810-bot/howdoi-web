import type { Metadata } from "next";
import Link from "next/link";
import { GuideGrid, GuideSearch } from "@/components/site/GuideLibrary";
import ServiceCTA from "@/components/site/ServiceCTA";
import { getPublishedGuides } from "@/lib/guides";
import { canonical } from "@/lib/site";

export const metadata: Metadata = { title: { absolute: "HowDoI - Practical GitHub Setup Guides" }, description: "Find clear installation steps for useful GitHub tools, with copyable commands, requirements and honest limitations.", alternates: { canonical: canonical() } };
export default function Home() {
  const guides = getPublishedGuides();
  return <div className="hd-container hd-home">
    <section className="hd-hero">
      <div><span className="hd-eyebrow">PRACTICAL GITHUB SETUP GUIDES</span><h1>From GitHub to your<br className="hd-desktop-break" /> first useful result<span className="hd-accent">.</span></h1><p>Find clear installation steps for useful tools, with copyable commands, requirements, and limitations explained before you start.</p><div className="hd-actions"><Link href="/guides" className="hd-button">Browse guides <span aria-hidden="true">&rarr;</span></Link><Link href="/build-with-me" className="hd-text-link">Build a SaaS with me <span aria-hidden="true">&#8599;</span></Link></div></div>
      <aside className="hd-hero-note" aria-label="What to expect"><span className="hd-eyebrow">LESS GUESSWORK</span><p><strong>One platform.</strong><br />Know what you need before you start.</p><p><strong>A clear setup path.</strong><br />Commands you can read and copy.</p><p><strong>The limits, upfront.</strong><br />Requirements and tradeoffs, clearly stated.</p></aside>
    </section>
    <section className="hd-section" aria-labelledby="latest-guides"><div className="hd-section-heading"><div><span className="hd-eyebrow">THE GUIDE LIBRARY</span><h2 id="latest-guides">Find your next useful tool.</h2></div><Link href="/guides" className="hd-text-link">All guides <span aria-hidden="true">&rarr;</span></Link></div><GuideSearch guides={guides} /><GuideGrid guides={guides.slice(0, 6)} /></section>
    <section className="hd-editorial hd-section" aria-labelledby="how-guides-work"><div><span className="hd-eyebrow">KNOW WHAT YOU ARE FOLLOWING</span><h2 id="how-guides-work">Clear steps. Visible evidence.</h2></div><div><p>Each guide names its platform, links to its sources, and shows whether it was reviewed against documentation or tested in a specific environment.</p><p>Complete guides stay free to read. Documentation review is never presented as a successful installation test.</p><Link href="/editorial-policy" className="hd-text-link">How guides are prepared <span aria-hidden="true">&rarr;</span></Link></div></section>
    <ServiceCTA />
  </div>;
}
