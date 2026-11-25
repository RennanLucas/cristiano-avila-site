import test from "node:test";
import assert from "node:assert/strict";

const origin = process.env.TEST_BASE_URL || "http://localhost:3000";
const routes = ["/", "/sobre", "/contato", "/blog", "/unidades", "/politica-de-privacidade", "/unidades/praia-grande", "/unidades/santos", "/unidades/atibaia", "/unidades/sao-bernardo", "/especialidades/psicoterapia"];

for (const path of routes) {
  test("public route " + path, async () => {
    const response = await fetch(new URL(path, origin), { signal: AbortSignal.timeout(15000) });
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, /<h1[\s>]/i);
    assert.match(html, /<html[^>]+lang="pt-BR"/i);
    const canonical = html.match(/rel="canonical" href="([^"]+)"/i)?.[1];
    assert.equal(new URL(canonical).href, new URL(path, "https://cristiano-avila-site.vercel.app").href);
    assert.ok(response.headers.get("content-security-policy")?.includes("object-src 'none'"));
    assert.equal(response.headers.get("x-content-type-options"), "nosniff");
    assert.match(response.headers.get("strict-transport-security") ?? "", /max-age=63072000/);
  });
}

test("sitemap includes local landing pages", async () => {
  const response = await fetch(new URL("/sitemap.xml", origin));
  assert.equal(response.status, 200);
  const xml = await response.text();
  for (const path of routes.filter(path => path.startsWith("/unidades/"))) assert.ok(xml.includes(path));
});

test("unknown unit returns 404", async () => {
  const response = await fetch(new URL("/unidades/unidade-inexistente", origin));
  assert.equal(response.status, 404);
});

test("home links to WhatsApp and remains free of advertising tags", async () => {
  const html = await (await fetch(new URL("/", origin))).text();
  assert.match(html, /https:\/\/wa\.me\/5511980611571/);
  assert.doesNotMatch(html, /<script[^>]+src="https:\/\/(?:www\.)?(?:googletagmanager|googleadservices)\.com/i);
});


test("robots points to the official sitemap and old URLs redirect", async () => {
  const response = await fetch(new URL("/robots.txt", origin));
  assert.equal(response.status, 200);
  assert.match(await response.text(), /^Sitemap: https:\/\/cristiano-avila-site\.vercel\.app\/sitemap\.xml$/m);
  const redirect = await fetch(new URL("/sobre-2", origin), { redirect: "manual" });
  assert.equal(redirect.status, 308);
  assert.equal(redirect.headers.get("location"), "/sobre");
});
