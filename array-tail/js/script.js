const array = []
let userNumber = Number.parseInt(prompt("Inserisci la quantià di numeri da inserire nell'array"), 10);
if (userNumber < 1 || userNumber > 100 || isNaN(userNumber)) {
    userNumber = Math.floor(Math.random() * 100 + 1);
}

for (let i = 0; i < userNumber; i++) {
    array.push(Math.floor(Math.random() * 100 + 1));

}

console.log(array)

const numberPrint = Number.parseInt(prompt("Inserisci la quantità di numeri da stampare"), 10);
if (userNumber < 1 || userNumber > array.length || isNaN(userNumber)) {
    userNumber = Math.floor(Math.random() * array.length + 1);
}



for (let k = numberPrint; k > 0; k--) {
    console.log(array[array.length - k])
}
