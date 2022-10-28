import { expect, test } from "@playwright/test";

test.describe("Index", () => {
  test("Input boxes should match", async ({ page }) => {
    await page.goto("/login");
    await page.getByLabel("Email address*").fill("demo@test.com");
    await page.getByLabel("Password*").fill("123456");
    await page.getByRole("button", { name: "Sign in" }).click();
    
    await expect(page).toHaveURL("/");

    await page.locator("input").fill("test2");
    await expect(page.locator(".css-cktl6h").first()).not.toHaveText("test");
  });
});
