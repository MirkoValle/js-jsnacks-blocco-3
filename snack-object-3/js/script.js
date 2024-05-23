
// Crea un array di oggetti che rappresentano delle persone, 10.
// Ogni persona ha un nome, un cognome e un'età.

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

const persone = [
    {
        nome: "Gianna",
        cognome: "Sfregola",
        età: 57,
    },
    {
        nome: "Paolo",
        cognome: "La Torre",
        età: 32,
    },
    {
        nome: "Perseo",
        cognome: "Orione",
        età: 24,
    },
    {
        nome: "Sandrino",
        cognome: "Panevino",
        età: 15,
    },
    {
        nome: "Rinaldo",
        cognome: "Pane Caldo",
        età: 68,
    },
    {
        nome: "Giulione",
        cognome: "Cesarone",
        età: 8,
    },
    {
        nome: "Francesco",
        cognome: "Totti Re di Roma",
        età: 47,
    },
    {
        nome: "Ciccio",
        cognome: "Impanato",
        età: 12,
    },
    {
        nome: "Lina",
        cognome: "Deguata",
        età: 17,
    },
    {
        nome: "Tornio",
        cognome: "Subito",
        età: 87,
    },
]


const infoPatente = persone.map((persona) => {
    if (persona.età > 17) {
        return persona.nome + " " + persona.cognome + " " + "Può guidare"
    } else {
        return persona.nome + " " + persona.cognome + " " + "Non può guidare"
    }

});


console.log(infoPatente)