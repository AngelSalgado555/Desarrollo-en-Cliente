const body = document.body;
const titulo = document.getElementById("titulo");

let usuario = localStorage.getItem("usuario");
let theme = localStorage.getItem("theme");

if(!usuario){
    usuario = prompt("Introduce tu usuario: ");
    if (usuario){
        localStorage.setItem("usuario", usuario);
    }
    theme = prompt("Introduce el tema:\n oscuro o claro");
    localStorage.setItem("theme", theme);
} 

if (usuario){
    document.getElementById("usuario").innerHTML = usuario;
}

body.classList.add(theme);
body.classList.remove(theme === "oscuro" ? "claro" : "oscuro");


