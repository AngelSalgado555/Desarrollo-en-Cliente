let fechaActual = new Date();
let birthday = prompt("Ingresa tu fecha de cumpleaños en DD/MM/AAAA: ");

let nuevaFecha = birthday.split("/");
let dia = nuevaFecha[0];
let mes = nuevaFecha[1] - 1;
let year = nuevaFecha[2];

const diasSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

let fecha = new Date(year, mes, dia);

let suDay = diasSemana[fecha.getDay()];

let suEdad = fechaActual.getFullYear() - year; 

console.log("Tu día de nacimiento es: " + suDay + " y su edad actual es: " + suEdad);



