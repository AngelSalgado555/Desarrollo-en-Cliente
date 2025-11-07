function segundoGrado(a, b, c){
    let soluciones = [];
    if (isNaN(a, b, c)){
        console.log("Números no validos, por favor revise que los parametros pasados esten bien ");
    }
    let resutl1 = (-b + Math.sqrt(b**2 - 4*a*c)) / (2*a);
    soluciones.push(resutl1);

    let resutl2 = (-b - Math.sqrt(b**2 - 4*a*c)) / (2*a);
    soluciones.push(resutl2);

    return soluciones;
}

a = 1;
b = 2; 
c = 1; 

let total = segundoGrado(a, b, c);


console.log("El resultado de la ecuación de segundo grado con los valores siendo a = " + a + " b = " + b + " c = " + c + " es solución 1: " + total[0] + " y solución 2: "  + total[1] );