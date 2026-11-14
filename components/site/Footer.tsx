import Link from "next/link";

export default function Footer() {
  return <footer className="hd-footer">
    <div className="hd-container hd-footer-inner">
      <div><Link href="/" className="hd-wordmark">HowDoI<span aria-hidden="true">.</span></Link><p>Clear setup steps. Honest limitations.</p></div>
      <nav aria-label="Footer navigation">
        <Link href="/editorial-policy">Editorial policy</Link><Link href="/contact">Contact</Link>
        <Link href="/website-privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/legacy#tools">Legacy tools</Link>
      </nav>
    </div>
    <div className="hd-container" id="tools"><p className="hd-field-note">Looking for the earlier calculators? <Link href="/legacy#tools">Open the legacy finance tools.</Link></p></div>
  </footer>;
}
