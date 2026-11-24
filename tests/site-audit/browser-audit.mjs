import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { chromium, firefox, webkit, devices } from 'playwright';
import AxeBuilder from '@axe-core/playwright';

const origin = new URL(process.env.AUDIT_ORIGIN ?? 'http://127.0.0.1:3000');
const destination = resolve(process.env.AUDIT_OUTPUT ?? './audit-output');
const baseline = process.env.AUDIT_BASELINE === '1';
const localTLS = origin.protocol === 'https:' && origin.hostname === '127.0.0.1';
const viewportSizes = [
  [320, 568], [375, 812], [390, 844], [430, 932], [768, 1024], [1024, 768],
  [1280, 800], [1366, 768], [1440, 900], [1920, 1080], [2560, 1440],
];
const reports = { runs: [], checks: {}, accessibility: {}, routes: [] };
const failures = [];
await mkdir(destination, { recursive: true });

const sitemap = await fetch(new URL('/sitemap.xml', origin)).then(response => {
  assert.equal(response.status, 200, 'sitemap.xml');
  return response.text();
});
const paths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => new URL(match[1]).pathname);
const missingPath = '/__audit_not_found__';
assert.ok(paths.includes('/') && paths.includes('/contato'), 'Expected public entry points in sitemap');
const allPaths = [...new Set(paths), missingPath];
const slug = path => path === '/' ? 'home' : path.slice(1).replaceAll('/', '--');

async function visit(page, path) {
  const response = await page.goto(new URL(path, origin).href, { waitUntil: 'domcontentloaded' });
  await page.locator('h1').first().waitFor({ state: 'visible' });
  return response?.status() ?? null;
}

