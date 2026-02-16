/*
    Crea una función doblarNumero que reciba un número y devuelva una promesa, de forma que espere un segundo y resuelva con el número multiplicado por dos.
*/
let boton = document.getElementById("boton");
let number = document.getElementById("numero");

function multiplicar(number){
    if (number <= 0){
        alert("El número es invalido, por favor introduzca un número valido. ");
    } else {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('El resultado de multiplicar ' + number + ' x 2 es = ' + number * 2);
            }, 1000);
        });
    }
}

boton.addEventListener("click", function(e) {
    e.preventDefault();

    let numero = Number(number.value);
    multiplicar(numero).then(message => {
        alert(message);
    });
});