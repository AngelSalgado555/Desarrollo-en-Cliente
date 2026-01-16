let padre = document.getElementById("padre");
let hijo = document.getElementById("hijo");
let nieto = document.getElementById("nieto");

function mouseOverPadre(){
    console.log(padre.textContent);
}

function mouseOverHijo(){
    hijo.style.fontSize = "50px";
}

function focusNieto(){
    console.log(nieto.textContent);
}

padre.addEventListener("mouseover", mouseOverPadre);
hijo.addEventListener("mouseover", mouseOverHijo);
nieto.addEventListener("mouseenter", focusNieto);