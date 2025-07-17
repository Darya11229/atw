const CACHE_NAME = 'atw-cache-v1';
const ASSETS_TO_CACHE = [
  '/atw/11.html',
  '/atw/22.css',
  '/atw/pl1.html',
  '/atw/eks1.html',
  '/atw/act1.html',
  '/atw/feedback1.html',
  '/atw/эк1.jpg',
  '/atw/экс2(1).jpg',
  '/atw/экс3.jpg',
  '/atw/пл(1).jpg',
  '/atw/пл2.jpg',
  '/atw/пл3.jpg',
  '/atw/ак1.jpg',
  '/atw/ак2.jpg',
  '/atw/ак3.jpg',
  '/atw/icon-192.png',
  '/atw/icon-512.png',
  '/atw/app.js'
];

const CACHE_NAME = 'atw-cache-v1';
const ASSETS_TO_CACHE = [
  '/11.html',
  '/22.css',
  '/pl1.html',
  '/eks1.html',
  '/act1.html',
  '/feedback1.html',
  '/11.jpg',
  '/эк1.jpg',
  '/экс2(1).jpg',
  '/экс3.jpg',
  '/пл(1).jpg',
  '/пл2.jpg',
  '/пл3.jpg',
  '/ак1.jpg',
  '/ак2.jpg',
  '/ак3.jpg',
  '/icon-192.png',
  '/icon-512.png',
  '/app.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
