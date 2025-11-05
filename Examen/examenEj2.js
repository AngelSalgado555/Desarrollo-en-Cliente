//Ejercicio 2 
//Si introduces un espacio sin más, se introducira como cero y terminara el código, así que eso no lo pude resolver

let numbers = [];
let number = 0;
do {
    number = Number(prompt("Ingresa números positivos y cuando quieras para introduce un cero (0): "));
    numbers.push(number);
    if (isNaN(number) || number < 0){
        alert("Número introducido invalido, ingresa un número válido. ");
    } else {
        if (number == 0){
            let acumulador = 0;
            numbers.pop();
            for (let index = 0; index < numbers.length; index++) {
                if(numbers[index] % 2 == 0){
                    acumulador += numbers[index];
                }
            }
            alert("La suma de todos los números pares que has introducido es: " + acumulador);
        }
    }
} while (number != 0);

