let enlace = document.getElementById("enlace");

enlace.addEventListener("click", (evento) => {
    evento.preventDefault(); //Cancelamos la navegación al ej1.html
    console.log("Se hizo clic, pero no se navego porque se ha cancelado.");
});