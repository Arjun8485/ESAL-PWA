const cacheName = 'cache-v1';
const resourcesToPrecache = [
    '/',
    'get_in_touch.html',
    'how_we_work.html',
    'index.html',
    'nav.js',
    'w3.css',
    'what_we_offer.html',
    'who_we_are.html',
    'why_us.html'
];

self.addEventListener('install', event => {
    console.log('Service worker install event!');
    event.waitUntil(
        caches.open(cacheName)
        .then(cache => {
            return cache.addAll(resourcesToPrecache);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.match(event.request)
        .then(cachedResponse => {
            return cachedResponse || fetch(event.request)
        })
    );
});

self.addEventListener('install', event =>  {
    console.log('Install event!');
});

self.addEventListener('activate', event => {
    console.log('Activate event!');
});

self.addEventListener('fetch', event => {
    console.log('Fetch intercepted for:', event.request.url);
});