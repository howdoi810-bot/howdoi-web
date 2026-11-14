import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/site/PageIntro";
import { canonical } from "@/lib/site";

export const metadata: Metadata = { title: "Contact", description: "Contact availability, article corrections and project enquiries for HowDoI.", alternates: { canonical: canonical("/contact") } };
export default function Contact() {
  return <div className="hd-container hd-page"><PageIntro eyebrow="CONTACT" title="Questions, corrections and new ideas." description="Keep article feedback and custom-development enquiries focused on the relevant problem." /><div className="hd-reading"><aside className="hd-notice"><strong>Contact details for the rebuilt site are being confirmed.</strong> No new contact address or form destination has been activated in this preview.</aside><h2>Article corrections</h2><p>A useful correction includes the guide URL, your platform and version, the step involved, and a short description of the issue. Remove passwords, API keys and confidential information from any examples.</p><h2>Custom development</h2><p>Read <Link href="/build-with-me">Build With Me</Link> for the proposed service scope and project-brief fields. The submission form remains disabled until the owner approves its destination and data-handling details.</p><h2>Existing applications</h2><p>Existing visitors can still find the retained <Link href="/support">application support page</Link> and <Link href="/support/cho-con">Cho Con support page</Link>. Their older form integrations have not been replaced by the new project-enquiry endpoint.</p></div></div>;
}
