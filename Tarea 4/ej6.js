let arrayPrecios = [
    50, 500, 30, 10, 4, 60, 8000, 13
];

let porcentaje; 
porcentaje = prompt("Introduce el porcentaje de descuento que quieres aplicar: ");


let acumulador = [];

for (let index = 0; index < arrayPrecios.length; index++) {
    let nuevoNumero; 
    if (porcentaje > 0){
        nuevoNumero = (arrayPrecios[index] * porcentaje) / 100; 
        acumulador[index] = arrayPrecios[index] - nuevoNumero; 
    }
}

console.log(acumulador);