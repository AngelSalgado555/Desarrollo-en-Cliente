let setA = new Set([1, 2, 3, 4]);
let setB = new Set([3, 4, 5, 6]);

let newArrayA = Array.from(setA);
let newArrayB = Array.from(setB);

let newSetRepetidos = new Set(
    newArrayA.filter(num => newArrayB.includes(num))
);

console.log(newSetRepetidos);