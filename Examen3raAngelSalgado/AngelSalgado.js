let tarea = document.getElementById("tareaNueva");
let boton = document.getElementById("añadir");
let lista = document.getElementById("lista");

function addTask(task){
    let newtask = document.createElement("li");
    newtask.textContent = task.value;

    if (task.value == ""){
        alert("La tarea esta vacia, por favor introduce algo en la tarea"); 
    } else {
    let removeTask = document.createElement("button");
    removeTask.textContent = "Eliminar la tarea " + task.value;

    newtask.appendChild(removeTask);

    removeTask.addEventListener("click", () => {
        lista.removeChild(newtask);
    });

    newtask.addEventListener("click", () => {
        newtask.style.backgroundColor = "red";
    });

    lista.append(newtask);
    }

}

boton.addEventListener("click", () => {
    addTask(tarea);
});
