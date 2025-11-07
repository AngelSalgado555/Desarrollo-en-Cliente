function contarVocales(palabra){
    let contador = 0;
    let vocales = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"];
    for (let index = 0; index < palabra.length; index++) {
        if (vocales.includes(palabra[index])){
            contador++;
        }
    }
    return contador;
}

world = "Causas".toLowerCase();
console.log("El número de vocales que contiende " + world + " es : " + contarVocales(world));