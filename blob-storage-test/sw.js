const v = "4"

self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  e.respondWith((async () => {
    console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
    const response = await fetch(e.request);
    return response;
  })());
});

self.addEventListener('activate', event => {
  console.log(`[Service Worker] Activate`);
});
