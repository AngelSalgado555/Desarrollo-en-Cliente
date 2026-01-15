let boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");
let boton3 = document.getElementById("boton3");
let boton4 = document.getElementById("boton4");

function verTexto(boton){
    console.log(boton.textContent);
}

function dobleClick(){
    console.log("No presiones doble vez!!");
}

boton1.addEventListener("click", () => { verTexto(boton1)});
boton2.addEventListener("click", () => { verTexto(boton2)});
boton3.addEventListener("click", () => { verTexto(boton3)});
boton4.addEventListener("click", () => { verTexto(boton4)});

boton1.addEventListener("dblclick", dobleClick);
boton2.addEventListener("dblclick", dobleClick);
boton3.addEventListener("dblclick", dobleClick);
boton4.addEventListener("dblclick", dobleClick);

//La verdad es que no pude hacer este ejercicio, al parecer el problema esta en que el navegador se le complica diferenciar entre el click y el dobleclick y no se que podría hacer para que funcione 
