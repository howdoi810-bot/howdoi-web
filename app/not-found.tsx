import Link from "next/link";
export default function NotFound() {
  return <div className="hd-container hd-page"><div className="hd-reading"><span className="hd-eyebrow">404 / NOT FOUND</span><h1 className="text-3xl font-bold mb-4">This page is not available.</h1><p>The address may be incorrect, or the guide has not been approved for publication.</p><Link className="hd-button" href="/guides">Browse published guides</Link></div></div>;
}
