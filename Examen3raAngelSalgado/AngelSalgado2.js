let boton = document.getElementById("boton");
let parrafo = document.getElementById("parrafo");
let estado = localStorage.getItem("boton");

function activado(){
    parrafo.addEventListener("mouseover", () => {
        parrafo.style.color = "red";
    }); 

    parrafo.addEventListener("click", () => {
        parrafo.fontSize = "40px";
    });

    boton.textContent = "Desactivar";

    localStorage.setItem("boton", boton.textContent);
}

function desactivado(){
    boton.addEventListener("click", () => {
        boton.textContent == "Activar";

        localStorage.setItem("boton", boton.textContent);

    });
}


if (estado == "Activar"){
    boton.addEventListener("click", () => {
        activado();
    });
} else if (estado == "Desactivar"){
    desactivado(); 
}
