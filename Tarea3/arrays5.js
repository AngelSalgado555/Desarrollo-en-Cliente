//Ejercicio 5
let arr1 = [
    12, 45, 55, 88, 90, 46, 76, 99
];

let arr2 = [
    10, 43, 55, 88, 12, 76, 42, 99
];

let contador = 0; 
let contadorB = 0;
for (i = 0; i < arr1.length; i++){
    for (j = 0; j < arr2.length; j++){
        if (arr1[i] === arr2[j]){
            contador++;
            if (i === j){
                contadorB++;
            }
        }
    }
}
alert("Los números que son iguales son: " + contador + " y las posiciones iguales son: " + contadorB);