;
//asignar un nombre y versión al cache
const CACHE_NAME = 'v1_cache_programador_fitness',
urlsToCache = [
  './',
  'https://fonts.googleapis.com/css?family=Raleway:400,700',
  'https://fonts.gstatic.com/s/raleway/v12/1Ptrg8zYS_SKggPNwJYtWqZPAA.woff2',
  'https://use.fontawesome.com/releases/v5.0.7/css/all.css',
  'https://use.fontawesome.com/releases/v5.0.6/webfonts/fa-brands-400.woff2',
  './style.css',
  './script.js',
  './img/ProgramadorFitness.png',
  './img/favicon.png'
]

self.addEventListener('install',e=>{
 e.waitUntil(
  caches.open(CACHE_NAME)
  .then(cache => {
   return cache.addAll(urlsToCache)
   .then(()=> self.skipWaiting())
  })
  .catch(err => console.log('cache error' , err))
 )
})

// se activa cuando se queda sin conexion
self.addEventListener('activate',e=>{
 const cacheWhitelist = [CACHE_NAME]
 e.waitUntil(
  caches.keys()
  .then(cachesNames =>{
   cachesNames.map(cacheName =>{
    //eliminar del cache lo que cambio en el servidor
    if (cacheWhitelist.indexOf(cacheName) === -1) {
     return caches.delete(cacheName)
    }
   })
  })
  //activar el cache actual
  .then(()=>self.clients.claim())
 )
})

// para traerse los recursos, los compara con los que estan en cache
self.addEventListener('fetch',e=>{
 //responde con el recurso en cache o desde el servidor
 e.respondWith(
  caches.match(e.request)
  .then(res=>{
   if(res){
    //si esta en el cache retorna esa
    return res
   }
   //si no, hace una peticion al servidor y retorna eso 
   return fetch(e.request)
  })
 )
})