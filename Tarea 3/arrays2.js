//Ejercicio 2
let usuario = [];
let password = [];
let user;
let pass;

let num = 0;
do{
    num = prompt(" 1.Iniciar sesión\n 2.Resgistrarte\n 3.Salir ");
    if (num == 1){
        do {
            user = prompt("Introduce tu usuario:");
            if (user != usuario){
                alert("El usuario es incorrecto");
            }
        }while (user != usuario);

        do {
            pass = prompt("Introduce tu contraseña:");
            if (pass != password){
                alert("Contraseña incorrecta");
            }
        }while (pass != password);

        for (let i = 0; i < usuario.length; i++){
            if (usuario[i] === user && password === pass){
                alert("Has iniciado sesión correctamente");
            }
        }
    } else if (num == 2) {
        let newUser = prompt("Crea tu usuario: ");
        let newPass = prompt("Crea tu contraseña: ");
        usuario[usuario.length] = newUser;
        password[password.length] = newPass;
        alert("Usuario y contraseña creados correctamente");
    } else if (num == 3){
        alert("Saliendo del programa");
    } else {
        alert("Opción incorrecta");
    }
} while (num != 3);