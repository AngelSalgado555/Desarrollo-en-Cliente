let body = document.body;

let oscuro = document.getElementById("botonOscuro");
let claro = document.getElementById("botonClaro");

function themeBlack(){
    body.className = "oscuro";
}

function themeWhite(){
    body.className = "claro";
}

oscuro.addEventListener("click", themeBlack);
claro.addEventListener("click", themeWhite);