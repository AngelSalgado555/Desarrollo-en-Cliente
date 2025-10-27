

//Rehacer este ejercicio de forma más clara (Esta parte esta ayudada con IA)
let set1 = new Set();
let set2 = new Set();
let set3 = new Set();

let allSets = new Set([set1, set2, set3]);

number = 0;
for (let innerSet of allSets){
    for (let index = 0; index < 3; index++) {
        let nuevoValor = Number(prompt("Introduce el valor: "));
        innerSet.add(nuevoValor);
    }
}

let contador = new Map();

for (let innerSet of allSets){
    for (let number of innerSet){
        contador.set(number, (contador.get(number) || 0) + 1);
    }
}

for (let [clave, cantidad] of contador){
    if (cantidad > 1){
        console.log("El número " + clave + " salio en " + cantidad + " sets. ");
    } else {
        console.log("El número no se repite");
    }
}

