import Link from "next/link";

export default function ServiceCTA({ source }: { source?: string }) {
  const safeSource = source && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(source) ? source : "";
  const href = `/build-with-me${safeSource ? `?source=${encodeURIComponent(safeSource)}` : ""}#project-brief`;
  return <aside className="hd-service-cta" aria-label="Custom development">
    <div><span className="hd-eyebrow">A SEPARATE WAY TO WORK TOGETHER</span><h2>{safeSource ? "Need something built around this tool?" : "Need something built for your workflow?"}</h2><p>{safeSource ? "Have a custom workflow or a SaaS idea in mind? Tell me what you want to build, and I'll assess whether this project is a suitable starting point." : "I also build focused SaaS MVPs and custom web tools. Tell me what you want to create, who it is for, and what the first version needs to do."}</p></div>
    <Link href={href} className="hd-button hd-button-secondary">{safeSource ? "Discuss your project" : "Tell me about your project"}<span aria-hidden="true">&rarr;</span></Link>
  </aside>;
}
