
//prendo le arrey che mi serviranno per le funzioni
let numeriCasuali = [];
let numeriUtente = [];
let numeroCasuale;
let numeroInserito;
let text = document.getElementById("msg");


//geneo 5 numeri casuali da 1 a 100
for (let i = 0; i < 5; i++) {
  numeroCasuale = generation(1, 100);
  console.log(numeroCasuale);
  numeriCasuali.push(numeroCasuale);
  
}
console.log(numeriCasuali);
//i numeri generati compaiono
//funzione per generare numeri casuali e dopo 3 secondi sparisce

//prompt("Memorizza questi cinque numeri: " + numeriCasuali );
text.innerHTML = `Memorizzali: ${numeriCasuali}`;
setTimeout (myTime, 3000);
function myTime () {
   
  for (let i = 0; i < 5; i++) {
    numeroInserito = parseInt(prompt("inserisci un numero alla volta"));
     
      if (numeroInserito == numeriCasuali[i]) 
      numeriUtente.push(numeroInserito);
      }

    alert("Hai indovinato " + numeriUtente.length + " numeri: " + numeriUtente)
  console.log(numeriUtente)
 }
    
  
 






function generation(min, max) {
return Math.floor(Math.random() * (max - min)) + min;
}