/*
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


/*
//Ejercicio 2
let usuario = ["Diurno"];
let contraseña = ["Diurno123"];

do{
    let num = prompt("Tienes usuario y contraseña? 1.Si 2.No");
    if (num == 1){
        let user = prompt("Introduce tu usuario: ");
        if (user != usuario) {
            alert("Usuario incorrecto");
            continue;
        }
        let pass = prompt("Introduce tu contraseña: ");
        if (pass != contraseña) {
            alert("Contraseña incorrecta");
            continue;
        }
        if (user == usuario && pass == contraseña) {
            alert("Has iniciado sesión correctamente");
            break;
        }
    } else if (num == 2) {
        let newuser = prompt("Crea tu usuario: ");
        let newpass = prompt("Crea tu contraseña: ");
        usuario.push(newuser);
        contraseña.push(newpass);
        alert("Usuario y contraseña creados correctamente");
    }
} while (num != 2);
 

//Ejercicio 3
let notas = [
    4.6, 8.3, 3.9, 5.7, 9.0, 10, 6.7, 2.1
];
let sumatorio = 0;
for (let i = 0; i < notas.length; i++) {
    sumatorio += notas[i];
}
let media = sumatorio / notas.length;
alert("La media de las notas es: " + Math.round(media));

let sumatorioAp = 0; 
let contadorAp = 0; 
for (let i = 0; i < notas.length; i++){
    if (notas[i] > 5){
        sumatorioAp += notas[i];
        contadorAp++;
    }
}
let mediaAp = sumatorioAp / contadorAp; 
alert("La media de las notas aprobadas es: " + Math.round(mediaAp));


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
*/

//Ejercicio 5
let arr1 = [
    12, 45, 55, 88, 90
];

let arr2 = [
    10, 43, 55, 88, 12
];

let contador = 0; 
for (i = 0; i < arr1.length; i++){
    for (j = 0; j < arr2.length; j++){
        if (arr1[i] === arr2[j]){
            contador++;
        }
    }
}

alert("Los números que son iguales son: " + contador);

