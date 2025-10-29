do {
    let number = Number(prompt("Ingresa un número: "));
    if (isNaN(number) || number < 0){
        alert("Ingresa un número válido ");
    } else {
        let numbersDivisibles = [];
        let numbersNoDivisibles = [];
        for (let index = 1; index < number; index++) {
            

        if (sumaDivisibles == number){
            alert("El " + number + " es un número perfecto");
        } else {
            alert("El " + number + " no es un número perfecto");
        }
} while (isNaN(number) || number < 0);