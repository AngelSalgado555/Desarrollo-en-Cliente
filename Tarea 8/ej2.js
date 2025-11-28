let word = prompt("Ingrese una palabra: ");

word = word.toLowerCase();

if (word.startsWith("pre")){
    console.log("La palabra " + word + "empieza por pre");
} else {
    console.log("La palabra " + word + "no empieza por pre");
}