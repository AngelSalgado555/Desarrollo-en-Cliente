let set1 = new Set();
let set2 = new Set();
let set3 = new Set();

let allSets = new Set([set1, set2, set3]);

for (let index = 0; index < allSets.size; index++) {
    for (let index = 0; index < 3; index++) {
        number = Number(prompt("Ingresa números al set: "));
        allSets[index].add(number);
    }
}

for (let index = 0; index < allSets.size; index++) {
    number = Number("Qué número quieres ver que no se repita en ningún set?: ");
    if (!allSets[index].has(number)){
        alert("Este número no se repite en los distintos sets ");
    } else {
        alert("Este número esta en algún otro set ");
    }
}

console.log(allSets);