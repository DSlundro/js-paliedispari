// Chiedere all’utente di inserire una parola 
// Creare una funzione per capire se la parola inserita è palindroma

// chiedo all'utente d iinserire una parola
let userWord = prompt('Inserisci la tua parola!');
console.log(userWord)
// divido la parola in singole lettere
let wordSplitted = userWord.split('');
console.log(wordSplitted);
// inverto la parola splittata
let wordReversed = wordSplitted.reverse();
console.log(wordReversed);
// ricostruisco la parola inversa e splittata
let wordRecostructed = wordReversed.join('');

// inserisco la condizione per verificare se la parola iniziale e parola finale siano uguali
if (userWord === wordRecostructed){
    console.log('La parola è palindroma');
}
else{
    console.log('La parola non è palindroma');
}


