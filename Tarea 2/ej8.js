do {
    var pregunta = Number(prompt("Que quieres hacer? " + 
    "1. Sumar " +
    "2. Restar " +
    "3. Dividir " +
    "4. Multiplicar " +
    "5. Salir"
    ));

    if (pregunta == 1){
        var num1 = Number(prompt("Introduce los números que quieres sumar: "));
        var num2 = Number(prompt());

        var result = num1 + num2;
        alert("El resultado de la suma es: " + result);
    } else if (pregunta == 2){
        var num1 = Number(prompt("Introduce los números que quieres restar: "));
        var num2 = Number(prompt());   

        var result = num1 - num2;
        alert("El resultado de la resta es: " + result);
    } else if (pregunta == 3){
        var num1 = Number(prompt("Introduce los números que quieres dividir: "));
        var num2 = Number(prompt());

        var result = num1 / num2;
        alert("El resultado de la división es: " + result);
    } else if (pregunta == 4){
        var num1 = Number(prompt("Introduce los números que quieres multiplicar: "));
        var num2 = Number(prompt());

        var result = num1 * num2;
        alert("El resultado de la multiplicación es: " + result);
    } else if (pregunta == 5){
        alert("Has salido del programa");
    } else {
        alert("Opción no válida");
    }
} while (pregunta != 5);