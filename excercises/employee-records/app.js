//Creat one Object using that constructor

var employee = [];
function Employee (name, jTitle, salary, status)  {
	
	this.name = name;
	this.jobTitle = jTitle;
	this.salary = salary;
	this.status = status || "full time";
	this.printEmployeeForm = function() {
		console.log("Name: " + this.name, "Job Title: " + jTitle, "Salary: " + this.salary, "Status: " + this.status)
	}
}


var employeeA = new Employee("CJ", "Sales man", "$300,000");

var employeeB = new Employee("JL", "Engineer", "$500,000","Contract");

var employeeC = new Employee("BJ", "teacher", "$100,000");

//console.log("your name is" + name);
//console.log(employeeA.jTitle);

employee.push(employeeA);
employee.push(employeeB);
employee.push(employeeC);



//employeeB.status = "Contract"; // to change gender
console.log(employee[0].status);
console.log(employee[1].status);
console.log(employee[2].status);
employeeC.printEmployeeForm();


///* ex */
//var CharacterArray =[];
//
//function Character (cahracterClass, gender, strength) {
//	
//		this.cahracterClass = cahracterClass;
//		this.gender = gender;
//		this.strength = strength;
//		this.fight = function () {
//			console.log("You are fighting with a strength of " + strength)
//		}
//}
//
//for (var i=0; i < 5; i++) {
//	CharacterArray.push(new Character("Cleric" , "Eunich", 9000));
//}
//
//
//
//
//
//
//
