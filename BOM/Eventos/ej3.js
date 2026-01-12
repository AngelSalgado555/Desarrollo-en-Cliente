document.body.addEventListener("click", (evento)=> {
    console.log("El usuario hizo click en " + evento.screenX + " de la posición del eje X y en el eje Y fue en: " + evento.screenY);
});