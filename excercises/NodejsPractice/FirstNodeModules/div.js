
//var readline = require("readline-sync");
//
//var num1 = readline.question("Please type your fitst number division: ");  
//
//var num2= readline.question("Please type your second number division: "); 

module.exports.div = function(num1,num2) {
	
	var result = parseInt(num1)/parseInt(num2);
	console.log("division: " + result);
	
	}