// Service worker mínimo: só existe para o Android oferecer "Instalar app". Não guarda dados da clínica.
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(){ /* deixa tudo ir direto para a internet */ });
