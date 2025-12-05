let question = confirm("Quieres ir a la página principal? ");

if (question){
    setInterval(() =>  {
        location.assign("paginaPrincipal.html");
    }, 5000);
} else  {
    alert("Nos quedamos ");
}
