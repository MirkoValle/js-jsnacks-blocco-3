const frigorifero = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];

frigorifero.push("pesca");

const verificaFrutta = "cocomero";
let trovato = ("Oh no, devo uscire a comprare il cocomero!")

for (let i = 0; i < frigorifero.length; i++) {


    if (frigorifero[i] == verificaFrutta) {

        trovato = ("Trovato! Devo solo preparare il cocktail.")

    }
}

console.log(trovato)
