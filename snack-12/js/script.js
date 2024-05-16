// Snack 12
// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.


const parolaA = prompt("Inserisci una parola");
const parolaB = prompt("Inserisci una parola");

function verificaLunghezza(a, b) {
    let parolaLunga
    let parolaCorta

    if (a.length == b.length) {
        console.log(a, b)
    } else if (a.length > b.length) {
        console.log(a)
    } else if (a.length < b.length) {
        console.log(b)
    }

}

verificaLunghezza(parolaA, parolaB);