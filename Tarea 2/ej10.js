//Esta mal 
var num = Number(prompt("Introduce un número para ver si es un número primo: "));
for (let index = 2; index < num; index++) {
    if (num % index == 0){
        alert("El número no es primo");
    }
}