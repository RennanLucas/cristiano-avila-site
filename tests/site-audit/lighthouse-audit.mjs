import { mkdir, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { chromium } from 'playwright';

const host = process.env.AUDIT_ORIGIN ?? 'http://127.0.0.1:3000';
const destination = resolve(process.env.AUDIT_OUTPUT ?? './audit-output');
const lighthouse = resolve(import.meta.dirname, 'node_modules/lighthouse/cli/index.js');
const templates = ['/', '/sobre', '/unidades', '/contato', '/blog', '/politica-de-privacidade', '/especialidades/psicoterapia', '/blog/ciclo-invisivel'];
const results = [];
await mkdir(destination, { recursive: true });

for (const path of templates) {
  for (const mode of ['mobile', 'desktop']) {
    const report = resolve(destination, `${mode}-${(path.slice(1) || 'home').replaceAll('/', '--')}.json`);
    const args = [lighthouse, new URL(path, host).href, '--quiet', '--output=json', `--output-path=${report}`, '--chrome-flags=--headless --no-sandbox --disable-dev-shm-usage'];
    if (mode === 'desktop') args.push('--preset=desktop');
    const run = spawnSync(process.execPath, args, { env: { ...process.env, CHROME_PATH: chromium.executablePath() }, encoding: 'utf8', timeout: 90000 });
    if (run.status !== 0) {
      results.push({ path, mode, error: (run.stderr || run.error?.message || 'Lighthouse did not finish').slice(-500) });
      continue;
    }
    const data = JSON.parse(await readFile(report, 'utf8'));
    const scores = Object.fromEntries(Object.entries(data.categories).map(([name, category]) => [name, category.score * 100]));
    const metrics = Object.fromEntries(['largest-contentful-paint', 'cumulative-layout-shift', 'total-blocking-time', 'first-contentful-paint', 'server-response-time'].map(name => [name, data.audits[name]?.displayValue]));
    results.push({ path, mode, scores, metrics });
  }
}

console.log(JSON.stringify(results, null, 2));
if (results.some(result => result.error)) process.exitCode = 1;
