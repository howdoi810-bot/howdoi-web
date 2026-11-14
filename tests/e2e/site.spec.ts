import { test, expect } from "@playwright/test";
import publicIndex from "../../generated/public-guides.json";
const hasPublishedGuides = (publicIndex as { publication_status: string }[]).some(g => g.publication_status === "published");
const routes = ["/", "/guides", "/build-with-me", "/about", "/editorial-policy", "/website-privacy", "/terms", "/contact"];
for (const route of routes) {
  test(`${route}: readable, English, one H1, no horizontal overflow`, async ({ page }) => {
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(page.locator("h1")).toHaveCount(1);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
    await expect(page.locator('nav[aria-label="Main navigation"]')).toBeVisible();
  });
}
test("library, shareable search and clearing filters", async ({ page }) => {
  await page.goto("/guides");
  if (!hasPublishedGuides) await expect(page.getByRole("heading", { name: "Good guides take a little groundwork." })).toBeVisible();
  await page.getByLabel("Find a tool or task").fill("zz-no-matching-tool-183749");
  await page.getByRole("button", { name: "Search guides" }).click();
  await expect(page).toHaveURL(/q=zz-no-matching-tool-183749/);
  await expect(page.getByText("No guides found. Try another tool name or clear your filters.")).toBeVisible();
  await page.getByRole("link", { name: "Clear your filters", exact: true }).click();
  await expect(page).toHaveURL(/\/guides$/);
});
test("disabled project form and closed backend boundary", async ({ page, request }) => {
  await page.goto("/build-with-me?source=../../untrusted");
  await expect(page.getByRole("button", { name: "Send project brief" })).toBeDisabled();
  await expect(page.getByLabel("Email", { exact: true })).toBeDisabled();
  await expect(page.locator('input[name="source_guide"]')).toHaveCount(0);
  const response = await request.post("/api/project-enquiries", { data: { name: "Synthetic test" } });
  expect(response.status()).toBe(503); expect((await response.json()).success).toBe(false);
});
test("unpublished routes stay unavailable and sitemap contains no draft fixture", async ({ request }) => {
  expect((await request.get("/guides/__unpublished-fixture__")).status()).toBe(404);
  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect(sitemap).not.toContain("synthetic-test"); expect(sitemap).not.toContain("needs-human-review");
});
test("keyboard skip link reaches main content", async ({ page }) => {
  await page.goto("/"); await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();
  await page.keyboard.press("Enter"); await expect(page.locator("#main-content")).toBeFocused();
});
test("new pages do not request ads or trackers", async ({ page }) => {
  const external: string[] = [];
  page.on("request", request => { if (!request.url().startsWith("http://127.0.0.1:3000") && !request.url().startsWith("data:")) external.push(request.url()); });
  await page.goto("/"); await page.goto("/build-with-me");
  expect(external).toEqual([]);
});
test("core reading works with JavaScript disabled", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage(); await page.goto("http://127.0.0.1:3000/");
  await expect(page.getByRole("heading", { name: /From GitHub to your/ })).toBeVisible();
  await page.getByRole("link", { name: "Browse guides", exact: true }).click();
  await expect(page.getByRole("heading", { name: "Start with a useful tool." })).toBeVisible();
  await context.close();
});
test("important legacy URLs are retained without unrelated redirects", async ({ request }) => {
  for (const path of ["/legacy", "/huong-dan", "/projects", "/support", "/support/cho-con", "/privacy", "/privacy/cho-con"]) {
    const response = await request.get(path); expect(response.status(), path).toBe(200);
  }
});
test("capture rebuild review screenshots", async ({ page }, testInfo) => {
  await page.goto("/"); await page.screenshot({ path: testInfo.outputPath("homepage.png"), fullPage: true });
  await page.goto("/build-with-me"); await page.screenshot({ path: testInfo.outputPath("build-with-me.png"), fullPage: true });
});
