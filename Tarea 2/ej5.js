var num = Number(prompt("Ingresa el total de números que introduciras: "));

let numbers = [num];
var suma = 0;
for (let index = 1; index <= num; index++) {
    numbers[index] = Number(prompt("Ingresa el número: ")); 
    suma = suma + numbers[index];
}
if (index = num){
        var result = suma / num;
        alert("La media es: " + result)
    }