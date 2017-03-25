function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInt(0, 1);

var parties =[];
function Parties (name, population) {
	this.name = name;
	this.population = population;
}

var partyPenguins = new Parties("Penguins", 1000000);
var partyCommunists = new Parties("Communists", 1000000);

parties.push(partyPenguins);
parties.push(partyCommunists);

//var randomZeroOrONe = getRandomInt(0, 1);
//if (randomZeroOrONe === 0) {
// parties.reverse();
//} 


 

while (parties[0].population > 0 && parties[1].population > 0 ) { 
//	var randomZeroOrONe = getRandomInt(0, 1);
//	if (randomZeroOrONe === 0) {
//	 parties.reverse();
//		} 
   	sendNuke(parties[0], onHit, onMiss);
	var randomZeroOrONe = getRandomInt(0, 1);
	if (randomZeroOrONe === 0) {
	 parties.reverse();
	} 

}

	function sendNuke(party, onHit, onMiss) {
	  
	  ifAttack(party, onHit, onMiss);
	  
	}
	  
	 function ifAttack(party, onHit, onMiss) {
	   
	   	var randomZeroOrONe = getRandomInt(0, 2);
		  if (randomZeroOrONe === 1 || randomZeroOrONe === 0) {
		  onHit(party);
		  }
		  else {
		   onMiss(party);
		  }
	 } 
	  
	function onHit(party) {
		party.population = party.population - getRandomInt(0, 100);	
	    console.log (party.name + " attacked " + parties[1].name );
	    console.log (parties[1].name + " 's population is " + parties[1].population);
	    
		if (party.population < 0) 
			{
		console.log(party.name + " population is " + party.population);
		
		console.log(parties[1].name + " won");
			}
		else if (parties[1].population < 0)  {
		console.log(parties[1].name + " population is " + parties[1].population);
	
		console.log(party.name + " won");
		}
//		else {
//		party.population = party.population - getRandomInt(0, 100);	
//	    console.log (party.name + " attacked " + parties[1].name );
//	    console.log (parties[1].name + " 's population is " + parties[1].population);
//		}
		}
		
	function onMiss() {
	  console.log("Not a successful Nuke" );
		
}
	
