// > Scrivi una funzione che dato un numero inverta le sue cifre: 1234 -> 4321

const numero = Number.parseInt(prompt("Inserisci un numero"), 10);

function invertiNumero(n) {

    const stringa = n.toString();
    let stringaInvertita = "";

    for (let i = stringa.length - 1; i >= 0; i--) {
        stringaInvertita += stringa[i];

    }

    return Number.parseInt(stringaInvertita, 10);
}

console.log(invertiNumero(numero))

invertiNumero(numero)