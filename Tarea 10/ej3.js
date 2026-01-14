let numero = document.getElementById("numero");
let boton = document.getElementById("boton");

number = 0; 
numero.innerHTML = number;

function aumento(){
    number++;
    numero.innerHTML = number;
}

boton.addEventListener("click", aumento);

