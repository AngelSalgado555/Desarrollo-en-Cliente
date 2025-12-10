class Vehiculo{
    constructor (marca, modelo, year){
        this.marca = marca, 
        this.modelo = modelo,
        this.year = year
    }

    descripcion(){
        let data = "La marca es: " + this.marca + " el modelo es: " + this.modelo + " y es del año: " + this.year;

        console.log(data);
    }

    edad(){
        let fecha = new Date();
        let age = fecha.getFullYear() - this.year; 
        
        return age;
    }


}


class Auto extends Vehiculo{
    constructor(marca, modelo, year, puertas){
        super(marca, modelo, year);

        this.puertas = puertas;

    }

    descripcion(){
        let data = "La marca es: " + this.marca + " el modelo es: " + this.modelo + ", es del año: " + this.year + " y cuenta con " + this.puertas + " puertas";

        console.log(data);
    }

    edad(){
        let fecha = new Date();
        let age = fecha.getFullYear() - this.year; 
        
        return age;
    }

}

let auto1 = new Auto("Toyota", "Corolla", 2011, 5);

let auto2 = new Auto("Audi", "A4", 2020, 5);

auto1.descripcion();
auto2.descripcion();

console.log(auto1.edad());
console.log(auto2.edad());