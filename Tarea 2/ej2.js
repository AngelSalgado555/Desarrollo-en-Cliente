var num = Number(prompt("Introduce un número: "));

var contar = num.toString().length;
//Este no me salío 
if (contar == 4){
    var last = num % 10;
    var mid =  num % 1000;
    var mid = (mid - last) / 10;
    var first = num  - (mid - last) / 1000; 

    if (first + last == mid){
        alert("El número es magico");
    } else {
        alert("El número no es magico");
    }
}