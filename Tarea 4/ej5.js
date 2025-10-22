let compra = [
    "azucar",
    "miel",
    "harina",
    "huevos",
    "carne molida",
    "chuletas",
    "chorizo"
];

let number; 
do {
    number = Number(prompt(" 1. Añadir producto\n 2. Eliminar producto\n 3. Borrar la lista de compras\n 4. Salir"));
    if (number == 1){
        let number2 = Number(prompt("1. Agregar al inicio\n 2. Agregar al final"));
        if (number2 == 1){
            let nuevoInicio = prompt("Escribe lo que quieres agregar a la lista: ");
            compra.unshift(nuevoInicio.toLowerCase());
            alert(compra);
        } else if (number2 == 2){
            let nuevoFinal = prompt("Escribe lo que quieres agregar a la lista: ");
            compra.push(nuevoFinal.toLowerCase());
            alert(compra);
        } else {
            alert("No es una opción valida, introduzca una de las dos opciones validas");
        }
    } else if (number == 2){
        let encontrado = false; 
        let eliminarProducto = prompt("Escribe el producto que quieres eliminar: ").toLowerCase();
        for (let index = 0; index < compra.length; index++) {
            if (eliminarProducto == compra[index]){
                encontrado = true;
                compra = compra.filter(producto => producto.toLowerCase() !== eliminarProducto);
                alert(compra);
                break;
            }
        }
        if (!encontrado){
            alert(eliminarProducto + " no esta en la lista ");
            alert(compra);
        }
    } else if (number == 3){
        compra.length = [];
        alert(compra);
    } else if (number == 4){
        alert("Saliendo...");
    } else {
        alert("Opción invalida, elija otra por favor");
    }
} while (number != 4);