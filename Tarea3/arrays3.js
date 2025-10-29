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