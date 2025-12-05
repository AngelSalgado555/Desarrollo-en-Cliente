/*
3. Un prompt que pregunte si cambiar de página para llevarnos a otro .html 
*/
let answer = prompt("¿Quieres cambiar de página? (Si o No)").toLocaleLowerCase();

if (answer == "si"){
    location.assign("practicarGrid.html");
} else if (answer == "no"){
    alert("Entonces nos quedamos aquí :/ ");
} else {
    alert("No es una respuesta válida");
}

// setInterval(() => {
//             location.assign("./index.html");
// }, 5000);