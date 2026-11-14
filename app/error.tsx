"use client";
export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <div className="hd-container hd-page"><div className="hd-reading"><span className="hd-eyebrow">SOMETHING WENT WRONG</span><h1 className="text-3xl font-bold mb-4">This page could not be loaded.</h1><p>Please try again. No project submission should be assumed successful unless you received an explicit acceptance.</p><button className="hd-button" type="button" onClick={reset}>Try again</button></div></div>;
}
