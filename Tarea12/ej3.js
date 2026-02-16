/*
    Crea una función devidirEntreDos que reciba un número y espere un segundo. Si el número es 0 rechaza con "No se puede dividir", si no se resuelve con el número dividido entre dos.
*/
let boton = document.getElementById("boton");
let number = document.getElementById("numero");

function dividir(number){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number === 0){
                reject('No se puede dividir');
            } else {
                resolve('El resultado de dividir ' + number + ' / 2 es = ' + number / 2);
            }
        }, 1000);
    });
}

boton.addEventListener("click", function(e) {
    e.preventDefault();

    let numero = Number(number.value);
    dividir(numero).then(message => {
        alert(message);
    }).catch(message => {
        alert(message);
    });
});