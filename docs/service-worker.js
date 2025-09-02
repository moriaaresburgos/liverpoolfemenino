self.addEventListener("install", event => {
  console.log("Service Worker instalado");
});

self.addEventListener("fetch", event => {
  // Deja que todos los recursos se carguen normalmente
  event.respondWith(fetch(event.request));
});
