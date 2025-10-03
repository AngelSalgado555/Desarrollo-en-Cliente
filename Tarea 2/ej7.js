//Este no me salío 
var pregunta = prompt("Hola, como estas? " + 
    "1. Bien " +
    "2. Mal " +
    "3. Mas o menos "
);

if (pregunta == 1){
    alert("Me alegro mucho");
} else if (pregunta == 2){
    alert("Lo siento mucho");
} else if (pregunta == 3){
    alert("Espero que mejores");
    var pregunta2 = prompt("Quieres hablar con alguien? " +
        "1. Si " +
        "2. No "
    ); 
    if (pregunta2 == 1){
        alert("Te paso el teléfono de un amigo");
    }
}

