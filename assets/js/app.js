console.log('link collegato ok');

/*
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.

Ogni cella ha un numero progressivo, da 1 a 100.

Ci saranno quindi 10 caselle per ognuna delle 10 righe.

Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

/*
// todo 1 - Struttura fissa HTML/CSS
todo 2 - creare la griglia dinamicamente
todo 3 - numerare quadratti
todo 4 - Output
*/


/*
! 1 - creare griglia dinamicamente
  ? COSA DEVI FARE per generare la griglia?

  Quando premi sul PULSANTE vengono generati tanti quadrati, quanto il NUMERO moltiplicato per il NUMERO.

  Ogni quadrato generato viene STAMPATO in pagina APPESO al CONTAINER

  su ogni quadrato generato al suo interno dovrà avere il suo numero in ordine progressivo

*/


// DATI PARTENZA
const buttonPlay = document.querySelector('button'); // collego btn HTML ad variabile
const container = document.querySelector('.container'); // collego container HTML ad variabile
const elementForRow = 10; // poi prenderà il dato dalla select
const nExponent = 2; // numero esponente
//console.log(buttonPlay, elementForRow, nExponent);


// metto in ascolto il button per essere premuto
buttonPlay.addEventListener('click', function(){
  //console.log('cliccato');
  container.classList.add('bgc-green');
})

