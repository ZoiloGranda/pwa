if ('serviceWorker' in navigator) {
 navigator.serviceWorker.register('./sw.js')
 .then(reg => console.log('exito ',reg))
 .catch(err => console.log('error ', err))
}