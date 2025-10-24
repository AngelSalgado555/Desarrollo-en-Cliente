let user;
let pass;
let newMapUsuarios = new Map(); 

let num = 0;
do{
    num = prompt(" 1.Iniciar sesión\n 2.Resgistrarte\n 3.Salir ");
    if (num == 1){
        do {
            user = prompt("Introduce tu usuario:");
            if (!newMapUsuarios.has(user)){
                alert("Usuario incorrecto");
            }
        }while (!newMapUsuarios.has(user));

        let passUser;
        do {
            pass = prompt("Introduce tu contraseña:");
            passUser = newMapUsuarios.get(user);
            if (passUser !== pass){
                alert("Contraseña incorrecta");
            }
        }while (passUser !== pass);

        alert("Has iniciado sesión correctamente ");
    } else if (num == 2) {
        let newUser = prompt("Crea tu usuario: ");
        let newPass = prompt("Crea tu contraseña: ");
        newMapUsuarios.set(
            newUser, newPass
        );
        console.log(newMapUsuarios);
        alert("Usuario y contraseña creados correctamente");
    } else if (num == 3){
        alert("Saliendo del programa");
    } else {
        alert("Opción incorrecta");
    }
} while (num != 3);



