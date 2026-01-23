let boton = document.getElementById("boton");
let body = document.body; 
let etiqueta;
let contenedor; 

function addText(){
    contenedor = document.createElement('div');
    etiqueta = document.createElement('p');
    let p = "Este es el nuevo parrafo al presionar el boton";

    contenedor.textContent
    etiqueta.textContent = p;

    etiqueta.setAttribute("id", "tag");

    body.append(etiqueta);
}

boton.addEventListener("click", addText);