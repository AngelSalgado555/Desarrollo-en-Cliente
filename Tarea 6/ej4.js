function esPrimo(valor){
    do {
        if (isNaN(valor) || valor < 0){
            alert("El número no es valido");
        }
    } while (isNaN(valor));
    for (let index = 1; index < valor; index++) {
        if (valor % index == 0){
            return false;
        } else {
            return true;
        }
    }
}

number = Number(prompt("Ingresa un número mayor a 0: "));
console.log(esPrimo(number));