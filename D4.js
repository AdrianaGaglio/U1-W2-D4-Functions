/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function calculateArea(l1, l2) {
  // dichiarazione funzione con "comportamento" hoisting
  const area = l1 * l2;
  return area;
}

console.log("L'area del rettangolo è pari a:", calculateArea(3, 5));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function (num1 = 1, num2 = 1) {
  // dichiarazione funzione con scope
  // imposto il default a 1 per evitare 0 come risultato
  let sum;

  if (num1 !== num2) {
    sum = num1 + num2;
  } else {
    sum = (num1 + num2) * 3;
  }

  return sum;
};

console.log("Somma dei 2 numeri diversi (2, 3):", crazySum(2, 3));
console.log("Somma dei 2 numeri uguali (3, 3):", crazySum(3, 3));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function (providedNum) {
  let diffResult;
  if (providedNum <= 19) {
    diffResult = Math.abs(providedNum - 19);
  } else {
    diffResult = (providedNum - 19) * 3;
  }

  return diffResult;
};

console.log("Differenza assoluta con numero fornito < 19 (10)", crazyDiff(10));
console.log("Differenza assoluta con numero fornito > 19 (20)", crazyDiff(20));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function (n) {
  if ((n > 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
};

console.log("Il numero è compreso tra 20 e 100 oppure è uguale a 400? (Numero inserito 30)", boundary(30));
console.log("Il numero è compreso tra 20 e 100 oppure è uguale a 400? (Numero inserito 400)", boundary(30));
console.log("Il numero inserito non soddisfa nessuna delle condizioni precedenti (Numero inserito 10)", boundary(10));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// const epify = function (addedText) {
//   let epicodeWord = "EPICODE";
//   let position = addedText.search(epicodeWord);
//   if ((addedText.includes(epicodeWord) || addedText.toLowerCase().includes(epicodeWord)) && (position === 0 || position.toLowerCase() === 0)) {
//     return addedText;
//   } else {
//     return "EPICODE" + addedText;
//   }
// };

// console.log("Il testo non contiene EPICODE", epify("ciao ciao"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function (num1) {
  if (num1 % 3 === 0) {
    return "Il numero inserito è multiplo di 3";
  } else if (num1 % 7 === 0) {
    return "Il numero inserito è multiplo di 7";
  } else {
    return "Il numero inserito non è multiplo nè di 3 nè di 7";
  }
};

console.log("Il numero è multiplo di 3? (inserito 9)", check3and7(9));
console.log("Il numero è multiplo di 7? (inserito 49)", check3and7(49));
console.log("Il numero è multiplo di 3 o di7? (inserito 40)", check3and7(40));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
