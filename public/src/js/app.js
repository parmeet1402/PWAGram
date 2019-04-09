let deferredPrompt;

/* Check if the service worker feature is available? */
if ("serviceWorker" in navigator) {
  /* register service worker */
  navigator.serviceWorker.register("/sw.js").then(() => {
    console.log("Service worker is registered.");
  });
}

window.addEventListener("beforeinstallprompt", event => {
  console.log("before install prompt fired");
  event.preventDefault();
  deferredPrompt = event;
  return false;
});
