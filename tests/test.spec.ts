import { expect, test } from "@playwright/test";

test("Hello, World", async ({ page }) => {
	await page.goto("/");

	await expect(page.getByText("Hello, World")).toBeVisible();
});
