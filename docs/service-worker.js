self.addEventListener("install", event => {
  console.log("Service Worker instalado.");
});

self.addEventListener('fetch', event => {
  //Podes cachear archivos si querés, por ahora solo pasa las requests
});
