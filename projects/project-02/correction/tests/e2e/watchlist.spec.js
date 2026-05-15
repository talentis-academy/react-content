import { test, expect } from '@playwright/test';

test.describe('Watchlist Feature', () => {
  test.beforeEach(async ({ page }) => {
    // The app routes are protected by authLoader — seed a fake token first.
    await page.goto('/login');
    await page.evaluate(() => {
      localStorage.setItem('token', 'fake-jwt-token');
    });

    // Visit the home page and wait for the movie cards to render.
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Movie Hub' })).toBeVisible();
    await expect(page.locator('.item-card').first()).toBeVisible({ timeout: 10000 });
  });

  test('adds a movie to the watchlist when clicking the favorite button', async ({ page }) => {
    const firstCard = page.locator('.item-card').first();
    await firstCard.locator('.favorite-btn').click();

    await expect(firstCard.locator('.favorite-btn')).toHaveClass(/favorite-active/);

    await page.getByRole('link', { name: /Watchlist/ }).click();
    await expect(page).toHaveURL(/.*watchlist/);
    await expect(page.locator('.item-card').first()).toBeVisible();
  });

  test('removes a movie from the watchlist when clicking the favorite button again', async ({ page }) => {
    const firstCard = page.locator('.item-card').first();
    await firstCard.locator('.favorite-btn').click();
    await expect(firstCard.locator('.favorite-btn')).toHaveClass(/favorite-active/);

    await page.getByRole('link', { name: /Watchlist/ }).click();
    await expect(page.locator('.item-card').first()).toBeVisible();

    await page.locator('.item-card').first().locator('.favorite-btn').click();
    await expect(page.getByText('Your watchlist is empty!')).toBeVisible();
  });

  test('persists the watchlist when navigating between pages', async ({ page }) => {
    const firstCard = page.locator('.item-card').first();
    await firstCard.locator('.favorite-btn').click();

    await page.getByRole('link', { name: /Watchlist/ }).click();
    await expect(page.locator('.item-card').first()).toBeVisible();

    await page.getByRole('link', { name: 'Movies' }).click();
    await expect(page.locator('.item-card').first().locator('.favorite-btn')).toHaveClass(/favorite-active/);
  });

  test('displays multiple movies in the watchlist', async ({ page }) => {
    await page.locator('.item-card').nth(0).locator('.favorite-btn').click();
    await page.locator('.item-card').nth(1).locator('.favorite-btn').click();

    await page.getByRole('link', { name: /Watchlist/ }).click();
    await expect(page.locator('.item-card')).toHaveCount(2);
  });
});
