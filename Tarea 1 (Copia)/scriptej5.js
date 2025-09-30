var num = Number(prompt("Introduce la nota que haz sacado en el examen"));

if (num < 5){
    alert("Estas suspenso");
} else if (num == 5){
    alert("Estas aprobado justo");
} else if (num > 5){
    alert("Tienes una nota notable");
}