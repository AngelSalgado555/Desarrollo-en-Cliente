function contarVocales(palabra){
    contador = 0;
    if (palabra.includes("a")){
        contador++;
    } else if (palabra.includes("e")){
        contador++;
    } else if (palabra.includes("i")){
        contador++;
    } else if (palabra.includes("o")){
        contador++;
    } else if (palabra.includes("u")){
        contador++;
    }
    return contador;
}


world = "Hola";
console.log(contarVocales(world));