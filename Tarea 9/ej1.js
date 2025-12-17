let answer = prompt("Ingresa la etiqueta que quieres ver: ");

answer.replace(/[^a-zA-Z0-9]/g, '');
answer.toLowerCase();

if (answer == "h1"){
    alert(document.getElementById("vh1").textContent);
} else if (answer == "p"){
    alert(document.getElementById("vp").textContent);
} else if (answer == "div"){
    alert(document.getElementById("vdiv").textContent);
} else {
    alert("Opción invalida, introduce una opción valida por favor");
}

