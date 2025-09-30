var question = prompt("El número que estas pensando es de un digito?");
if (question == "Si"){
    var response = prompt("Tu número es par?");
    if (response == "Si"){
        for (let index = 2; index < 10; index+= 2) {
            var pregunta = prompt("Tu número es " + index + "?");
            if (pregunta == "Si"){
                break;
            }
        }
    } else if (response == "No"){
        for (let index = 0; index < 10; index++) {
            if(index % 2 == 0){
                index++;
                var pregunta = prompt("Tu número es " + index + "?");
                if (pregunta == "Si"){
                    break;
                } 
            }      
        }
    }
} else if (question == "No"){
    var question = prompt("Tu número es menor a 60?");
    if (question == "Si"){
        var question = prompt("Tu número esta entre el 10 y el 30? ");
        if (question == "Si"){
            for (let index = 10; index <= 30; index+=2) {
                var pregunta = prompt("Tu número es " + index + "?");
                if (pregunta == "Si"){
                    break;
                }
            }
        } else {
            var pregunta = prompt("Esta entre el  30 y el 60?");
            if (pregunta == "Si"){
                var pregunta = prompt("Es par?");
                if (pregunta == "Si"){
                    for (let index = 30; index <= 60; index+=2) {
                        var pregunta = prompt("Tu número es " + index + "?");
                        if (pregunta == "Si"){
                            break;
                        }          
                    }
                }
            } else {
                for (let index = 30; index < 60; index++) {
                    if (index % 2 == 0){
                        var pregunta = prompt("Tu número es " + index + "?");
                        if (pregunta == "Si"){
                            break;
                        }
                    }
                }
            }
        }
    } else {
    var pregunta = prompt("Tu número esta entre el 60 y el 80?");
    if (pregunta == "Si"){
        var pregunta = prompt("Tu número es par?");
        if (pregunta == "Si"){
            for (let index = 60; index < 80; index+=2) {
                var question = prompt("Tu número es " + index + "?");
                if (pregunta == "Si"){
                    break;
                } 
            }
        } else {
            for (let index = 60; index < 80; index++) {
                if (index % 2 == 0){
                    index++;
                    var pregunta = prompt("Tu número es " + index + "?");
                    if (pregunta == "Si"){
                        break;
                    }
                }
            }
        }
    } else {
        var pregunta = prompt("Tu número es par?");
        if (pregunta == "Si"){
            for (let index = 80; index <= 100; index+=2) {
                var question = prompt("Tu número es " + index + "?");
                if (pregunta == "Si"){
                    break;
                } 
            }
        } else {
            for (let index = 80; index < 100; index++) {
                if (index % 2 == 0){
                    var pregunta = prompt("Tu número es "+ index + "?");
                    if (pregunta == "Si"){
                        break;
                    }
                }
            }
        }
    }
}
} 