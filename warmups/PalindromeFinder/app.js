
function isPalindrome(str) {

var remove = str.replace(/[^A-Z0-9]+/ig, "");
str = remove.toLowerCase();
console.log(remove);
var reversedStr = str.split("").reverse().join("");
console.log(reversedStr) ;

  if (str === reversedStr) {
    return true;
  }
  else {
    return false;
  }
  console.log(isPalindrome(str));
  
}
  


isPalindrome("a b ba !!");  // true  
