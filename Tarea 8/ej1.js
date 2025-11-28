// let parrafo = prompt("Introduce un texto con las palabras que quieras: ");
//Esta mal, tengo que ver como arreglar el formar el array

function maxLengthWord(text){
    let temp = text.split(" ");
    let maxWord = temp[0];
    
    for (let word of temp) {
        if (word.length > maxWord.length){
            maxWord = word;
        }
    }
    return maxWord;
}

let texto = "Esto es una gran cadena de texto que debe decir que la palabra mas larga es worderland";
console.log(maxLengthWord(texto));