import { test, expect } from "@playwright/test";
const origin = process.env.TEST_BASE_URL || "http://localhost:3000";
for (const width of [320, 375, 390, 768, 1024, 1440, 1920]) {
  test(`home responsive at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    const errors = [];
    page.on("requestfailed", request => {
      if (request.url().startsWith(origin) && request.failure()?.errorText !== "net::ERR_ABORTED") {
        errors.push(new URL(request.url()).pathname + ": " + request.failure()?.errorText);
      }
    });
    page.on("pageerror", error => errors.push(error.message));
    await page.goto(origin, { waitUntil: "load" });
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.locator("h1")).toContainText("Psicólogo em");
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

test("metrics require consent and record only the expected contact events", async ({ page, context }) => {
  test.skip(process.env.TEST_CLINIC_METRICS_ENABLED !== "true", "Metrics disabled in this build");
  const csp = [];
  const requests = [];
  const hits = [];
  const expected = ["booking_click", "phone_click", "whatsapp_click"];
  const hitsFor = event => hits.filter(hit => `${hit.url}&${hit.body}`.includes(`en=${event}`));

  await page.addInitScript(() => {
    document.addEventListener("click", event => {
      const href = event.target instanceof Element && event.target.closest("a")?.getAttribute("href");
      if (href && /^(tel:|https:\/\/wa\.me\/)/.test(href)) event.preventDefault();
    });
    window.open = () => null;
  });
  page.on("console", message => {
    if (/content security policy/i.test(message.text())) csp.push(message.text());
  });
  context.on("request", request => {
    if (/googletagmanager\.com\/(gtm\.js|gtag\/js)|google-analytics\.com\/.*collect/.test(request.url())) {
      requests.push(request.url());
    }
  });
  await context.route(/^https:\/\/(?:www|region1)\.google-analytics\.com\/.*collect/, async route => {
    const current = route.request();
    hits.push({ url: current.url(), body: current.postData() ?? "" });
    await route.fulfill({ status: 204, headers: { "access-control-allow-origin": "*" } });
  });

  await page.goto(origin + "/contato");
  const phone = page.getByRole("link", { name: /Telefone/ }).first();
  await page.getByRole("button", { name: "Recusar métricas" }).click();
  await phone.click();
  expect(requests).toHaveLength(0);

  await page.getByRole("button", { name: "Preferências de métricas" }).click();
  await page.getByRole("button", { name: "Permitir métricas" }).click();
  expect(requests).toHaveLength(0);

  await page.getByRole("textbox", { name: "Seu nome" }).fill("Nome fictício para teste");
  await page.getByRole("button", { name: /Abrir conversa no WhatsApp/ }).click();
  await phone.click();
  await expect.poll(() => hitsFor("whatsapp_click").length + hitsFor("phone_click").length).toBe(2);
  await page.goto(origin + "/unidades/santos");
  await page.getByRole("link", { name: "Consultar horários pelo WhatsApp" }).click();

  await expect.poll(() => {
    return expected.filter(event => hitsFor(event).length > 0).length;
  }, { timeout: 15000 }).toBe(expected.length);
  for (const event of expected) {
    expect(hitsFor(event)).toHaveLength(1);
  }
  expect(hits.filter(hit => /Nome|5511980611571|wa\.me|form_submit|page_view|link_url/.test(decodeURIComponent(hit.url + hit.body)))).toEqual([]);
  expect(hits.every(hit => new URL(hit.url).searchParams.get("tid") === "G-1WZB39L9RX")).toBe(true);
  expect(csp.filter(message => /google-analytics|googletagmanager/.test(message))).toEqual([]);

  await page.getByRole("button", { name: "Preferências de métricas" }).click();
  await Promise.all([
    page.waitForEvent("load"),
    page.getByRole("button", { name: "Recusar métricas" }).click(),
  ]);
  const count = requests.length;
  await page.getByRole("link", { name: "Consultar horários pelo WhatsApp" }).click();
  expect(requests).toHaveLength(count);
  expect((await context.cookies()).filter(cookie => /^_ga(?:_|$)/.test(cookie.name))).toEqual([]);
});
