// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.


// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
//---------------------------------
//        FUNZIONI
//---------------------------------
// restituisce una lista lista di numeri che non si ripetono
function getrandomumber(min, max) {
   return Math.floor(Math.random() * (max - min + 1) ) + min;
}


function getnonrepetelistnumber(nElements, min, max){
   let numbers = [];
   while(numbers.length < nElements){
      let numeroRipetuto = getrandomumber(min, max)
      if (!numbers.includes(numeroRipetuto)){
         numbers.push(numeroRipetuto)
      }
   }
   return numbers
}

//---------------------------------
//           MAIN
//--------------------------------
const numbers = (getnonrepetelistnumber(2, 1, 10));
alert(numbers);
let controlloNgenerati = [];
let nUtente;
let controlloNutente = [];
controlloNgenerati.push(numbers);
// console.log(controlloNgenerati);
// dopo 30 secondi 
setTimeout(function() {
   for (let i = 0; i < controlloNgenerati.length + 1; i++) {
      let nUtente = Number(prompt("inserisci i numeri che hai visto in precedenza"));
      controlloNutente.push(nUtente);
      // console.log(controlloNutente);
   }
      if(controlloNgenerati.length === controlloNutente.length){
         alert("HAI perso");
      }else{
         alert("HAI vinto");
      }
      
   
}, 3000);


