import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/site/PageIntro";
import { canonical } from "@/lib/site";
import { getPublishedGuides } from "@/lib/guides";

export const metadata: Metadata = { title: "Build With Me", description: "Discuss a focused SaaS MVP or custom web tool with the independent developer behind HowDoI.", alternates: { canonical: canonical("/build-with-me") } };
type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };
export default async function BuildWithMe({ searchParams }: Props) {
  const source = (await searchParams).source;
  const approvedSource = typeof source === "string" && getPublishedGuides().some(g => g.slug === source) ? source : "";
  return <div className="hd-container hd-page">
    <PageIntro eyebrow="INDEPENDENT SAAS DEVELOPMENT" title="Have a SaaS idea? Let's build the first version." description="I'm the independent developer behind HowDoI. I help founders and small teams turn a focused idea into a working web product." />
    <p className="hd-intro-copy">Whether you are starting from scratch or exploring an existing software project, we will first define what your product needs to do - and what can wait.</p><a href="#project-brief" className="hd-button">Tell me about your project <span aria-hidden="true">&darr;</span></a>
    <section className="hd-section" aria-labelledby="service-options"><h2 id="service-options">A useful first version, not everything at once.</h2><div className="hd-three-grid">
      <article className="hd-info-card"><span className="hd-eyebrow">01 / START FOCUSED</span><h3>Build a SaaS MVP</h3><p>Start with a focused web product that solves one clear problem for a specific user.</p></article>
      <article className="hd-info-card"><span className="hd-eyebrow">02 / BUILD ON WHAT FITS</span><h3>Customize an existing tool</h3><p>Explore whether a suitable project can be adapted for your workflow, subject to technical and license review.</p></article>
      <article className="hd-info-card"><span className="hd-eyebrow">03 / REMOVE REPETITION</span><h3>Turn a workflow into a web app</h3><p>Replace a repetitive manual process with an application designed around how you work.</p></article>
    </div></section>
    <section className="hd-section hd-process" aria-labelledby="process"><div><span className="hd-eyebrow">WORK DIRECTLY WITH ME</span><h2 id="process">A clear scope. A shared plan.</h2><ol><li>Share your idea</li><li>Agree on scope</li><li>Build in milestones</li><li>Handover</li></ol></div><div><p>Before development starts, we will agree on the first version's core workflow, deliverables, price, estimated timeline, and support boundaries.</p><p>Hosting, paid APIs, third-party services, and ongoing maintenance are identified separately where applicable. Source-code handover and third-party license conditions are defined in the project agreement.</p><p><strong>Project pricing depends on scope.</strong> Share your idea and budget to find out whether we are a good fit.</p></div></section>
    <section id="project-brief" className="hd-section hd-form-section" aria-labelledby="brief-title"><div><span className="hd-eyebrow">YOUR PROJECT BRIEF</span><h2 id="brief-title">What do you want to build?</h2><p>Start with the problem, the intended users, and the one workflow your first version must handle.</p><p>Please don't include passwords, API keys, or confidential customer data.</p></div><div>
      <p id="form-availability" className="hd-notice"><strong>Project submissions are not available yet.</strong> The enquiry destination and privacy details are awaiting confirmation. This form is disabled and does not send or save your information.</p>
      <form method="post" action="/api/project-enquiries" aria-describedby="form-availability" className="hd-project-form"><fieldset disabled><legend className="sr-only">Project brief - currently unavailable</legend>
        <label htmlFor="project-name">Name<input id="project-name" name="name" required maxLength={100} autoComplete="name" /></label>
        <label htmlFor="project-email">Email<input id="project-email" name="email" type="email" required maxLength={254} autoComplete="email" /></label>
        <label htmlFor="project-idea">What do you want to build?<textarea id="project-idea" name="idea" required minLength={20} maxLength={4000} rows={4} /></label>
        <label htmlFor="project-scope">What should the first version do?<textarea id="project-scope" name="scope" required minLength={20} maxLength={4000} rows={4} /></label>
        <label htmlFor="project-budget">Estimated budget (USD)<input id="project-budget" name="budget" required maxLength={100} placeholder="A number, a range, or Not sure yet" /></label>
        <label htmlFor="project-date">Desired launch date <span className="hd-muted">(optional)</span><input id="project-date" name="launch_date" type="date" /><span className="hd-field-note">A requested date is not an agreed delivery date.</span></label>
        <label htmlFor="project-links">Repository or reference links <span className="hd-muted">(optional)</span><textarea id="project-links" name="references" maxLength={2000} rows={3} /></label>
        {approvedSource && <input type="hidden" name="source_guide" value={approvedSource} />}
        <button type="submit" className="hd-button">Send project brief</button>
      </fieldset><p className="hd-field-note">Read the <Link href="/website-privacy">privacy notice</Link>. A project enquiry will not subscribe you to marketing.</p></form>
    </div></section>
    <section className="hd-section hd-faq" aria-labelledby="faq"><h2 id="faq">Before we start</h2><details><summary>Can an existing GitHub project be adapted?</summary><p>Possibly. Technical suitability, its license, and any commercial restrictions need to be checked for that specific project before agreeing on an approach.</p></details><details><summary>What does the first version include?</summary><p>The essential workflow and deliverables agreed in the project scope. Features, exclusions, pricing and milestones are decided before development starts.</p></details><details><summary>What about hosting, maintenance and handover?</summary><p>They are discussed explicitly and recorded in the project agreement. Ongoing maintenance, third-party charges and source-code handover are not assumed to be included.</p></details></section>
  </div>;
}
