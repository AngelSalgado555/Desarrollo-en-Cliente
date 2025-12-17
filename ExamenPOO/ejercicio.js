
class Producto{
    constructor(id, nombre, categoria, precio, cantidad){
        this.id = id; 
        this.nombre = nombre;
        this.categoria = categoria; 
        this.precio = precio;
        this.cantidad = cantidad;
    }

    actualizarCantidad(nuevaCantidad){
        this.cantidad = nuevaCantidad;

        console.log("Se ha actualizado la cantidad del producto, ahora es: " + this.cantidad);
        //Le ha añadido el console.log para que quedase más prensentable 
    }

    obtenerValorTotal(){
        let result = 0;
        result = this.precio * this.cantidad;

        return "El valor total de este producto es: " + result;
        //Y aquí he añadido el texto al return para que también quedase más presentable 
    }
}


class Almacen{
    constructor(productos){
        this.productos = productos = [];
    }

    agregarProducto(producto){
        this.productos.push(producto);
    }

    eliminarProducto(id){
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].id == id){
                delete this.productos[i];
            }
        }
    }

    buscarProducto(id){
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].id == id){
                return this.productos[i];
            } else {
                return null;
            }
            
        }
    }
}

let p1 = new Producto(2, "Avena", "Granos", 20, 5);
let p2 = new Producto(1, "Leche", "Liquido", 10, 8);

p1.actualizarCantidad(17);
let valorTotal = p1.obtenerValorTotal();
console.log(valorTotal);


let lista = [
    new Producto(23, "Mango", "Frutas", 55, 9),
    new Producto(52, "Papel", "Productos Personales", 78, 16)
];

let a1 = new Almacen(lista);

a1.agregarProducto(new Producto(10, "Mandarinas", "Frutas", 20, 15));
a1.agregarProducto(new Producto(6, "Naranjas", "Frutas", 12, 10));
a1.agregarProducto(new Producto(7, "Limones", "Frutas", 7, 80));

let productoABuscar = a1.buscarProducto(10);
let producto2 = a1.buscarProducto(23);
let producto3 = a1.buscarProducto(7);

console.log(productoABuscar);
console.log(producto2);
console.log(producto3);

//La elaboración del constructor se que esta mal y la implementación de nuevos productos también esta mal ya que no me hace la busqueda de otros productos que no sea el de las "Mandarinas"
