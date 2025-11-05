function sinLimites(...numbers){
    let sumatorio = 0;
    for (i = 0; i < numbers.length; i++){
        sumatorio += numbers[i];
    }

    return sumatorio;
}

let result = sinLimites(23 , 23 , 12, 2, 6 , 9 ,3, 0 , 8, 73, 823, 83, 2109 , 21);
console.log("El resultado de la suma es: " + result);