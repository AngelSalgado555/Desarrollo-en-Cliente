let students = new Map();
students.set("Pepe", 4);
students.set("Carlitos", 6);
students.set("Josue", 9);

function aprobados(students){
    let clavesAprobadas = new Array();
    for (let [clave, valor] of students){
        if (valor > 5){
            clavesAprobadas.push(clave + " ha aprobado con: " + valor);
        }
    }
    return clavesAprobadas;
}

console.log(aprobados(students));

function searchByName(name){
    let nameIgual = "";
    const claves = Array.from(students.keys());
    for (let i = 0; i < claves.length; i++) {
        if (claves[i] == name){
            nameIgual = name;
        } 
    }
    return nameIgual;
}

let nombre = "Pepe";
console.log("El nombre es:" + searchByName(nombre));
