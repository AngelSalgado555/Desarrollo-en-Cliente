function pasarFahrenheit(celsius){
    do {
        if(isNaN(celsius)){
            alert("Número no valido");
        }
    } while (isNaN(celsius));
    let result = 0; 
    result = (celsius * (9/5)) + 32; 
    return result; 
}

gradosCambiar = -5; 
console.log(pasarFahrenheit(gradosCambiar) + " grados Fahrenheit");