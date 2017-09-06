// sw.js
self.addEventListener('install', e => {
 e.waitUntil(
   // after the service worker is installed,
   // open a new cache
   caches.open('my-pwa-cache').then(cache => {
     // add all URLs of resources we want to cache
     return cache.addAll([
       '/',
       '/index.html',
       '/2.html',
         '/3.html',
         '/4.html',
         '/5.html',
         '/jb.html',
         '/basic.css',
         '/basic.js',
         '/custom1.css',
         '/custom1.js',
         '/custom2.css',
         '/custom2.js',
         '/custom3.css',
       '/Bell-icon.png',
       '/team.png',         
       '/logo.png',
     ]);
   })
 );
});