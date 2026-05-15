import { defineConfig } from "@playwright/test";

// Playwright config for the Recipe Book e2e suite.
// Run with: npm run test:e2e
export default defineConfig({
  testDir: "./tests/e2e",
  use: {
    baseURL: "http://localhost:5173",
  },
  webServer: {
    command: "npm run dev",
    url: "http://localhost:5173",
    reuseExistingServer: !process.env.CI,
  },
});
