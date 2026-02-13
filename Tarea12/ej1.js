let segundos = document.getElementById("segundos");
let boton = document.getElementById("boton");
let contenido = document.getElementById("contenido");

function esperarSegundos(segundos){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Han pasado ' + segundos + ' segundos');
        }, segundos * 1000);
    });
}

boton.addEventListener("click", function(e) {
    e.preventDefault();

    let seconds = Number(segundos.value);

    esperarSegundos(seconds).then(message => {
        alert(message);
    });
});