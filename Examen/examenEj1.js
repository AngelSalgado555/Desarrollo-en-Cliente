//Ejercicio 1
//Me falto editar mejor la condición del filter
let numbers = [
    12, 12, 14, 5, 63, 5, 86, 95, 24
];

let numbersNoRepetidos = [];

for (let index = 0; index < numbers.length; index++) {
    numbersNoRepetidos = numbers.filter(num => num !== num);
}

console.log(numbersNoRepetidos);