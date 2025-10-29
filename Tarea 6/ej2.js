function numeroFactorial(numero){
    result = 1; 
    for (let index = 1; index < numero; index++) {
        result *= index + 1;
    }
    return result;
}

numero = 10; 
console.log("El factorial de " + numero + " es: " + numeroFactorial(numero));

