function sinLimites(){
    let sumatorio = 0;
    for (i = 0; i < arguments.length; i++){
        sumatorio += arguments[i];
    }

    return sumatorio;
}

let result = sinLimites(15, 55, 20, 110, 200, 50);
console.log("El resultado de la suma es: " + result);