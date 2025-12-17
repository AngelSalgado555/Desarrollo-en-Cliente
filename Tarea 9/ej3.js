let number = prompt("Ingresa un número: ");

function aumento(number){
    setInterval(() => {
        number++;
        document.getElementById("parrafo1").innerHTML = number;
    }, 3000);
}

aumento(number);


