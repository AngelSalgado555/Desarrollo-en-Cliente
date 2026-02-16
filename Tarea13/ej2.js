/*
    Crea una función llamada doblar que reciba un número como parámetro,
    devuelva una promesa y espere un segundo, resolviendo con el número
    mutiplicado por dos si el número es positivo y rechazando con “Utiliza solo
    números positivos” si no. Crea una función run() marcada como async que
    llame a doblar(5) usando await, y vuelve a doblar el resultado volviendo a
    llamar a la función doblar para luego imprimir en consola “Resultado: X”
*/

let boton = document.getElementById("boton");

function doblar(number){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number === 0 || number < 0 ){
                reject('Utiliza solo números positivos');
            } else {
                resolve('Resultado: ' + number * 2);
            }
        }, 1000);
    });
}

async function run(){
    let resultado = await doblar(5);
    console.log(resultado);
}

boton.addEventListener("click", () => {
    run();
});