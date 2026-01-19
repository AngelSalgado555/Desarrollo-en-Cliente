let numero = document.getElementById("numero");
let boton = document.getElementById("boton");

let boton1 = document.getElementById("evento"); 

number = 0; 
numero.innerHTML = number;

const evento = new Event("click");

function aumento(){
    number++;
    numero.innerHTML = number;

    if (number == 10){
        boton1.dispatchEvent(evento);
        console.log("El contador llego a diez");
    }
}

boton.addEventListener("click", aumento);


