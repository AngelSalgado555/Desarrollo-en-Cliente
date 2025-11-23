// Crear un objeto person con nombre, edad y ciudad. Acceder  asus porpiedades con . y con []. Cambiar el valor 
// de edad y agregar un nueva propiedad profesión

//Ejercicio 1
class Persona {
    constructor (name, age, city){
        this.name = name;
        this.age = age;
        this.city = city;
        this.profession = null;

    }

    changeAge(cambio){
        this.age = cambio;
    }

    addPropiedad(profession){
        this.profession = profession;
    }

    saludar(){
        console.log("Hola, soy " + this.name);
    }

    birthday(){
        this.age = this.age + 1;
    }

    deleteCity(){
        console.log("La ciudad es: " + this.city);
        delete(this.city);
        console.log("La ciudad es: " + this.city);
    }
}


let angel = new Persona("Angel", 15, "Madrid");

angel.changeAge(21);

angel.addPropiedad("Programador");

angel.saludar();
angel.birthday();
console.log(angel.age);

angel.deleteCity();
