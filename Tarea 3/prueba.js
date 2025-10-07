let num = Number(prompt("Introduce la cantidad de valores que introducirás: "));
let numbers = [];

for (let index = 0; index < num; index++) {
    numbers[index] = Number(prompt("Introduce el número: "));
}

for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
        if (numbers[j] > numbers[j + 1]) {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}

console.log("El array de menor a mayor es: " + numbers);
