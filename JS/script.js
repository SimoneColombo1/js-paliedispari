const StringUtente= prompt('inserisci una parola');

const NumUtente= Number.parseInt(prompt('isnerisci un numero'));

const random = 0; 
function palindroma(StringUtente){

let reverse='';
for (let i=StringUtente.length ; i>= 0 ; i++){
reverse= reverse + StringUtente[i];

}

if (StringUtente === reverse){
    return true
}
else return false

}


function casuale (random){
const random= Math.floor(Math.random * 6);

return random;
}

random= casuale(random);


function sum (random,NumUtente){
         let sum= random + NumUtente;
         if(sum %2 == 0){
            return true
         }
         else{
                return false
         }

}








