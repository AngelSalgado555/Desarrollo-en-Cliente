function numeroFactorial(numero){
    resultados = [];
    for (let index = 1; index < numero; index++) {
        resultados[index] = "Le numero es " + (numero - index) + " y el resultado es: " + numero * (numero - index);
    }
    return resultados;
}

numero = 5; 
console.log(numeroFactorial(numero));

