const CACHE_VERSION = 'v5';
const STATIC_CACHE = `notaria-sarmiento-static-${CACHE_VERSION}`;
const RUNTIME_CACHE = `notaria-sarmiento-runtime-${CACHE_VERSION}`;
const ACTIVE_CACHES = [STATIC_CACHE, RUNTIME_CACHE];

const MAX_RUNTIME_ENTRIES = 60;
const MAX_CACHEABLE_BYTES = 2 * 1024 * 1024; // 2 MB límite por archivo en caché dinámica

const urlsToCache = [
  '/offline.html',
  '/',
  '/servicios/',
  '/servicios/poder-simple/',
  '/servicios/autorizacion-menores/',
  '/servicios/venta-inmueble/',
  '/faq/',
  '/horarios/',
  '/contacto/',
  '/como-llegar/',
  '/privacidad/',
  '/terminos/',
  '/manifest.json',
  '/logo.svg',
  '/favicon.ico',
  '/icon-192.svg',
  '/icon-512.svg',
  '/apple-touch-icon.svg',
  '/og-image.svg',
  '/afc/sello-notaria-en-linea-afc.png'
];

// Limita la cantidad de entradas en una caché (FIFO) para evitar crecimiento infinito
async function trimCache(cacheName, maxItems) {
  try {
    const cache = await caches.open(cacheName);
    const keys = await cache.keys();
    if (keys.length > maxItems) {
      const keysToDelete = keys.slice(0, keys.length - maxItems);
      await Promise.all(keysToDelete.map((key) => cache.delete(key)));
    }
  } catch (_) {
    // Ignorar errores de cuota o acceso a caché
  }
}

// Verifica si una ruta estática es apta para guardarse en RUNTIME_CACHE
function shouldCacheRuntimeAsset(url) {
  const { pathname } = url;

  // Excluir archivos pesados o listados completos innecesarios en caché permanente
  if (
    pathname.startsWith('/indices-pdf/') ||
    pathname.startsWith('/data/') ||
    pathname === '/data.json' ||
    pathname === '/data_vehiculo.json'
  ) {
    return false;
  }

  return (
    pathname.startsWith('/_next/static/') ||
    pathname.startsWith('/afc/') ||
    /\.(?:js|css|svg|png|jpg|jpeg|webp|ico|woff2?)$/i.test(pathname)
  );
}

// Verifica que la respuesta sea válida y no supere el tamaño máximo permitido
function isResponseCacheable(response) {
  if (!response || response.status !== 200 || response.type !== 'basic') {
    return false;
  }
  const contentLength = response.headers.get('content-length');
  if (contentLength && Number(contentLength) > MAX_CACHEABLE_BYTES) {
    return false;
  }
  return true;
}

// Instalación del Service Worker: pre-carga tolerante a fallos individuales
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then(async (cache) => {
        await Promise.allSettled(
          urlsToCache.map(async (url) => {
            const response = await fetch(url, { cache: 'reload' });
            if (response.ok) {
              await cache.put(url, response);
            }
          })
        );
      })
      .then(() => self.skipWaiting())
  );
});

// Activación del Service Worker: limpieza de cachés antiguas y toma de control inmediata
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((cacheName) => !ACTIVE_CACHES.includes(cacheName))
            .map((cacheName) => caches.delete(cacheName))
        )
      )
      .then(() => self.clients.claim())
  );
});

// Interceptación de requests
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin) return;

  // 1. Estrategia NETWORK-FIRST para navegaciones (HTML)
  if (event.request.mode === 'navigate' || event.request.destination === 'document') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (isResponseCacheable(response)) {
            const responseToCache = response.clone();
            caches
              .open(RUNTIME_CACHE)
              .then((cache) => cache.put(event.request, responseToCache))
              .then(() => trimCache(RUNTIME_CACHE, MAX_RUNTIME_ENTRIES))
              .catch(() => {});
          }
          return response;
        })
        .catch(async () => {
          const cachedPage = await caches.match(event.request);
          if (cachedPage) return cachedPage;

          const offlineFallback = await caches.match('/offline.html');
          if (offlineFallback) return offlineFallback;

          return new Response(
            '<!DOCTYPE html><html lang="es"><head><meta charset="utf-8"><title>Sin conexión</title></head><body><h1>Sin conexión a internet</h1><p>Por favor verifica tu conexión e intenta nuevamente.</p></body></html>',
            {
              status: 503,
              headers: { 'Content-Type': 'text/html; charset=utf-8' }
            }
          );
        })
    );
    return;
  }

  // 2. Estrategia CACHE-FIRST acotada para recursos estáticos propios
  if (!shouldCacheRuntimeAsset(requestUrl)) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then((response) => {
          if (!isResponseCacheable(response)) {
            return response;
          }

          const responseToCache = response.clone();
          caches
            .open(RUNTIME_CACHE)
            .then((cache) => cache.put(event.request, responseToCache))
            .then(() => trimCache(RUNTIME_CACHE, MAX_RUNTIME_ENTRIES))
            .catch(() => {});

          return response;
        })
        .catch(async () => {
          const fallback = await caches.match(event.request);
          return fallback || Response.error();
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
