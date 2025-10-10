//Ejercicio 2
let usuario = ["Diurno"];
let contraseña = ["Diurno123"];

do{
    let num = prompt("Tienes usuario y contraseña?  1.Si  2.No");
    if (num == 1){
        let user = [];
        do {
            user = prompt("Introduce tu usuario:");
            if (user != usuario){
                alert("El usuario es incorrecto");
            }
        }while (user != usuario);

        let pass = [];
        do {
            pass = prompt("Introduce tu contraseña:");
            if (pass != contraseña){
                alert("Contraseña incorrecta");
            }
        }while (pass != contraseña);

        if (user == usuario && pass == contraseña) {
            alert("Has iniciado sesión correctamente");
        }
    } else if (num == 2) {
        let newUser = prompt("Crea tu usuario: ");
        let newPass = prompt("Crea tu contraseña: ");
        usuario.push(newUser);
        contraseña.push(newPass);
        alert("Usuario y contraseña creados correctamente");
    }
} while (num != 2);