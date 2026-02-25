/*
    La web tendrá un input y un botón que llamen a Animals API con el animal introducido. Por ejemplo:  https://api.api-ninjas.com/v1/animals?name=cheetah

    Esta API nos devuelve un array de objetos animal que contengan la palabra buscada, por lo que generaremos un botón con el nombre de cada uno de los animales que encuentre.

    A ese botón le asociaremos un evento que busque tres datos del animal elegido y los muestre.
 */

// Mi Api Key: tDrBZAkXtlMsm59bmzNRCk03YzaBOoieKmxRK6e0

let botonPrincipal = document.getElementById("boton1");

function mostrarDatos(animal){
    let lista = document.createElement("ul");
    localStorage.setItem("lista", lista);

    localStorage.getItem("lista");

    let nombreLista = document.createElement("li");
    nombreLista.textContent = "3 datos de " + animal["name"];

    let dato0 = document.createElement("li");
    let dato1 = document.createElement("li");
    let dato2 = document.createElement("li");

    dato0.textContent = "Su dieta es: " + animal["characteristics"]["diet"];
    dato1.textContent = "Su habitat normalmente es: " + animal["characteristics"]["habitat"];
    dato2.textContent = "Su color es: " + animal["characteristics"]["color"];

    lista.appendChild(nombreLista);
    lista.appendChild(dato0);
    lista.appendChild(dato1);
    lista.appendChild(dato2);

    document.body.appendChild(lista);

    //No supe sustituir los datos de la lista ya creada, así que aun conserva ese defecto, pense en usar localStorage pero no se me ocurrio nada más

}

async function animal() {
    try{
        let palabra = document.getElementById("palabra").value;

        let api = await fetch("https://api.api-ninjas.com/v1/animals?name=" + palabra , {
            headers: {
                "X-Api-Key": "tDrBZAkXtlMsm59bmzNRCk03YzaBOoieKmxRK6e0"
            }
        });

        let apiJson = await api.json();
        
        console.log(apiJson);

        if (api.ok){
            for (let i = 0; i < apiJson.length; i++) {
                let boton = document.createElement("button");

                boton.textContent = apiJson[i].name;

                document.body.append(boton);

                boton.addEventListener("click", () => {
                    mostrarDatos(apiJson[i]);
                });
            }
        }
        
    } catch(error){
        console.log(error);
    }
}

botonPrincipal.addEventListener("click", () => {
    animal();  
});

// let algo = document.createElement("h2");

// algo.textContent = "Hola";

// document.body.append(algo);

