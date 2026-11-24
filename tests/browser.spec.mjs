import { test, expect } from "@playwright/test";
const origin = process.env.TEST_BASE_URL || "http://localhost:3000";
for (const width of [320, 375, 390, 768, 1024, 1440, 1920]) {
  test(`home responsive at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    const errors = [];
    page.on("pageerror", error => errors.push(error.message));
    await page.goto(origin, { waitUntil: "domcontentloaded" });
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.locator("h1")).toContainText("Entender o que");
    await expect(page.locator("#especialidades")).toBeVisible();
    await expect(page.locator('a[href^="https://wa.me/"]').first()).toBeAttached();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
    expect(errors).toEqual([]);
  });
}
test("local pages and contact validation", async ({ page }) => {
  await page.goto(origin + "/unidades/santos");
  await expect(page.locator("h1")).toContainText("Santos");
  await expect(page.locator('a[href^="https://wa.me/"]').first()).toBeAttached();
  await page.goto(origin + "/contato");
  const name = page.getByRole("textbox", { name: "Seu nome" });
  const submit = page.getByRole("button", { name: /Abrir conversa no WhatsApp/ });
  await expect(submit).toBeDisabled();
  await name.fill("   ");
  await expect(submit).toBeDisabled();
  await name.fill("Teste automatizado");
  await expect(submit).toBeEnabled();
});
