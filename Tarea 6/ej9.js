function losMismoDeReves(array){
    let temp = [];
    for (let i = 0; i < array.length; i++) {
        temp[i] = array[i];
    }

    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].split('').reverse().join('');
    }

    let sonIguales = [];
    let noIguales = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === temp[i]){
            sonIguales.push(array[i]);
        } else {
            noIguales.push(temp[i]);
        }
    }
    
    for (let i = 0; i < sonIguales.length; i++) {
        console.log("Las palabras que son palíndromos son: " + sonIguales[i]);
    }

    for (let i = 0; i < noIguales.length; i++) {
        console.log("Las palabras que no son palíndromos son: " + noIguales[i]);
    }
}

let array = ["pablito", "carlos", "arbol", "ana", "oso", "pescado", "oro"];
losMismoDeReves(array);
