import { Children, isValidElement, type ReactElement, type ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CodeBlock from "./CodeBlock";
import { safeMarkdownUrl } from "@/lib/markdown";

type CodeChild = ReactElement<{ children?: ReactNode; className?: string; node?: { data?: { meta?: unknown } } }>;
export default function Markdown({ body }: { body: string }) {
  return <div className="hd-prose"><ReactMarkdown skipHtml remarkPlugins={[remarkGfm]} urlTransform={safeMarkdownUrl} components={{
    // Article title is provided by the page, so imported H1s cannot create a second H1.
    h1: ({ children }) => <h2>{children}</h2>,
    a: ({ href, children }) => href ? <a href={href} rel="noopener noreferrer">{children}</a> : <span>{children}</span>,
    img: ({ alt }) => <span className="hd-image-note">{alt ? `Image: ${alt}` : "Image omitted"}</span>,
    code: ({ children, className }) => <code className={className}>{children}</code>,
    pre: ({ children }) => {
      const child = Children.toArray(children).find(isValidElement) as CodeChild | undefined;
      const contents = child?.props.children;
      const text = typeof contents === "string" ? contents : Children.toArray(contents).filter(c => typeof c === "string").join("");
      // remark adds one formatting newline to code.value; remove that one, not whitespace in the source.
      const code = text.endsWith("\n") ? text.slice(0, -1) : text;
      const language = child?.props.className?.replace(/^language-/, "") ?? "text";
      const meta = child?.props.node?.data?.meta;
      return <CodeBlock code={code} language={language} meta={typeof meta === "string" ? meta : ""} />;
    },
    table: ({ children }) => <div className="hd-table-scroll" tabIndex={0} role="region" aria-label="Guide table"><table>{children}</table></div>
  }}>{body}</ReactMarkdown></div>;
}
