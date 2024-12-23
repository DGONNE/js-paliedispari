/*
            PALINDROMA
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

/** 
 * Check if a word is palindrome
 * 
 * @param {string} word - the word to check
 * @returns {boolean}
*/
function isPalindrome(word) {
    let reverseWord = "";
    for(let i = word.length -1; i >= 0; i--) {
        reverseWord = reverseWord + word[i];
    }
    if(word === reverseWord) {
        return true;
    } else {
        return false;
    }
}

const userWord = prompt("Inserisci una parola")

const checkIsPalindrome = isPalindrome(userWord);
 if(checkIsPalindrome) {
    console.log("la parola è palindroma");
 } else {
    console.log("la parola non è palindroma");
 }



 /*
        PARI O DISPARI
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

/**
 * Returns a random number between min and max (both included).
 * 
 * @param {number} min - min number
 * @param {number} max - max number
 * @returns {number}
 */
function getRndIntegr(min,max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/**
 * Check if a number is even
 * 
 * @param {number} num 
 * @returns {boolean}
 */
function isEven(num){
    if(num % 2 === 0) {
        return true;
    }
    return false;
}

// PROGRAMMA PRINCIPALE
const userEvenOrOdd = prompt("Inserisci pari o dispari");
const userNumber = Number(prompt("Inserisci un numero fra 1 e 5"));
const cpuNumber = Math.floor(Math.random() * 5) + 1;
const sum = userNumber + cpuNumber;

if((isEven(sum) && userEvenOrOdd === 'pari') || (isEven(sum) === false && userEvenOrOdd === 'dispari')) {
    alert("Hai vinto");
} else {
    alert("Hai perso");
}