//Ejercicio 5
//Quise que el número se hiciese un array pero que cada digito fuese un posición y así contar el número de 
//posiciones pero no pude.
let number = 0;
do {
    number = Number(prompt("Ingrese un número: "));
    if (isNaN(number)){
        alert("Valor incorrecto, ingrese un número.");
    } else {
        let numbers = [number.toString()];
        let numbers2 = [number.toString()];
        let contador = 0;
        for (let index = 0; index < numbers.length; index++) {
            if (numbers[index] == numbers2[index]){
                contador++;
            }
        }
        alert("El número " + number + " tiene " + contador + " dígitos");
    }
} while (confirm("Quieres ingresar otro valor?: "));