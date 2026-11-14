import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Legacy HowDoI Pages", robots: { index: false, follow: true } };
export default function LegacyLayout({ children }: { children: React.ReactNode }) {
  return <><aside className="hd-container hd-notice"><strong>Legacy section.</strong> These earlier pages are preserved for existing visitors and are not part of the new setup-guide library. <Link href="/guides" className="hd-text-link">Browse guides</Link></aside>{children}</>;
}
