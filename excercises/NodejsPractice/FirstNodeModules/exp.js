//var readline = require("readline-sync");
//
//var num1 = readline.question("Please type your fitst number for Exponentiation: ");  
//
//var num2= readline.question("Please type your second number for Exponentiation: "); 

module.exports.exp = function(num1,num2) {
	
	var result = Math.pow(parseInt(num1),(parseInt(num2)));
	console.log("Exponentiation: " + result);
	
	}