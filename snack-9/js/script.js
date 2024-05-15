//Snack9 Crea un array vuoto. Chiedi fino a che l'array non ha 6 numeri all'utente di inserire un numero,
// se è dispari inseriscilo nell'array.

const array = [];

while (array.length != 6) {
    let userNumber = Number.parseInt(prompt("Inserisci un numero"), 10);

    if (userNumber % 2 == 1) {

        array.push(userNumber);
        console.log(array);
    }
}
