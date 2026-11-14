import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests/e2e", fullyParallel: true, workers: 2, retries: 0,
  reporter: [["list"], ["html", { open: "never" }]],
  use: { baseURL: "http://127.0.0.1:3000", trace: "retain-on-failure" },
  webServer: { command: "npm run start -- --hostname 127.0.0.1", url: "http://127.0.0.1:3000", reuseExistingServer: !process.env.CI, timeout: 120000 },
  projects: [{ name: "desktop", use: { browserName: "chromium", viewport: { width: 1440, height: 1000 } } }, { name: "mobile", use: { browserName: "chromium", viewport: { width: 320, height: 780 } } }]
});
