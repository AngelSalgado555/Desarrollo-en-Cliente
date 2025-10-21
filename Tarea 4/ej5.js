let compra = [
    "Azucar",
    "Miel",
    "Harina",
    "Huevos",
    "Carne Agujas",
    "Chuletas",
    "Chorizo"
];

let number; 
do {
    number = Number(prompt("1. Añadir producto\n 2. Eliminar producto\n 3. Borrar la lista de compras\ 4. Salir"));
    if (number == 1){
        let number2 = Number(prompt("1. Agregar al inicio\n 2. Agregar al final"));
        if (number2 == 1){
            let nuevoInicio = prompt("Escribe lo que quieres agregar a la lista: ");
            compra.unshift(nuevoInicio);
            alert(compra);
        } else if (number2 == 2){
            let nuevoFinal = prompt("Escribe lo que quieres agregar a la lista: ");
            compra.push(nuevoFinal);
            alert(compra);
        } else {
            alert("No es una opción valida, introduzca una de las dos opciones validas");
        }
    } else if (number == 2){
        let eliminarProducto = prompt("Escribe el producto que quieres eliminar: ");
        for (let index = 0; index < compra.length; index++) {
            if (eliminarProducto == compra[index]){
                compra.splice(deleteCount, compra[index]);
                alert(compra);
            } else {
                alert("Ese producto no esta en la lista");
                alert(compra);
            }
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