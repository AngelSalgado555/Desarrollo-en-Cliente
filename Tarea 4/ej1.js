let numbers = [];
let number; 
do{
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
}while (number != 0);