async function capture(page, path, name) {
  await page.evaluate(async () => {
    await document.fonts.ready;
    for (const section of document.querySelectorAll('main section, main article, footer')) {
      section.scrollIntoView({ behavior: 'instant', block: 'center' });
      await new Promise(requestAnimationFrame);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
    await new Promise(requestAnimationFrame);
  });
  await page.screenshot({ path: resolve(destination, `${name}-${slug(path)}.jpg`), fullPage: true, type: 'jpeg', quality: 76 });
}

async function scan(browserType, viewports, captureEvidence) {
  const browser = await browserType.launch();
  try {
    for (const [width, height] of viewports) {
      const context = await browser.newContext({ viewport: { width, height }, reducedMotion: 'reduce', ignoreHTTPSErrors: localTLS });
      await context.route('https://www.googletagmanager.com/**', route => route.abort());
      const page = await context.newPage();
      let pageErrors = [];
      page.on('pageerror', error => pageErrors.push(error.message));
      for (const path of allPaths) {
        pageErrors = [];
        try {
          const status = await visit(page, path);
          const data = await page.evaluate(() => {
            const { clientWidth, scrollWidth } = document.documentElement;
            return {
              title: document.title,
              canonical: document.querySelector('link[rel="canonical"]')?.href,
              h1: document.querySelectorAll('h1').length,
              clientWidth,
              scrollWidth,
              overflowCandidates: scrollWidth <= clientWidth + 1 ? [] : [...document.querySelectorAll('body *')]
                .filter(element => element.getBoundingClientRect().right > clientWidth + 1)
                .slice(0, 12).map(element => `${element.tagName} ${element.getAttribute('class') ?? ''}`.slice(0, 160)),
            };
          });
          reports.runs.push({ engine: browserType.name(), path, width, height, status, ...data, pageErrors });
          assert.equal(status, path === missingPath ? 404 : 200);
          assert.equal(data.h1, 1);
          assert.ok(data.scrollWidth <= data.clientWidth + 1, `Horizontal overflow ${data.clientWidth} → ${data.scrollWidth}`);
          assert.deepEqual(pageErrors, []);
        } catch (error) {
          failures.push(`${browserType.name()} ${width}×${height} ${path} ${error.message}`);
        }
        if (captureEvidence && (width === 390 || width === 1440)) {
          try {
            await capture(page, path, width === 390 ? 'mobile' : 'desktop');
            if (!baseline && width === 390) {
              const axe = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
              reports.accessibility[path] = axe.violations.map(({ id, impact, nodes }) => ({ id, impact, count: nodes.length, targets: nodes.slice(0, 4).map(node => node.target) }));
            }
          } catch (error) {
            failures.push(`Evidence ${width} ${path} ${error.message}`);
          }
        }
      }
      await context.close();
    }
  } finally {
    await browser.close();
  }
}

async function check(context, label, test) {
  try {
    const page = await context.newPage();
    try {
      await test(page);
      reports.checks[label] = 'pass';
    } finally {
      await page.close();
    }
  } catch (error) {
    reports.checks[label] = error.message;
    failures.push(`${label} ${error.message}`);
  }
}

async function checkFlows() {
  for (const [type, device] of [[chromium, devices['Pixel 7']], [webkit, devices['iPhone 13']]]) {
    const browser = await type.launch();
    const context = await browser.newContext({ ...device, ignoreHTTPSErrors: localTLS });
    await context.route('https://www.googletagmanager.com/**', route => route.abort());
    await context.addInitScript(() => localStorage.setItem('ca_metrics_preference', 'deny'));
    await check(context, `${type.name()} menu and FAQ`, async page => {
      await visit(page, '/');
      await page.getByRole('button', { name: 'Abrir menu' }).click();
      await page.getByRole('navigation', { name: 'Navegação móvel' }).getByRole('link', { name: 'FAQ' }).click();
      await page.waitForURL('**/#faq');
      const question = page.locator('#faq details').nth(1);
      await question.locator('summary').press('Enter');
      await question.locator('.faq-answer').waitFor({ state: 'visible' });
      await page.getByRole('button', { name: 'Abrir menu' }).click();
      await page.keyboard.press('Escape');
      await page.getByRole('button', { name: 'Abrir menu' }).waitFor();
      assert.equal(await page.evaluate(() => document.activeElement?.getAttribute('aria-label')), 'Abrir menu');
    });
    await check(context, `${type.name()} city and appointment options`, async page => {
      await visit(page, '/unidades#santos');
      const city = page.locator('#unidades');
      await city.getByRole('heading', { name: 'Consultório Santos' }).waitFor();
      assert.equal(await city.locator('#santos').getAttribute('aria-pressed'), 'true');
      await city.locator('#praia-grande').click();
      await city.getByRole('heading', { name: 'Consultório Praia Grande' }).waitFor();
      await visit(page, '/');
      const triage = page.getByRole('heading', { name: /Escolha o local e o período/ }).locator('xpath=ancestor::section[1]');
      await triage.getByRole('button', { name: 'Santos', exact: false }).click();
      await triage.getByRole('button', { name: 'Tarde', exact: false }).click();
      const link = await triage.getByRole('link', { name: /Ver horários no WhatsApp/ }).getAttribute('href');
      assert.match(new URL(link).searchParams.get('text'), /Santos[\s\S]*Tarde/);
    });
    await check(context, `${type.name()} contact validation and destinations`, async page => {
      await visit(page, '/contato');
      const name = page.getByRole('textbox', { name: 'Seu nome' });
      const submit = page.getByRole('button', { name: /Abrir conversa no WhatsApp/ });
      assert.equal(await submit.isDisabled(), true);
      await name.fill('   ');
      assert.equal(await submit.isDisabled(), true);
      await name.fill('QA');
      await page.waitForFunction(() => !document.querySelector('form button[type="submit"]').disabled);
      const telephone = page.getByRole('link', { name: /Telefone/ }).first();
      assert.match(await telephone.getAttribute('href'), /^tel:\+\d+$/);
      assert.equal(new URL(await page.getByRole('link', { name: /WhatsApp/ }).first().getAttribute('href')).hostname, 'wa.me');
    });
    await browser.close();
  }
}

async function checkLinks() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ reducedMotion: 'reduce', ignoreHTTPSErrors: localTLS });
  const edges = new Map();
  for (const path of paths) {
    await visit(page, path);
    const hrefs = await page.locator('a[href]').evaluateAll(links => links.map(link => link.href));
    for (const href of hrefs) {
      const url = new URL(href);
      if (url.origin === origin.origin) edges.set(url.pathname + url.hash, url);
    }
  }
  for (const [edge, url] of edges) {
    const outcome = { edge };
    try {
      outcome.status = (await page.request.get(url.href)).status();
      assert.equal(outcome.status, 200);
      if (url.hash) {
        await visit(page, edge);
        assert.equal(await page.evaluate(id => Boolean(document.getElementById(id)), decodeURIComponent(url.hash.slice(1))), true);
      }
      outcome.pass = true;
    } catch (error) {
      outcome.error = error.message;
      failures.push(`Link ${edge} ${error.message}`);
    }
    reports.routes.push(outcome);
  }
  await browser.close();
}

const engines = baseline ? [scan(chromium, [[390, 844], [1440, 900]], true)] : [
  scan(chromium, viewportSizes, true), scan(firefox, viewportSizes, false), scan(webkit, viewportSizes, false),
  checkFlows(), checkLinks(),
];
for (const result of await Promise.allSettled(engines)) {
  if (result.status === 'rejected') failures.push(result.reason.message);
}
reports.failures = failures;
await writeFile(resolve(destination, 'matrix.json'), JSON.stringify(reports, null, 2));
const overflowExamples = reports.runs.filter(run => run.overflowCandidates.length).slice(0, 3);
console.log(JSON.stringify({ pages: allPaths.length, renders: reports.runs.length, links: reports.routes.length, checks: reports.checks, axe: reports.accessibility, overflowExamples, failures }, null, 2));
if (failures.length && !baseline) process.exitCode = 1;
