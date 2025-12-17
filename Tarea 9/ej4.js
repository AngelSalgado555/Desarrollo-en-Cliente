let consulta = prompt("Donde lo quieres añadir? Arriba o Abajo?: ");

let elemento = prompt("Introduce el elemento que quieres agregar a la lista: ");
consulta.toLocaleLowerCase();
elemento.toLocaleLowerCase();

if (consulta == "arriba"){
    let parent = document.getElementById("lista");
    let referencia = document.getElementById("referencia1");
    let li1 = document.createElement('li');
    li1.textContent = elemento;
    parent.insertBefore(li1, referencia);
} else if (consulta == "abajo"){
    let parent = document.getElementById("lista");
    let referencia = document.getElementById("referencia2");
    let li2 = document.createElement('li');
    li2.textContent = elemento;
    referencia.after(li2);
} else {
    alert("Consulta no valida");
}

