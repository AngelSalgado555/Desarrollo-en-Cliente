function calcularCuadrado(number){
    return number *= number;
}

do {
    let number;
    number = Number(prompt("Ingresa un número al que le quieras hacer el cuadrado: "));
    if (isNaN(number) || number <= 0){
        alert("Ingresa un valor válido por favor. ");
    } else {
        let result = calcularCuadrado(number);
        alert(result);
    }
} while (confirm("Quieres introducir otro valor? "));


