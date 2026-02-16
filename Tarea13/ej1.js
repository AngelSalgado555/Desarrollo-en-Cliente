/*
    Crear una función llamada hacerTarea que devuleva una promesa, espera un segundo y se resulva con el mensaje "Tarea completada". Crea una función run() marcada como async que llame a hacerTarea usando await e imprima por consola el mensaje que devuelve.
*/
let boton = document.getElementById("boton");

function hacerTarea(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Tarea completada');
        }, 1000);
    });
}

async function run(){
    try {
        let tarea = await hacerTarea();
        console.log(tarea);
    } catch (error){
        console.error("El error es: " + error);
    }
    
}

boton.addEventListener("click", function(e) {
    e.preventDefault();

    run();
});