"use client";
import { useId, useRef, useState } from "react";
import { codeKind, codeNeedsEdits } from "@/lib/markdown";

export default function CodeBlock({ code, language = "text", meta = "" }: { code: string; language?: string; meta?: string }) {
  const [state, setState] = useState<"idle" | "copied" | "manual">("idle");
  const manual = useRef<HTMLTextAreaElement>(null);
  const id = useId();
  const filename = meta.match(/(?:file|filename)=(?:"([^"\r\n]+)"|'([^'\r\n]+)'|([^\s]+))/);
  const name = filename?.[1] ?? filename?.[2] ?? filename?.[3];
  const kind = codeKind(language.toLowerCase());
  const needsEdit = codeNeedsEdits(code, meta);
  async function copy() {
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(code);
      setState("copied");
    } catch { setState("manual"); }
  }
  return <figure className="hd-code">
    <figcaption><span><strong>{name ?? kind}</strong><span className="hd-code-language">{language}</span></span><button type="button" onClick={copy} aria-describedby={id}>{state === "copied" ? "Copied" : "Copy"}<span className="sr-only"> {name ?? kind.toLowerCase()}</span></button></figcaption>
    {needsEdit && <p className="hd-code-warning">Edit required: replace the marked placeholder values before using this block.</p>}
    {kind === "File content" && !name && <p className="hd-code-note">File content, not a terminal command. Use the filename named in the guide.</p>}
    <pre tabIndex={0} aria-label={`${name ?? kind} in ${language}`}><code>{code}</code></pre>
    <span id={id} className={state === "manual" ? "hd-code-note" : "sr-only"} role="status" aria-live="polite">{state === "copied" ? "Block copied to clipboard. Nothing was executed." : state === "manual" ? "Clipboard unavailable. Select and copy the text below manually." : "Copy copies only this block. It does not run it."}</span>
    {state === "manual" && <textarea ref={manual} aria-label="Select this code to copy manually" readOnly value={code} rows={Math.min(10, code.split("\n").length + 1)} onFocus={e => e.currentTarget.select()} />}
  </figure>;
}
