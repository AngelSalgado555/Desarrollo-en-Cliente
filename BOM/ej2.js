let usuario = localStorage.getItem("usuario");
    if (!usuario){
        usuario = prompt("¿Cómo te llamas?");
        if (usuario){
            localStorage.setItem("usuario", usuario);
        } else {
            usuario = "invitado";
        }
    }

alert(`¡Hola, ${usuario}!`);