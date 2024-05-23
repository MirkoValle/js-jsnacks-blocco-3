// > Crea un array composto da 15 automobili.
// > Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// < Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// < Infine stampa separatamente i 3 array.

const cars = [
    {
        marca: "alfa romeo",
        modello: "stelvio",
        alimentazione: "benzina",
    },
    {
        marca: "alfa romeo",
        modello: "tonale",
        alimentazione: "diesel",
    },
    {
        marca: "audi",
        modello: "q3",
        alimentazione: "diesel",
    },
    {
        marca: "audi",
        modello: "e-tron GT",
        alimentazione: "elettrica",
    },
    {
        marca: "audi",
        modello: "a8",
        alimentazione: "benzina",
    },
    {
        marca: "bentley",
        modello: "flying spur",
        alimentazione: "benzina",
    },
    {
        marca: "bmw",
        modello: "xm",
        alimentazione: "benzina",
    },
    {
        marca: "bmw",
        modello: "serie 1",
        alimentazione: "diesel",
    },
    {
        marca: "cupra",
        modello: "ateca",
        alimentazione: "benzina",
    },
    {
        marca: "dacia",
        modello: "duster",
        alimentazione: "gpl",
    },
    {
        marca: "ferrari",
        modello: "roma",
        alimentazione: "benzina",
    },
    {
        marca: "lamborghini",
        modello: "urus",
        alimentazione: "benzina",
    },
    {
        marca: "tesla",
        modello: "model x",
        alimentazione: "elettrico",
    },
    {
        marca: "fiat",
        modello: "500",
        alimentazione: "gpl",
    },
    {
        marca: "toyota",
        modello: "corolla",
        alimentazione: "benzina",
    },
]

const benzinaCar = cars.filter((car) => {
    if (car.alimentazione === "benzina") {
        return true;
    }
});

console.log(benzinaCar)

const dieselCar = cars.filter((car) => {
    if (car.alimentazione === "diesel") {
        return true;
    }
});

console.log(dieselCar)

const otherCar = cars.filter((car) => {
    if (car.alimentazione !== "diesel" && car.alimentazione !== "benzina") {
        return true;
    }
});

console.log(otherCar)