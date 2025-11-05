//Ejercicio 3
let tablaMulti = [];
let number = 0;
number = Number(prompt("Ingresa el número de la tabla de multiplicar que quieres ver: "));
for (let index = 1; index <= 10; index++) {
    tablaMulti[index] = number * index;
}

console.log(tablaMulti);