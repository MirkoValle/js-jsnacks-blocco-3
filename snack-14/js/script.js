// ! Chiedi all'utente un numero di secondi da attendere e fai partire un timer da quel momento a zero secondi, interrompendo il timer


let userNumber = Number.parseInt(prompt("Inserisci un numero"), 10);

const clock = setInterval(function () {
    userNumber--
    console.log(userNumber)
    if (userNumber <= 0) {
        clearInterval(clock)
        alert("Fine")
    }

}, 1000);