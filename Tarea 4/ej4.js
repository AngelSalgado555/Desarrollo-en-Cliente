let names = ["Angel", "Gabriel", "Josue", "Elena", "Pepe"];

let newName; 
newName = prompt("Introduce un nombre: ");

if (names.includes(newName)){
    alert("El nombre " + newName + " ya esta en el array de nombres. ");
} else {
    alert("El nombre " + newName + " no estaba en el array de nombres. ");
}