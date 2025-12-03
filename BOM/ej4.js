let connection = setInterval(() => {
    if (navigator.onLine){
        alert("Hay internet");
    } else {
        alert("Ya no hay internet :(");
        
    }
}, 4000);