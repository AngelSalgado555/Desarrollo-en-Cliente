var num = Number(prompt("Introduce un número del 1 al 3:" +
    "1. Piedra" +
    "2. Papel" +
    "3. Tijeras"
));

var numMaquina = Math.floor(Math.random() * 3) + 1;

if (num == numMaquina) {
    alert("Empate");
} else if ((num == 1 && numMaquina == 3) || (num == 2 && numMaquina == 1) || (num == 3 && numMaquina == 2)) {
    alert("Has ganado");
} else if ((num == 1 && numMaquina == 2) || (num == 2 && numMaquina == 3) || (num == 3 && numMaquina == 1)) {
    alert("Has perdido");
} else {
    alert("Número no válido");
}