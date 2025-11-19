let students = new Map();
students.set("Pepe", 4);
students.set("Carlitos", 6);
students.set("Josue", 9);

function aprobados(students){
    let clavesAprobadas = new Array();
    const claves = Array.from(students.keys());
    for (let i = 0; i < claves.length; i++) {
       if (claves[i] > 5) {
            clavesAprobadas.push(claves[i]);
       }
    }
    return clavesAprobadas;
}

console.log(aprobados(students));
