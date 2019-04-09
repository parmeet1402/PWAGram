self.addEventListener("install", event => {
  console.log("[Service Worker] Installing service worker...", event);
});

self.addEventListener("activate", event => {
  console.log("[Service Worker] Service worker activated ...", event);
  /* This return statement must be used to avoid errors with service workers */
  return self.clients.claim();
});

self.addEventListener("fetch", event => {
  console.log("[Service Worker] Fetching something ... ");
});
