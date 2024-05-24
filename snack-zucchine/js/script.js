// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.
// Dividi in due array separati le zucchine che misurano meno o più di 8cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

const ceste = [
    { varieta: 'Nera di Milano', peso: 341.23, lunghezza: 4.58 },
    { varieta: 'Romanesca', peso: 287.45, lunghezza: 9.75 },
    { varieta: 'Fiorentina', peso: 458.12, lunghezza: 12.36 },
    { varieta: 'Tonda', peso: 132.67, lunghezza: 15.98 },
    { varieta: 'Lunga fiorentina', peso: 376.54, lunghezza: 18.45 },
    { varieta: 'Striata d\'Italia', peso: 231.78, lunghezza: 1.23 },
    { varieta: 'Bianca triestina', peso: 314.89, lunghezza: 7.56 },
    { varieta: 'Gialla', peso: 459.31, lunghezza: 2.67 },
    { varieta: 'Rugosa friulana', peso: 278.44, lunghezza: 16.89 },
    { varieta: 'Patisson', peso: 387.56, lunghezza: 19.12 }
];

let sum = 0;

ceste.forEach(zucchina => {
    sum += zucchina.peso;
});

console.log(sum);
console.log(parseInt(sum));

let zucchinePiccole = [];
let zucchineGrandi = [];

ceste.forEach(zucchina => {
    if (zucchina.lunghezza > 8) {
        zucchineGrandi.push(zucchina);
    } else {
        zucchinePiccole.push(zucchina);
    }
});

console.log(zucchineGrandi);
console.log(zucchinePiccole);

let sumZucchinePiccole = 0;

zucchinePiccole.forEach(zucchina => {
    sumZucchinePiccole += zucchina.peso;
});

console.log(sumZucchinePiccole);
console.log(parseInt(sumZucchinePiccole));

let sumZucchineGrandi = 0;

zucchineGrandi.forEach(zucchina => {
    sumZucchineGrandi += zucchina.peso;
});

console.log(sumZucchineGrandi);
console.log(parseInt(sumZucchineGrandi));