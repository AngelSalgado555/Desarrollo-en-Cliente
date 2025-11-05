function llamarMenorDiez(number, callback){
    if (number <= 10){
        console.log("La llamada no se ejecutara");
        return number;
    } else {
        return callback(number);
    }
}

function calcularCuadrado(number){
    return number *= number;
}

let number = 11; 
console.log("El número es: " + number + " y el resultado es: " + llamarMenorDiez(number, calcularCuadrado));




