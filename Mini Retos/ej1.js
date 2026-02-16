/*
    Hay que crear una función llamada obtenerLibros que utilice fetch y await para obtener los datos de la API y convertir la respuesta a JSON, para poder mostrar los títulos de los libros

    Bonus extra: utilizando lo que sabemos de manejo de DOM, crear una tabla con título y año de cada libro

    TIP: Podemos utilizar alguna extensión('.eje. JSON Viewer Pro en Chrome) para ver la estructura del JSON
*/
async function obtenerLibros(){
    try {
        let response = await fetch("https://stephen-king-api.onrender.com/api/books");
        
        let responseJson = await response.json();

        let tabla = document.createElement("table");
        tabla.classList.add("tabla");
        let thPrincipal = document.createElement("th");
        thPrincipal.textContent = "Titulo";
        thPrincipal.classList.add("tabla");
        tabla.append(thPrincipal);

        let thSecundario = document.createElement("th");
        thSecundario.textContent = "Año";
        thSecundario.classList.add("tabla");
        tabla.append(thSecundario);

        if (response.ok){
            for (let i = 0; i < responseJson.data.length; i++) {
                let tr = document.createElement("tr");
                let td1 = document.createElement("td");
                td1.textContent = responseJson.data[i].Title;
                tr.appendChild(td1);

                let td = document.createElement("td");
                td.textContent = responseJson.data[i].Year;
                tr.appendChild(td);
                tabla.appendChild(tr);

                tr.classList.add("tabla");
                td1.classList.add("tabla");
                td.classList.add("tabla");
            }
            
            document.body.append(tabla);
        }
    } catch (error){
        console.error(error);
    }
}

obtenerLibros();