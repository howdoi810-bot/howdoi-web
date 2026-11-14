import Link from "next/link";

export default function Header() {
  return <header className="hd-header">
    <div className="hd-container hd-header-inner">
      <Link href="/" className="hd-wordmark" aria-label="HowDoI home">HowDoI<span aria-hidden="true">.</span></Link>
      <nav aria-label="Main navigation" className="hd-nav">
        <Link href="/guides">Guides</Link>
        <Link href="/build-with-me">Build With Me</Link>
        <Link href="/about">About</Link>
      </nav>
    </div>
  </header>;
}
