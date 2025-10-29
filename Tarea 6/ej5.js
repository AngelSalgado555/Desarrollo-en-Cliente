function contarVocales(palabra){
    contador = 0;
    for (let index = 0; index < palabra.length; index++) {
        if (palabra.includes("a")){
            contador++;
        }
        if (palabra.includes("e")){
            contador++;
        } 
        if (palabra.includes("i")){
            contador++;
        } 
        if (palabra.includes("o")){
            contador++;
        } 
        if (palabra.includes("u")){
            contador++;
        }  
    }
    return contador;
}


world = "Causas".toLowerCase();
array = [world];
console.log("El número de vocales que contiende " + world + " es : " + contarVocales(array));