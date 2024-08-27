console.log("--- EXTRA ---");
// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const checkArray = function (num1) {
  num1 = num1 > 0 ? num1 : Math.floor(Math.random() * 10 + 1); // se il parametro non viene specificato, il numero di elementi da creare è randomico, altrimenti tiene conto del parametro inserito
  console.log("Il numero di elementi da inserire nell'array è", num1);
  const numbers = giveMeRandom(num1); // creo l'array con numero elementi dinamico e contenuto dinamico (randomicamente generati dalla funzione giveMeRandom)
  console.log("Array generato", numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const number = parseInt(numbers[i]);
    if (number > 5) {
      sum += number;
    }
  }
  return sum;
};

console.log("La somma dei valori maggiori di 5 è", checkArray());

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const shoppingCart = [
  { price: 10, name: "t-shirt", id: "#12345", quantity: 3 },
  { price: 75, name: "shoes", id: "#332241", quantity: 1 },
  { price: 18, name: "hat", id: "#55687", quantity: 2 }
];
console.log("Carrello", shoppingCart);

const shoppingCartTotal = function () {
  let totalCart = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    const itemQuantity = shoppingCart[i].quantity;
    totalCart += itemQuantity * shoppingCart[i].price;
  }
  return totalCart;
};

console.log("Il totale da pagare è", shoppingCartTotal());

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const oldShoppingCart = structuredClone(shoppingCart.slice());

const addToShoppingCart = function () {
  console.log("Carrello prima di aggiungere un nuovo elemento", oldShoppingCart);
  const newItem = { price: 10, name: "t-shirt", id: "#12345", quantity: 2 };
  console.log("Nuovo elemento", newItem);
  for (let i = 0; i < shoppingCart.length; i++) {
    const item = shoppingCart[i].name;
    const itemID = shoppingCart[i].id;
    if (item === newItem.name && itemID === newItem.id) {
      shoppingCart[i].quantity += newItem.quantity;
      return shoppingCart;
    }
  }
};

console.log("Carrello aggiornato", addToShoppingCart());

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const maxShoppingCart = function () {
  const pricesArray = [];
  for (let i = 0; i < shoppingCart.length; i++) {
    const price = shoppingCart[i].price;
    pricesArray.push(price);
    pricesArray.sort(function (a, b) {
      return a - b;
    });
  }
  for (let i = 0; i < shoppingCart.length; i++) {
    const item = shoppingCart[i];
    if (shoppingCart[i].price === pricesArray[pricesArray.length - 1]) {
      return shoppingCart[i];
    }
  }
};

console.log("Prodotto più costoso", maxShoppingCart());

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const latestShoppingCart = function () {
  return shoppingCart[shoppingCart.length - 1]; //
};

console.log("L'ultimo prodotto nel carrello è", latestShoppingCart());

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const loopUntil = function (num1) {
  const numbers = [];
  num1 = num1 > 0 && num1 < 9 ? num1 : Math.ceil(Math.random() * 8); // serve a non incappare in un loop infinito
  let counter = 0;
  while (counter < 3) {
    let randomNum = Math.floor(Math.random() * 10);
    numbers.push(randomNum);
    if (randomNum > num1) {
      counter++;
    } else {
      counter = 0;
    }
    console.log("Dentro il loop", numbers);
  }
  return "Il numero inserito è " + num1;
};

console.log(loopUntil());

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// const average = function (numbers) {
//   numbers = [1, 2, 3, 4, 5];
//   let sum = 0;

//
//   console.log(numbers);
//   return numAverage;
// };

const average = function (p1, p2, p3, p4, p5) {
  const numOfLoop = arguments.length; // calcolo quanti parametri sono valorizzati
  const numbers = [];
  let sum = 0;

  for (let i = 1; i <= numOfLoop; i++) {
    let index = eval("p" + i); // genero dinamicamente il nome della variabile
    if (typeof index === "number" && index !== NaN) {
      numbers.push(index);
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    sum += parseInt(numbers[i]);
  }
  console.log("Numeri inseriti:", numbers);
  return sum / numbers.length;
};

console.log("Calcolo media:", average(3, "ciao", "ciao", 2));
console.log("Calcolo media:", average("ciao", 5, "ciao", 7));

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const longest = function (strings) {
  if (strings !== undefined) {
    strings = strings.split(" ");
    console.log(strings);
  } else {
    strings = ["bb", "ccc", "eeeee", "a", "dddd"];
  }
  strings.sort(function (a, b) {
    return a.length - b.length;
  });
  console.log("La stringa più lunga è", strings[strings.length - 1]);
};

longest("pippo pluto e paperino"); // se il parametro è valorizzato con una stringa
longest(); // se il parametro non è valorizzato assegna un array fisso

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const antiSpam = function (emailContent) {
  if (typeof emailContent !== "string") {
    emailContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quam odio, malesuada congue rhoncus ut, finibus vel metus.";
  }
  let isSpam = null;

  if (emailContent.toLowerCase().includes("spam") || emailContent.toLowerCase().includes("scam")) {
    isSpam = true;
  } else {
    isSpam = false;
  }
  console.log("Contenuto mail", emailContent);
  return isSpam;
};

console.log(antiSpam());
console.log(antiSpam("Lorem ipsum dolor sit amet, SPAM consectetur adipiscing elit."));

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const daysGone = (date) => {
  date = new Date(date);
  const today = new Date();
  const dateDiff = today - date;
  return Math.floor(dateDiff / (1000 * 60 * 60 * 24));
};

console.log(daysGone("1990-03-21"));

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const matrixGenerator = (x, y) => {
  const matrix = [];
  let counter = 0;
  let string = "";
  for (i = 0; i < x; i++) {
    string = counter.toString();
    for (j = 0; j <= y; j++) {
      matrix.push(string + j);
    }
    counter++;
  }
  return matrix;
};

console.log("Matrice con valori inseriti 2 e 5", matrixGenerator(2, 5));
console.log("Matrice con valori inseriti 2 e 5", matrixGenerator(2, 3));
