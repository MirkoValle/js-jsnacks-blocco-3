// Crea due array che hanno un numero di elementi diversi. 
// Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.


let arrayA = [1, 2, 3, 4];

let arrayB = [1, 2, 3, 4, 5, 6, 7, 8];

let arrayMaggiore;

let arrayMinore;

if (arrayA > arrayB) {
    arrayMaggiore = arrayA;
    arrayMinore = arrayB;
} else {
    arrayMaggiore = arrayB;
    arrayMinore = arrayA;
}


while (arrayMinore.length != arrayMaggiore.length) {
    arrayMinore.push(Math.floor(Math.random() * 10 + 1));
}

console.log(arrayMaggiore)
console.log(arrayMinore)