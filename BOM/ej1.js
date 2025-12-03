let confirmacion = true;
let recordatorio = setInterval(() =>{
    confirmacion = confirm("Quieres que el recordatorio se ejecute? ");
    if (!confirmacion){
        clearInterval(recordatorio);
    } else {
        recordatorio;
    }
}, 5000);



