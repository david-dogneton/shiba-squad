const CACHE_NAME = 'shiba-squad-cache-v1';
const CACHED_URLS = [
    '/index.html',
    '/css/style.css',
    '/js/bundle.js',
    '/fonts/Bangers-Regular.ttf',
    '/img/app-icon/app-icon-36.png',
    '/img/app-icon/app-icon-48.png',
    '/img/app-icon/app-icon-72.png',
    '/img/app-icon/app-icon-96.png',
    '/img/app-icon/app-icon-144.png',
    '/img/app-icon/app-icon-192.png',
    '/img/app-icon/app-icon-256.png',
    '/img/app-icon/app-icon-512.png',
    '/img/ayame.png',
    '/img/kimiko.png',
    '/img/tsuyu.png',
    '/img/yutaka.png'
];

self.addEventListener('install', function (event) {
    // Cache everything in CACHED_URLS. Installation fails if anything fails to cache.
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(CACHED_URLS);
        })
    );
});

self.addEventListener("fetch", function (event) {
    var requestURL = new URL(event.request.url);

    // Handle index with "cache, falling back to network with frequent updates" strategy.
    if (requestURL.pathname === "/" || requestURL.pathname === "/index.html") {
        event.respondWith(
            caches.open(CACHE_NAME).then(function (cache) {
                return cache.match("/index.html").then(function (cachedResponse) {
                    var fetchPromise = fetch("/index.html").then(function (networkResponse) {
                        cache.put("/index.html", networkResponse.clone());
                        return networkResponse;
                    });
                    return cachedResponse || fetchPromise;
                });
            })
        );
    // Handle requests for shiba pictures by displaying default image if necessary.
    } else if (requestURL.pathname.startsWith("/img/shiba-")) {
        event.respondWith(
            caches.open(CACHE_NAME).then(function (cache) {
                return cache.match(event.request).then(function (cacheResponse) {
                    return cacheResponse || fetch(event.request).then(function (networkResponse) {
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    }).catch(function () {
                        return cache.match("/img/shiba-default.png");
                    });
                });
            })
        );
        // Handle other requests by using a "cache, falling back to network" strategy.
    } else if (CACHED_URLS.includes(requestURL.href) || CACHED_URLS.includes(requestURL.pathname)) {
        event.respondWith(
            caches.open(CACHE_NAME).then(function (cache) {
                return cache.match(event.request).then(function (response) {
                    return response || fetch(event.request);
                });
            })
        );
    }
});

self.addEventListener("activate", function (event) {
    // Clear previous cache versions when adding a new one.
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (CACHE_NAME !== cacheName && cacheName.startsWith("shiba-squad-cache")) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

