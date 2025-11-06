function segundoGrado(a, b, c){
    let soluciones = [];
    if (a <= 0 || b <= 0 || c <= 0){
        console.log("Números no validos, por favor revise que los parametros pasados esten bien ");
    }
    let resutl1 = (-b + Math.sqrt(b**2 - 4*a*c)) / (2*a);
    soluciones[0] = resutl1;

    let resutl2 = (-b - Math.sqrt(b**2 - 4*a*c)) / (2*a);
    soluciones[1] = resutl2; 

    return soluciones;
}

a = 10;
b = 52; 
c = 32; 

let total1 = segundoGrado(a, b, c)[0];
let total2 = segundoGrado(a, b, c)[1];

console.log("El resultado de la ecuación de segundo grado con los valores siendo a = " + a + " b = " + b + " c = " + c + " es solución 1: " + total1 + " y solución 2: "  + total2 );