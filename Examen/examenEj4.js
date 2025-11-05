//Ejercicio 4
let number = 0;
do {
    number = Number(prompt("Ingresa un número del cual quieres ver el factorial:  "));
    if (isNaN(number) || number < 0){
        alert("Número introducido invalido, ingresa un número válido. ");
    } else {
        let acumulador = number;
        for (let index = 1; index < number; index++) {
            acumulador *= index;
        }

        alert("El número factorial de " + number + " es: " + acumulador);
    }
} while (confirm("Quieres ver el factorial de otro número?: "));