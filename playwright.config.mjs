import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests",
  testMatch: "browser.spec.mjs",
  timeout: 60000,
  workers: 2,
  use: { headless: true },
  projects: [{ name: "chromium", use: { browserName: "chromium" } }, { name: "webkit", use: { browserName: "webkit" } }, { name: "firefox", use: { browserName: "firefox" } }],
});
