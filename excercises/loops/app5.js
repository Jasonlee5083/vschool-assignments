var inputNumbers = [40,33,3,45,2,3,42,33,3,21];
var smallestNumber = inputNumbers[0];

function findNumber(array){
  for ( var i=0; i<array.length; i++) {
    if (smallestNumber > inputNumbers[i]) {
        smallestNumber = inputNumbers[i];
        
        
    }
     
  }
  console.log(smallestNumber);
}

  findNumber(inputNumbers);
 