
//Ejercicio 1
let num = Number(prompt("Introduce la cantidad de valores que introduciras: "));

let numbers = [];
for (let index = 0; index < num; index++) {
    numbers[index] = Number(prompt("Introduce el número: "));
}
let array = numbers.length;
let temp = 0;
for (let i = 0; i < array - 1; i++) {
    for (let j = 0; j < array - 1 - i; j++) {
        if (numbers[j] > numbers[j + 1]){
        temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
        }
    }
}
console.log("El array de menor a mayor es: " + numbers);














