import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHash } from 'node:crypto';

const base = '/budget-elegance-ipad/';

const offlinePlugin = {
  name: 'budget-offline',
  generateBundle(_, bundle) {
    const paths = Object.keys(bundle)
      .filter((file) => !file.endsWith('.map'))
      .map((file) => `${base}${file}`);
    const hash = createHash('sha256').update(paths.join('|')).digest('hex').slice(0, 12);
    const files = [
      base,
      `${base}index.html`,
      `${base}manifest.webmanifest`,
      `${base}icons/icon-192.png`,
      `${base}icons/icon-512.png`,
      ...paths,
    ];
    const worker = `const CACHE='budget-elegance-${hash}';
const FILES=${JSON.stringify(files)};
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll([...new Set(FILES)])));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('budget-elegance-')&&k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin)return;e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request)))})`;
    this.emitFile({ type: 'asset', fileName: 'sw.js', source: worker });
  },
};

export default defineConfig({
  base,
  plugins: [react(), offlinePlugin],
  server: { host: '127.0.0.1', port: 1420 },
});
