var readlineSync = require('readline-sync');

var readline = require("readline-sync");

var num1 = readline.question("Please type your fitst number: ");  

var num2= readline.question("Please type your second number: "); 

var operations = readlineSync.question("Please enter the operation to perform: add, sub, mul, div, exp  ");

if (operations === 'add') {
	
	var add = require("./add");
console.log("addition: " + add(num1,num2));
	
}

else if (operations === 'sub'){
	
	var subtract = require("./sub");
subtract.sub(num1,num2);

}

else if (operations === 'mul'){
	var multiply = require("./mul");
multiply.mul(num1,num2);
	
}

else if (operations === 'div'){
		
	var divide = require("./div");
divide.div(num1,num2);	
	}

else if (operations === 'exp'){
	
	var exponent = require("./exp");
exponent.exp(num1,num2);

}

else {
	
	console.log("wrong input");
}







































//
//var userInput = require("./get-user-input");  
////console.log(" your name is" + userInput.fName+ ' ' + userInput.lName);
//
////console.log("your name is " + userInput("nate"));
//
//console.log("your name is " + userInput.wholeName());
//
//
////require(".add-property");
////var final = require("./app");
////
////console.log(final)