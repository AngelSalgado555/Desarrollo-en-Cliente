let numbers = [];
let contador = 0;
do {
    number = Number(prompt("Introduce números y cuando quieras parar introuduce el cero (0): "));
    numbers.push(number);
    if (number == 0){
        for (let index = 0; index < numbers.length; index++) {
            if (numbers[index] == 0){
                numbers.pop();
            }
        }
        let totalNumeros = numbers.length; 
        alert("El total de números es: " + totalNumeros)
    } else if (isNaN(number) || number < 0){
        alert("Número no valido, introduce un número mayor a cero");
    }
    if (numbers.includes(5)){
        contador = numbers.filter(num => num === 5).length; 
    }
    
} while (number != 0);

alert("Hay " + contador + " cincos en el array");

