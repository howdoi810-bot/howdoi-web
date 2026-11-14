"use client";
import { useState } from "react";

export default function CopyGuideLink({ url }: { url: string }) {
  const [status, setStatus] = useState("");
  const [manual, setManual] = useState(false);
  async function copy() {
    try { await navigator.clipboard.writeText(url); setStatus("Guide link copied."); }
    catch { setManual(true); setStatus("Select and copy this link manually."); }
  }
  return <div className="hd-copy-link"><button className="hd-button hd-button-secondary" type="button" onClick={copy}>Copy guide link</button><span role="status">{status}</span>{manual && <input readOnly aria-label="Guide link" value={url} onFocus={event => event.currentTarget.select()} />}</div>;
}
