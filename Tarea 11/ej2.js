let padre = document.getElementById("padre");
let hijo = document.getElementById("hijo");
let nieto = document.getElementById("nieto");

padre.addEventListener("mouseover", (evento) => {
    console.log("Padre esta haciendo bubbling")
    evento.stopPropagation();
    console.log("Se detuvo la propagación");
});

hijo.addEventListener("mouseover", (evento) => {
    console.log("Hijo esta haciendo bubbling");
    evento.stopPropagation();
    console.log("Se detuvo la propagación");
});

nieto.addEventListener("focus", (evento) => {
    console.log("Nieto no está haciendo bubbling");
});
