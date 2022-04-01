// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// chiedo all'utente di scegliere tra pari e dispari
let oddEven = prompt('Inserisci pari o dispari!');
console.log('Hi scelto ' + oddEven);

// chiedo all'utente di scegliere un numero tra 1 e 5
let userNumber = Number(prompt('Inserisci un numero tra 1 e 5'));
console.log('Il tuo numero è ' + userNumber)

// controllo se è pari o dispari
if(oddEven !== 'pari' && oddEven !== 'dispari'){
    oddEven = alert('Devi scegliere tra pari e dispari! Non scrivere altre cazzate!');
    console.log(location.reload());
}

// controllo del numero inserito
if(userNumber < 1 || userNumber > 5){
    userNumber = alert('Dei inserire un numero tra 1 e 5!!!');
    console.log(location.reload());
}

// creo una funzione per i numeri random
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomNumber = getRandomNumber(1, 5);
console.log(`Il numero del PC è ${randomNumber}`);

// dichiaro le ariabili
let sum;
let resultOddEven;

// creo la funzione per 
function fxOddEven(numberOne, numberTwo) {
    // sommo i due numeri
    sum = numberOne + numberTwo;

    // controllo se la somma è pari o dispari
    if (sum % 2 == 0) {
        resultOddEven = "pari"
    } else {
        resultOddEven = "dispari"
    }
    return resultOddEven, sum
}


// creo la variabile per la funzione
let resultOE = fxOddEven(userNumber, randomNumber);

console.log(`La somma dei numeri è ${sum} quindi è ${resultOddEven}`);

/* Dichiariamo chi ha vinto. */
let result;

if (resultOddEven == oddEven) {
    result = "Hai vinto!"
} else {
    result = "Mi dispiace, hai perso"
}

console.log(result)




