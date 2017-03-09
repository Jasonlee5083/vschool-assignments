function findLetters(ourString,character){
  for ( var i=0; i<ourString.length; i++) {
    if (ourString[i] === character){
        return i;
    }
  }
  return "there was no" + character + "found";
}
console.log(findLetters("Hello Worlds","e"));
console.log(findLetters("Hello Worlds","o"));
console.log(findLetters("Hello Worlds","l"));
console.log(findLetters("Hello Worlds","x"));