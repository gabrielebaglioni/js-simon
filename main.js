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


function getNonRepeteListNumber(nElements, min, max){
   let numbers = [];
   while(numbers.length < nElements){
      let numeroRipetuto = getrandomumber(min, max)
      if (!numbers.includes(numeroRipetuto)){
         numbers.push(numeroRipetuto)
      }
   }
   return numbers
}
function isEqual()
  {
   var a = [];
   var b = [];
    
    // If length is not equal
    if(a.length!=b.length)
     return "False";
    else
    {
     
    // Comparing each element of array
     for(var i=0;i<a.length;i++)
     if(a[i]!=b[i])
      return "False";
      return "True";
    }
  }
//---------------------------------
//           MAIN
//--------------------------------
const numbers = (getNonRepeteListNumber(2, 1, 10)); 
alert(numbers);
let numbersArray = [];// popolato da getrNonRepete
let userNumber;//pushati in controlloNutente
numbersArray.push(numbers);
// dopo 30 secondi 
setTimeout(function() {
   const controlloNutente = [];//popolato da userNumber push
   for (let i = 0; i < numbersArray.length + 1 ; i++) {
      let userNumber = Number(prompt("inserisci i numeri che hai visto in precedenza"));
      controlloNutente.push(userNumber);
  
     }
     const checkNumbers = [];//numeri indovinati
     for(let i = 0; i < controlloNutente.length; i++){
        const userNumber = controlloNutente[i];

        if(numbersArray.includes(userNumber) && !checkNumbers.includes(userNumber)){
           checkNumbers.push(userNumber);
           console.log(userNumber)
        }
        
     }
      
   }
        
    
      
   
, 2000);
//   console.log(controlloNutente);
   //   console.log(numbersArray);

      // if(nubersArray.length == controlloNutente.length){
      //    alert("HAI perso");
      // }else{
      //    alert("HAI vinto");
      // }
   //  if(!numbersArray[i].includes(controlloNutente)){
   // alert("hai perso")
   //   }else {
   // alert("HAI vinto");
   //  } 
   // for(let i=0;i < controlloNutente.length; i++){
   //    if(numbersArray.includes(controlloNutente[i])){
         
   //    }
    //    if (numbersArray.includes(controlloNutente)){
   //        checkNumbers.push(controlloNutente)
      
   //    }
   //    console.log(checkNumbers)

