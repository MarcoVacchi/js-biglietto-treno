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
- calcolo il prezzo totale del viaggio sulla base di queste regole;
- il prezzo del biglietto è di (0.21$ al km);
- SE l'utente ha -18 anni;
  - applico uno sconto del 20%;
- SE l'utente ha +65 anni;
  - applico uno sconto del 40%;
- applicare il prezzo finale in forma umana con massimo 2 decimali (per indicare i centesimi); 
*/


const kmToRoad = prompt ('inserisci il numero di km da percorrere');
const age = prompt ('inserisci la tua età');
const priceForKm = 0.21;
const totalPrice = kmToRoad * priceForKm;
console.log(totalPrice);