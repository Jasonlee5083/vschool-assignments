//No Duplicate
var withError = "bookkeeper larry";
var noDupArr = [];
var misfitsArr = [];

function noDuplicates(input){
  for ( var i=0; i<input.length; i++) {
    if (noDupArr.indexOf(input[i]) === -1) {
        noDupArr.push(input[i]);
    }
      else {
          misfitsArr.push(input[i]);
      }
     
  }
  
}

  noDuplicates = noDupArr.join();
  misfitsStr = misfitsArr.join();
 
console.log(noDuplicates);
console.log(misfitsStr);