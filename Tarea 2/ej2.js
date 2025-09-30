var num = Number(prompt("Introduce un número: "));

if (num > 99 && num < 1000){
    var modulo1 = num % 10;
    var modulo2 = num % 1000; 
    var modulo3 = num % 100;

    var suma = modulo1 + modulo2;

    if (suma = modulo3){
        alert("El número del centro es: " + modulo3)
    }

}