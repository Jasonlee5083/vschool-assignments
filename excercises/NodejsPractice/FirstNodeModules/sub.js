
//var readline = require("readline-sync");
//
//var num1 = readline.question("Please type your fitst number for subtraction: ");  
//
//var num2= readline.question("Please type your second number for subtraction: "); 

module.exports.sub = function(num1,num2) {
	
	var result = parseInt(num1) - parseInt(num2);
	console.log("subtraction: " + result);
	
	}