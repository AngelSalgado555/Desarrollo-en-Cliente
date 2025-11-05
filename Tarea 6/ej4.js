function esPrimo(valor){
    if (isNaN(valor) || valor <= 1){
        alert("El número no es valido");
        return false;
    }
    for (let index = 2; index < valor; index++) {
        if (valor % index === 0){
            return false;
        }
    }
    return true;
}

number = Number(prompt("Ingresa un número mayor a 0: "));
console.log(esPrimo(number));