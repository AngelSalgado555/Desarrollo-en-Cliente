function sumar(...lista){
    let ret = 0;
    for (let i = 0; i < lista.length; i++) {
        ret = lista[i];
        
    }

    return ret;
}

function filtrarPares(...lista){
    let retPares = [];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 == 0){
            retPares[i] = lista[i];
        }
        
    }

    return retPares;
}
