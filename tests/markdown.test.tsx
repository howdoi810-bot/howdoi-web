import test from "node:test";
import assert from "node:assert/strict";
import { renderToStaticMarkup } from "react-dom/server";
import Markdown from "../components/site/Markdown";

const escape = (value: string) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
test("raw HTML, MDX and javascript links cannot execute", () => {
  const html = renderToStaticMarkup(<Markdown body={'<script>alert(1)</script>\n\n<img src=x onerror=alert(1)>\n\n[bad](javascript:alert%281%29)\n\n<DangerousComponent />\n\n{globalThis.process.exit(1)}'} />);
  assert.doesNotMatch(html, /<script|<img|onerror=|href="javascript:/i);
});
test("imported H1s cannot create a second article H1", () => {
  const html = renderToStaticMarkup(<Markdown body="# Imported title\n\nSafe text." />);
  assert.doesNotMatch(html, /<h1/); assert.match(html, /<h2>Imported title/);
});
test("fenced code preserves spaces, quotes and internal blank lines", () => {
  const code = "printf '  exact  '\n\n  second line  ";
  const html = renderToStaticMarkup(<Markdown body={"```bash\n" + code + "\n```"} />);
  assert.ok(html.includes(`<code>${escape(code)}</code>`), html);
  assert.match(html, /Copy/); assert.match(html, /Command/);
});
test("expected output is not labelled as a runnable command", () => {
  const html = renderToStaticMarkup(<Markdown body={"```text\nExpected output\n```"} />);
  assert.match(html, /Output \/ text/); assert.doesNotMatch(html, /<strong>Command/);
});
test("placeholders and named configuration files are clearly labelled", () => {
  const html = renderToStaticMarkup(<Markdown body={'```env filename=".env" needs-edit\nAPI_KEY=YOUR_API_KEY\n```'} />);
  assert.match(html, /Edit required/); assert.match(html, /<strong>\.env<\/strong>/);
});
