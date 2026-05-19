const CACHE_NAME = 'notaria-sarmiento-v4';
const urlsToCache = [
  '/',
  '/servicios',
  '/servicios/poder-simple',
  '/servicios/autorizacion-menores',
  '/servicios/venta-inmueble',
  '/faq',
  '/horarios',
  '/contacto',
  '/como-llegar',
  '/privacidad',
  '/terminos',
  '/manifest.json',
  '/logo.svg',
  '/favicon.ico',
  '/icon-192.svg',
  '/icon-512.svg',
  '/apple-touch-icon.svg',
  '/og-image.svg'
];

// Instalación del Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

// Activación del Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Interceptación de requests
self.addEventListener('fetch', (event) => {
  // 1. Estrategia NETWORK-FIRST para navegaciones (HTML)
  // Esto asegura que la gente SIEMPRE reciba la versión más reciente construida por Next.js
  if (event.request.mode === 'navigate' || event.request.destination === 'document') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Guardar copia fresca en caché
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return response;
        })
        .catch(() => {
          // Si el usuario no tiene internet, devolver de la caché o mostrar offline
          return caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || caches.match('/offline.html');
          });
        })
    );
    return;
  }

  // 2. Estrategia CACHE-FIRST para recursos estáticos (CSS, JS de Next.js, Imágenes)
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request)
          .then((response) => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(() => {
            return Response.error();
          });
      })
  );
});

// Manejo de mensajes
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Notificaciones push
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'Nueva notificación de la Notaría Sarmiento Moreno',
    icon: '/icon-192.svg',
    badge: '/icon-192.svg',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Ver más',
        icon: '/icon-192.svg'
      },
      {
        action: 'close',
        title: 'Cerrar',
        icon: '/icon-192.svg'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Notaría Sarmiento Moreno', options)
  );
});

// Manejo de clics en notificaciones
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
}); 