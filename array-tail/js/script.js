const array = []
const userNumber = Number.parseInt(prompt("Inserisci un numero"), 10);

if (userNumber < 1 || userNumber > 100 || isNaN(userNumber)) {
    userNumber = Math.floor(Math.random() * 100 + 1);
}

