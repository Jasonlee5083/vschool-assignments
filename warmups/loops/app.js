var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];  
var alphabet = "abcdefghijklmnopqrstuvwxyz";  
var result=[];

//var alphabetSpilt = alphabet.split();
//alphabetSpilt = alphabetSpilt.upper();

function loopwithinLoops(people,alphabet) 
 {
     for (i = 0; i < people.length; i++) {
         //console.log(people[i]);
             result.push(people[i] +":");
     
         for (j=0; j < alphabet.length; j++)  {
           // console.log(alphabetSpilt[i]);
            result.push(alphabet[j].toUpperCase());
     }
     }
          console.log(result);

 }


   loopwithinLoops(people,alphabet);
