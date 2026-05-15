import { test, expect } from "@playwright/test";

// E2E coverage for the "save a recipe" flow:
// login -> save from the home page -> verify it on the Saved page -> remove it.
test.describe("Save recipe flow", () => {
  test.beforeEach(async ({ page }) => {
    // Start unauthenticated on the login page.
    await page.goto("/login");

    // The protected app redirects here when there is no token.
    await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible();

    // Sign in with any email + a password of 4+ characters (see fakeLogin).
    await page.getByPlaceholder("you@example.com").fill("student@talentis.io");
    await page.getByPlaceholder("••••••••").fill("secret");
    await page.getByRole("button", { name: "Sign In" }).click();

    // A successful login navigates to the home page; wait for the recipes.
    await expect(page.locator(".recipe-card").first()).toBeVisible({ timeout: 10000 });
  });

  test("saves a recipe and shows it on the Saved page", async ({ page }) => {
    // Save the first recipe.
    const firstCard = page.locator(".recipe-card").first();
    const recipeName = await firstCard.locator(".recipe-title").innerText();
    await firstCard.locator(".favorite-btn").click();

    // The header counter should now show 1.
    await expect(page.getByRole("link", { name: /Saved/ })).toContainText("1");

    // Open the Saved page and check the recipe is listed.
    await page.getByRole("link", { name: /Saved/ }).click();
    await expect(page).toHaveURL(/.*\/saved/);
    await expect(page.getByText(recipeName)).toBeVisible();
  });

  test("removes a saved recipe and shows the empty state", async ({ page }) => {
    // Save then go to the Saved page.
    await page.locator(".recipe-card").first().locator(".favorite-btn").click();
    await page.getByRole("link", { name: /Saved/ }).click();
    await expect(page.locator(".recipe-card").first()).toBeVisible();

    // Unsave it from the Saved page.
    await page.locator(".recipe-card").first().locator(".favorite-btn").click();

    // The empty-state message appears.
    await expect(page.getByText(/No saved recipes yet/)).toBeVisible();
  });

  test("redirects to /login when visiting a protected route without a token", async ({ page }) => {
    await page.evaluate(() => localStorage.removeItem("token"));
    await page.goto("/saved");
    await expect(page).toHaveURL(/.*\/login/);
  });
});
