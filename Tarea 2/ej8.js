do {
    var pregunta = Number(prompt("Que quieres hacer? "));
    prompt("1. Sumar");
    prompt("2. Restar");
    prompt("3. Dividir");
    prompt("4. Multiplicar");
    prompt("5. Salir");

    if (pregunta == 1){
        var num1 = Number(prompt("Introduce los números que quieres sumar: "));
        var num2 = Number(prompt());

        var result = num1 + num2;
        alert("El resultado de la suma es: " + result);
    }
} while (pregunta == 5);