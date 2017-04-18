// Given a string, return a version without both the first and last char of the
// string. The string may be any length, including 0.

str="Today is April 3th"
var withoutEnd2=function(str) { 

  var result = str.slice(1,-1);
  console.log(result);

}

withoutEnd2(str);