const CACHE='events-ba9dd02e7a95';
self.addEventListener('install',e=>{self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{const r=e.request,u=new URL(r.url);if(r.method!=='GET'||u.origin!==self.location.origin)return;
e.respondWith(fetch(r).then(x=>{if(x.ok){const c=x.clone();caches.open(CACHE).then(k=>k.put(r,c));}return x;}).catch(()=>caches.match(r).then(h=>h||caches.match('index.html'))));});
