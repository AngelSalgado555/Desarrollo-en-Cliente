let body = document.body;
let boton; 
let botones = 1; 

let aceptar; 

do {
    aceptar = confirm("Quieres hacer " + botones + " botones? ");
    if (!aceptar){
        botones++;
    } else {
        for (let i = 0; i < botones; i++) {
            boton = document.createElement("button");
            boton.textContent = "Este es el botón " + i; 

            boton.addEventListener("click", function () {
                alert(this.textContent);
            });
            
            body.append(boton);
        }
    }
} while (!aceptar);