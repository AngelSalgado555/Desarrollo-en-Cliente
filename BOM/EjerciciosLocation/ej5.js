/*
5. Utilizar el confirm para preguntar al usuario si quiere ir a la página anterior (reutiliza algçún ejercicio previo)
*/



let question = confirm("Quieres ir a la página anterior? ");

if (question){
    document.getElementById("parrafo1").innerHTML = "Así que has vuelto :) ";
    history.back();
} else {
    alert("Nos quedamos aquí :/ ");
}