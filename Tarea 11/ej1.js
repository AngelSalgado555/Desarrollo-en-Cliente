// let padre = document.getElementById("padre");
// let hijo = document.getElementById("hijo");
// let nieto = document.getElementById("nieto");

// function mouseOverPadre(){
//     console.log(padre.textContent);
// }

// function mouseOverHijo(){
//     hijo.style.fontSize = "50px";
// }

// function focusNieto(){
//     console.log(nieto.textContent);
// }

// padre.addEventListener("mouseover", mouseOverPadre);
// hijo.addEventListener("mouseover", mouseOverHijo);
// nieto.addEventListener("mouseenter", focusNieto);


// Versión con eventos que NO hacen bubbling (mouseenter)
let padre = document.getElementById("padre");
let hijo = document.getElementById("hijo");
let nieto = document.getElementById("nieto");

// mouseenter NO hace bubbling
// padre.addEventListener("mouseenter", () => console.log("Padre (mouseenter)"));
// hijo.addEventListener("mouseenter", () => {
//     hijo.style.fontSize = "50px";
//     console.log("Hijo (mouseenter)");
// });
// nieto.addEventListener("mouseenter", () => console.log("Nieto (mouseenter)"));

// Pero para demostrar bubbling necesitas eventos que SÍ lo hagan
padre.addEventListener("mouseover", () => console.log("Padre esta haciendo bubbling"));
hijo.addEventListener("mouseover", (evento) => {
    console.log("Hijo esta haciendo bubbling");
});
nieto.addEventListener("focus", (evento) => {
    console.log("Nieto no está haciendo bubbling");
});