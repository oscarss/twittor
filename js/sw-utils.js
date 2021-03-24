

function actualizaCacheDinamico(dynamicCache, req, res){
    
    if(res.ok){
        caches.open(dynamicCache).then(cache => {
            cache.put(req, res.clone());
            return res.clone();
        });
    } else {//aquí ya falló el caché y la network... hay poco que hacer
        return res;
    }
}