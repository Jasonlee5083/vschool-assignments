var a = "aaa";
var b = "bc"
function conboString(a,b) {
  if (a.length < b.length) {
    return a + b + a;
    
  }
  
  else if (a.length > b.length) {
    return b + a + b ;
  }
}

console.log(conboString(a,b))