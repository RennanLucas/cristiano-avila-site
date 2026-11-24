import { createServer } from 'node:https';
import { request } from 'node:http';
import { readFileSync } from 'node:fs';

const [keyPath, certificatePath] = process.argv.slice(2);
const credentials = { key: readFileSync(keyPath), cert: readFileSync(certificatePath) };

createServer(credentials, (incoming, outgoing) => {
  const upstream = request({
    hostname: '127.0.0.1',
    port: 3000,
    method: incoming.method,
    path: incoming.url,
    headers: { ...incoming.headers, 'x-forwarded-proto': 'https' },
  }, response => {
    outgoing.writeHead(response.statusCode, response.headers);
    response.pipe(outgoing);
  });

  upstream.on('error', () => {
    outgoing.writeHead(502);
    outgoing.end();
  });
  incoming.pipe(upstream);
}).listen(3443, '127.0.0.1');
