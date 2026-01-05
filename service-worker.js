const CACHE_NAME = 'mente-eterna-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // 1. Se estiver no cache, retorna do cache
        if (response) {
          return response;
        }

        // 2. Se não, busca na rede
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          (response) => {
            // Verificações básicas de segurança na resposta
            if(!response || response.status !== 200) {
              return response;
            }

            // 3. Salva a nova resposta no cache para uso futuro (offline)
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                // Tenta salvar no cache (ignora erros de quota ou métodos não suportados)
                try {
                   cache.put(event.request, responseToCache);
                } catch (err) {
                   // Ignora erros de cache para requisições não suportadas (ex: POST)
                }
              });

            return response;
          }
        ).catch(() => {
           // Fallback opcional se falhar e não tiver no cache
           // Aqui poderíamos retornar uma página de "Sem conexão", 
           // mas como cacheamos tudo acima, geralmente não é necessário.
        });
      })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});