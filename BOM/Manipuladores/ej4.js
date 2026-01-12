function getCookie(name){
    let cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        let [key, value] = cookies[i].split("=");
        if (key === name){
            return value;
        }
    }
    return null;
}

let visitas  = getCookie("visitas");

if (visitas === null){
    visitas = 1; 
} else {
    visitas = parseInt(visitas) + 1; 
}

document.cookie = "visitas=" + visitas + "; max-age=" + (60 * 60 * 24 * 365);

alert("Bienvenid@, esta es tu visita número " + visitas);
