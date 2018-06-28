let staticCacheName = 'currency_cache_v4';
var allCaches = [staticCacheName];
self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open(staticCacheName).then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/css/style.css',
          '/css/materialize.min.css',
          'https://fonts.googleapis.com/css?family=Playfair+Display',
          '/js/materialize.min.js',
          '/js/main.js',
          '/js/ui.js',
          '/js/app.js',
          '/js/currencyAPI.js',
          'https://code.jquery.com/jquery-3.2.1.min.js'
        ]);
      })
    );
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.filter((cacheName)  => {
            return cacheName.startsWith('currency') &&
                   !allCaches.includes(cacheName);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      })
    );
  });

self.addEventListener('fetch', (event) => {

console.log(event.request.url);

event.respondWith(

    caches.match(event.request).then((response) => {
    
    return response || fetch(event.request);
    
    })
    
    );

});