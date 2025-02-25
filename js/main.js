/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Nota bene
prima di tutto, nel file README, indicate tutti i passaggi utili allo svolgimento del programma. Soltanto dopo scrivete la vostra soluzione in JS.


- chiedo all'utente il numero di chilometri che vuole percorrere;
- chiedo all'utente la sua età;
- valuto che l'utente inserisca un numero in entrambi i campi
- calcolo il prezzo totale del viaggio sulla base di queste regole;
- il prezzo del biglietto è di (0.21$ al km);
- SE l'utente ha -18 anni;
  - applico uno sconto del 20%;
- SE l'utente ha +65 anni;
  - applico uno sconto del 40%;
- applicare il prezzo finale in forma umana con massimo 2 decimali (per indicare i centesimi); 
*/


// Le mie variabili
let kmToRoad = parseFloat(prompt ('Insert the km to road'));
let age = parseFloat(prompt ('insert your age'));
const priceForKm = 0.21;
let totalPrice = kmToRoad * priceForKm;

// Verifica se kmToRoad non sia un numero

if (isNaN(kmToRoad) || kmToRoad === '' || kmToRoad <= 0 ) {
    alert( 'Please, insert a valid number for the km, not a word, negative number or a space!' );
} 

    // Verifica se age non è un numero
if (isNaN(age) || age === '' || age <= 0 ) {
    alert( 'Please, insert a valid number for the age, not a word, negative number or a space!' );
    } else {
        // Controlla l'età e applica lo sconto
        if (age <= 18) {
            totalPrice = totalPrice - (totalPrice * 20) / 100; // applico lo sconto del 20% per -18
        } else if (age >= 65) {
            totalPrice = totalPrice - (totalPrice * 40) / 100; // applico lo sconto del 40% per gli over 65
        }
        // applico il prezzo finale in forma umana con massimo 2 decimali (per indicare i centesimi)
        console.log("Great! The price is: €" + totalPrice.toFixed(2));
    }


