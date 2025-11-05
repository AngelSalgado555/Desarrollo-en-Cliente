//Ejercicio 4
alert("Introduce 10 valores");

let numbers = [];
for (let index = 0; index < 10; index++) {
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
