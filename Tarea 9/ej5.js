let medio = prompt("Ingresa el elemento del medio: ");

medioVerdadero = document.getElementById('medio');

let antes = medioVerdadero.previousElementSibling;

let despues = medioVerdadero.nextElementSibling;
if (medio == medioVerdadero.textContent){
    console.log("Antes: " + antes.textContent);
    console.log("Después: " + despues.textContent);
}


