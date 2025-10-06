
//Ejercicio 1
let num = Number(prompt("Introduce la cantidad de valores que introduciras: "));

let numbers = [num];
for (let index = 0; index < num; index++) {
    numbers[index] = Number(prompt("Introduce el número: "));
}
let array = numbers.length;
let temp = 0;
for (let i = 0; i < array - 1; i++) {
    for (let j = 0; j < array; j++) {
        if (numbers[i] > numbers[j + 1]){
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

/*
//Ejercicio 3
let notas = [
    5.6, 8.3, 3.9, 5.7, 9.0, 10, 6.7, 2.1
];
let sumatorio = 0;
for (let i = 0; i < notas.length; i++) {
    sumatorio += notas[i];
}
let media = sumatorio / notas.length;
alert("La media de las notas es: " + media);

//Ejercicio 4
*/
