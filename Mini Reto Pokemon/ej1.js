/*
    Dando uso de la API https://pokeapi.co/api vamos a crear un catálogo en js que nos permita buscar (con un input) oo seleccionar (con un select) un pokemon

    Bajo la misma estructura del HTML, mostraremos algún dato de la API, además del nombre (por ejemplo el id o el tipo), además de una imagen. También introduciremos uno de sus sonidos asociados cuando cargue un elemento nuevo (o si preferís cuando se el de a un botón de play)

    Muy importante de nuevo estudiar el JSON que nos provee la API

    Para reproducir un sonido podemos utilizar la estructura: 
*/

let boton1 = document.getElementById("botonPrincipal");

async function mostrarPokemon() {
    try{
        let id = document.getElementById("id").value;
        
        let api = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
        
        let apiJson = await api.json();

        console.log(apiJson);

        let tabla = document.createElement("table");
        tabla.classList.add("tabla");
        let thPrincipal = document.createElement("th");
        thPrincipal.textContent = "ID Pokemon";
        thPrincipal.classList.add("tabla");
        tabla.append(thPrincipal);

        let thSecundario = document.createElement("th");
        thSecundario.textContent = "Nombre";
        thSecundario.classList.add("tabla");
        tabla.append(thSecundario);

        let thTercero = document.createElement("th");
        thTercero.textContent = "Tipo";
        thTercero.classList.add("tabla");
        tabla.append(thTercero);

        let thCuarto = document.createElement("th");
        thCuarto.textContent = "Sonido";
        thCuarto.classList.add("tabla");
        tabla.append(thCuarto);

        let thQuito = document.createElement("th");
        thQuito.textContent = "Imagen";
        thQuito.classList.add("tabla");
        tabla.append(thQuito);


        if (api.ok){
                let tr = document.createElement("tr");
                let td1 = document.createElement("td");
                let td2 = document.createElement("td");
                let td3 = document.createElement("td");
                let td4 = document.createElement("td");
                let td5 = document.createElement("td");

                if (id == apiJson.id){
                    td1.textContent = apiJson.id;
                    tr.appendChild(td1);

                    td2.textContent = apiJson.name;
                    tr.appendChild(td2);

                    for (let i = 0; i < apiJson.types.length; i++) {
                        td3.textContent += apiJson.types[i].type.name + "  ";
                        tr.appendChild(td3);
                    }


                    tr.classList.add("tabla");
                    td1.classList.add("tabla");
                    td2.classList.add("tabla");
                    td3.classList.add("tabla");
                    td4.classList.add("tabla");                    
                    td5.classList.add("tabla");                 

                    let audio = new Audio('https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/' + id +'.ogg');
                    let boton = document.createElement("button");
                    boton.textContent = "Reproducir sonido";
                    td4 = boton;
                    tr.appendChild(td4);
                    boton.addEventListener("click", () => {
                        audio.play();
                    });

                    let img = document.createElement("img");
                    img.src = apiJson.sprites.back_default;
                    td5.appendChild(img);
                    tr.appendChild(td5);
                    tabla.appendChild(tr);

                }
            document.body.append(tabla);
        }
    } catch(error){
        console.log(error);
    }
}

boton1.addEventListener("click", () => {
    mostrarPokemon();
});
