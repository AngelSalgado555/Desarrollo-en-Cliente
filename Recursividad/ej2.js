function devolverReverse(word){
    newWord = word.split('').reverse().join('');
    if (newWord == "") return;

    return newWord = devolverReverse(word.pop());
}
console.log(devolverReverse("hola"));