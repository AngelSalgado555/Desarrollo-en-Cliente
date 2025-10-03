//Lo entendí hasta que lo resolvimos en clase
var num = Number(prompt("Introduce un número: "));

while (num >= 10){
    var sum = 0;
    while (num > 0){
        sum = sum + (num % 10);
        num = Math.floor(num / 10);
    }
    num = sum;
}
alert("El número es: " + num);

