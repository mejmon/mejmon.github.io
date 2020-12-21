const cacheName = "pwa-first-v3";
const filesToCache = [
    'http://127.0.0.1:5500/pwa/pwa-demo/index.html',
    'http://127.0.0.1:5500/pwa/pwa-demo/js/main.js',
    './image/deling.png'
];

self.addEventListener('install', function (e) {
    console.log("INSTALL");
    e.waitUntil(
        caches.open(cacheName)
            .then(function (cache) {
                return cache.addAll(filesToCache);
            })
    );
});
//HÄmta från Cache. bara det som är nytt. Mellanlagrar cache. 
self.addEventListener('fetch', function (e) {
    console.log("FETCH");
    e.respondWidth(caches.match(e.request)
        .then(function (response) { //promise
            return response || fetch(e.request);
        }))
})

//Register eventlistener for push event
self.addEventListener('push', function (event) {
    const payload = event.data ? event.data.text() : 'no payload';

        event.waitUntil(
            self.ServiceWorkerRegistration.showNotification('Mitt push-up meddelande', {
                body: payload,
            })
    );

});
