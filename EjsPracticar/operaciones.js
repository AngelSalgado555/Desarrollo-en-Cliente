function sumar(lista){
    let ret = 0;
    for (let i = 0; i < lista.length; i++) {
        ret = ret + lista[i];   
    }
    return ret;
}

function filtrarPares(lista){
    let retPares = [];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 == 0){
            retPares[i] = lista[i];
        }
        
    }

    return retPares;
}

function aplicarOperacion(lista, callback){
    let res = [];
    for (let i = 0; i < lista.length; i++) {
        res.push(callback(lista[i]));   
    }
    return res;
}

let prueba = [2, 8, 12, 49, 21, 30];
console.log(aplicarOperacion(prueba, sumar));
