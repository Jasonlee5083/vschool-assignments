
var readline = require("readline-sync");

var num1 = readline.question("Please type your fitst number for multiplication: ");  

var num2= readline.question("Please type your second number for multiplication: "); 

var result = parseInt(num1)*parseInt(num2);
	
function mul() {
		console.log("multiplication: " + result)
}

module.exports = {
	mul:mul
}
