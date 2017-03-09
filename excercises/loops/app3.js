var arrayInput = [1,2,3,45,2,3,42];

function findNumber(array){
  for ( var i=0; i<array.length; i++) {
    if (array[i] === 42)
        return i;
    
  }
  console.log("there was no 42 found");
}

  findNumber(arrayInput);