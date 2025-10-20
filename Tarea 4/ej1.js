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

//Ejercicio 3

let cont = numbers.reduce((acumulador, numero) => {
    acumulador[numero] = (acumulador[numero] || 0) + 1;
    return acumulador;
}, {});

let numeroMasRepetido = null; 
let maxRepeticiones = 0;

for (let numero in cont){
    if (cont[numero] > maxRepeticiones){
        maxRepeticiones = cont[numero];
        numeroMasRepetido = numero;
    }
}
console.log(cont);
console.log("El número más repetido es " + numeroMasRepetido + " y las veces que se ha repetido es " + maxRepeticiones);