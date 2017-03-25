var readlineSync = require('readline-sync');

var enemies = ["Ancient Dragon","Prowler","Mighty Grunt"];
var rewards = ["Gold bar", "Sting sward" , "HP"];
var inventory =[];

console.log (" \nCongratulations!!!  You are selected by V School team. You can enjoy unlimited RPG Game. You are going to start time travel in 1985 and enjoy it !!! \n");

var name = readlineSync.question(" Please enter your name \n\n");
console.log("\n Hi  " + name + "!!!");

walk();
				
	function walk() {	
		var wTowalk = readlineSync.question(" please enter W to walk \n\n");
		if (wTowalk === "W" ) {
			
			if (wTowalk === "W" && Math.floor(Math.random() * 2) == 1) {
				var oneThirdEnemy = Math.floor(Math.random() * 3);		
				console.log("\n " + enemies[oneThirdEnemy] + " appeared \n"); 
				return SelectAttackOrRun();
	
			}
			else {
				var wTowalk = readlineSync.question(" Please enter W to walk\n\n");
//				if (wTowalk === "q") {
//					break;
//				}
				return walk();
				}
		}
		else if (wTowalk === "Print") {
			console.log(" Name: " + name + " || Inventory List: " + inventory + "\n");
			return walk();
		}
		else {
		 	console.log(" Your input was not W. \n You have to enter W to Walk \n");
		 	return walk();
		 
			}
	}

	function SelectAttackOrRun() {
		var attackSelect = readlineSync.question(" Attack against the emeny or you can also runway. If your power is greater than 20, we will win.\n If you choose to run, there will be 50% chance of escaping. \n\n Enter A to attack or R to runaway \n\n");
		if (attackSelect === "A") {
			return attack();
		}
		else if (attackSelect === "R") {
			return runAway();
		}
		
		else if (attackSelect === "Print") {
			console.log(" Name: " + name + " || Inventory list: " + inventory + "\n" );
			SelectAttackOrRun();
		}
		
		else {
			console.log(" Wrong input !! \n\n  ") 
			SelectAttackOrRun(); 
			
		}
			
	}
	
	function attack () {
			console.log(" You attack the enemy ");
			Math.floor((Math.random() * (30 - 1)) + 1);
		   	var attackPower = Math.floor((Math.random() * (30 - 1)) + 1);
			console.log(" Your power is  " + attackPower + "\n");
		
		    if (Math.floor(attackPower > 20)) {
			  console.log(" You Win !!!\n");
			  console.log(" You are going back to the Game \n");
			  inventory.push(rewards[Math.floor(Math.random() * 3)]);
			  return walk();
			}
		
		  else {
			console.log( " Good try. But..that was not enough power to kill the ememy. \n The enemy will attack back to you \n\n");
 			return attackBack();
		  }
		 }

	function attackBack() {
			console.log("==========================================================")
			Math.floor((Math.random() * (30 - 1)) + 1);
		   	var attackPower2 = Math.floor((Math.random() * (30 - 1)) + 1);
			console.log(" " + enemies[Math.floor(Math.random() * 3)] + " attack you \n"); 
			console.log(" The enemy's power is  " + attackPower2 + "\n");
			if (attackPower2 > 20 ) {
			  console.log(" Cool death \n");
			}

			else {
			console.log( " The enemy didn't have  enough power to kill you.\n");
				return SelectAttackOrRun();
			}
		}

	function runAway() {
	  if (Math.floor(Math.random() * 2) === 1 ) {
		  console.log(" Cool death\n");
		}
	  else {
		console.log(" Good for you. You escaped enemy \n");  
		return walk();
	  }
	}





//var randomAttackPower =   return Math.floor(Math.random() * (max - min)) + min;

//var wTowalk ="W";
//var enemies = ["Ancient Dragon","Prowler","Mighty Grunt"];
//var randomEnemy = Math.floor(Math.random() * (3));
//var randomOneThird = Math.floor(Math.random() * (3));
//var randomFiftyPercent = Math.floor(Math.random() * (2));
//var appearedEnemy = enemies[randomOneThird];
//var randomAttackPower1 = Math.floor((Math.random() * (30 - 1)) + 1);
//var randomAttackPower2 = Math.floor((Math.random() * (30 - 1)) + 1);
//var rewards = ["gold bar", "siver sward" , "HP"]
//var inventory =[];
//
//if (wTowalk !== "W") {
//	  console.log("please enter W to walk ");
//		}	
//	
//	function walk(enemies) {
//	
//	if (wTowalk === "W" && randomOneThird === 0) {
//		console.log(enemies[randomEnemy] + " appeared"); 
//    return attack();
//  }
//}
// walk(enemies);
// 
//  function attack () {
// 
//  if (randomAttackPower1 > 20 ) {
//      console.log("You Win !!!");
//      inventory.push(rewards[randomOneThird]);
//      console.log(inventory);
//    }
//  
//  
//  else {
//    console.log(enemies[randomEnemy] + " appeared"); 
//    return attackBack();
//  }
//}
//attct();
//
//function attackBack() {
//  if (randomAttackPower2 > 20 ) {
//      console.log("Cool death");
//    }
//
//  
//  else {
//    console.log(enemies[randomEnemy] + " appeared"); 
//}
//}
//attackBack();
//
//function runaway() {
//  if (randomFiftyPercent === 0 ) {
//      console.log("Cool death");
//    }
//  else {
//    return walk();
//  }
//}
//runaway();
