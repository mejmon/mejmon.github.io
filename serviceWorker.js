
const filesToCache = [
    './css/master.css',
    './index.html',
    './js/main.js',
    './js/notification.js',
    './js/simple-helper.js',
    './image/shenzhen.jpg',
    './image/beach.jpg',
    './image/simpsons.jfif',
    './image/icon/favicon-16x16.png',
    './image/icon/favicon-32x32.png',
    './image/icon/android-chrome-192x192.png',
    './manifest.json'
  
  ]
  

  const staticCacheName = 'pages-cache-v11';
  self.addEventListener('install', event => {
    console.log('installera service worker och cache');
    event.waitUntil(
      caches.open(staticCacheName)
      .then(cache => {
        return cache.addAll(filesToCache);
      })
    );
  });
  

  self.addEventListener('fetch', event => {
    console.log('Fetch event for ', event.request.url);
    event.respondWith(
      caches.match(event.request)
      .then(response => {
        if (response) {
          console.log('Hittade ', event.request.url, ' i cache');
          return response;
        }
        console.log('Nätverk begäran/request ', event.request.url);
        return fetch(event.request)
  
        // TODO 4 - Add fetched files to the cache
  
      }).catch(error => {
  
        // TODO 6 - Respond with custom offline page
  
      })
    );
  });

//Register eventlistener for push event
self.addEventListener('push', function (event) {
    const payload = event.data ? event.data.text() : 'no payload';

        event.waitUntil(
            self.ServiceWorkerRegistration.showNotification('Mitt push-up meddelande', {
            
                body: payload,
            })
    );

});


