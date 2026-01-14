let parrafo = document.getElementById("parrafo");

function mouseOver(){
    parrafo.style.color = "red";
}

function mouseOut(){
    parrafo.style.color = "black";
}
parrafo.addEventListener("mouseover", mouseOver);

parrafo.addEventListener("mouseout", mouseOut);