//Ejercicio 1
let num = Number(prompt("Introduce la cantidad de valores que introduciras: "));

let numbers = [num];
let numbers2 = [num];
for (let index = 0; index < num; index++) {
    numbers[index] = Number(prompt("Introduce el número: "));
}

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < numbers.length) {
        numbers2[i] = numbers[i];
    } 
    
}
alert("El array ordenado de menor a mayor es: " + numbers2);




/*
//Ejercicio 2
let respuesta = ["Diurno123"];

for (let index = 0; index < 3; index++) {
    let contraseña = prompt("Introduce la contraseña: ");
    if (contraseña == respuesta){
        alert("Contraseña correcta");
        break;
    } else {
        alert("Contraseña incorrecta");
    }
}
*/

