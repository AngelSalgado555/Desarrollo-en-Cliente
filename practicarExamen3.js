let number = 0;
do {
    number = Number(prompt("Ingresa un número: "));
    if (isNaN(number) || number < 0){
        alert("Ingresa un número válido ");
    } else {
        let sumaDivisores = 0;
        for (let index = 1; index < number; index++) {
            if (number % index === 0){
                sumaDivisores += index; 
            }
        }

        if (sumaDivisores === number){
            alert("El número " + number + " es un número perfecto ");
        } else {
            alert("El número " + number + " no es un número perfecto ");
        }
    }
}while (confirm("Quieres probar otro número? "));
