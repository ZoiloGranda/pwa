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
 
})

// se activa cuando se queda sin conexion
self.addEventListener('activate',e=>{
 
})

// para traerse los recursos, los compara con los que estan en cache
self.addEventListener('fetch',e=>{
 
})