let frase = prompt("Ingresa una frase que contenga la palabra perro: ");

console.log("Frase original : " + frase);
console.log("Frase modificada: " + frase.replace(/perro/gi, "gato"));