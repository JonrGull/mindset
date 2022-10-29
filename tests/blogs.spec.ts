import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/login");
  await page.getByLabel("Email address*").fill("demo@test.com");
  await page.getByLabel("Password*").fill("123456");
  await page.getByRole("button", { name: "Sign in" }).click();
});

test.describe("Blogs page", () => {
  test("should show navbar", async ({ page }) => {
    await expect(page).toHaveURL("/");
    await page.getByRole("button", { name: "Blogs" }).click();

    expect(
      page.locator('div:has-text("HomeBlogsSecret Hello, demo@test.com! ProfileSettingsLogout")').nth(1).isVisible()
    );
  });

  test("write post should create new blog", async ({ page }) => {
    await expect(page).toHaveURL("/");

    await page.getByRole("button", { name: "Blogs" }).click();
    await expect(page).toHaveURL("/blogs");
    await page.getByRole("button", { name: "Write article" }).click();

    expect(page.locator('section[role="dialog"]:has-text("A photo will be chosen for you.Post!Cancel")').isVisible());

    await page.getByPlaceholder("Title").fill("Playwright Test");
    await page.getByPlaceholder("Title").press("Tab");
    await page.getByPlaceholder("Content").fill("This is a test from Playwright.");
    await page.getByRole("button", { name: "Post!" }).click();

    await page.getByText("Playwright TestThis is a test from Playwright.").isVisible();
    await page
      .locator('li:has-text("Playwright TestThis is a test from Playwright.Delete")')
      .getByRole("button", { name: "Delete" })
      .click();

    await page.getByText("Playwright TestThis is a test from Playwright.").isHidden();
  });
});
