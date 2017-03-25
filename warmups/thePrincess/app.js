var player = {
	name: "Mario",
	totalCoins: 0,
	status: "Small",
	isStarActive: false,
	setName: function (namePicked) {
		this.name = namePicked;
	},
	goHit: function () {
		if (this.status === "Powred Up") {
		this.status = "Big"
	}
		else if (this.status === "Big") {
		this.status = "Samll"	
			
		}
		else if (this.status === "Small") {
	    this.status = "Dead"
		this.isGameAcitve = false;
		}
		}
	},
	{
		goPowerUp: function () {
		if (this.status === "Small") {
		this.status = "Big"
	}
		else if (this.status === "Big") {
		this.status = "Powred Up"	
			
		}
	
		}
	},
		ifGameActive: true,
		addCoin: function () {
			this.totalCoins ++;
		},
		printStats: function () {
			var satrMessage = "Don't have a star";
			if (this.isStarActive) starMessage = "do have a star" ;
			console.log (` The caracter name ${this.name}, and you have ${this.coin}, are ${this.status}, and you are ${starMessage}`)
		}
		
}

function randRange(min,max) {
	return Math.floor(Math.random*(max-min)+min)
		}
function action() {
	var random = randRange(0,3); 
	if(random === 0) {
		player.goHit();
	}
	else if (random === 1) {
		player.goPowerup();
	}
	else if (random === 2) {
		player.addCoin();
	}
}

player.printStats();

for (var i =0; i < 3; i++) {
	action();
	player.printStats();
	
}

	
//function getRandomInt(min, max) {
//    return Math.floor(Math.random() * (max - min + 1)) + min;
//}
//function randomRange () {
//	if (getRandomInt(0, 2) === "0") {
//		princess.goHit() ;
//	}
//	else if (getRandomInt(0, 2) === "1") {
//		princess.gotPowerup();
//	}
//	else if (getRandomInt(0, 2) === "2")
//		{
//			princess.addCoin();
//		}
//}
//
//princess.print();
//
//var princess = {
//	name: "Snow White",
//	totalCoins: "1000",
//	status: ["Powered Up", "Big", "Small", "Dead"],
//	star: ["true", "false"], // Is a star active ?
//	setName: function (namePicked) {
//		return namePicked;
//	},
//	goHit: function () {
//		return this.status;
//		if (this.status === "Powred Up") {
//			goPowerup();
//		}
//	},
//	goPowerup: function () {
//		
//	},
//	
//	gameActive: ["true", "false"],
//	addCoin: function () {
//		newCoint = this.totalCoins + 1000;
//	},
//	print: function () {
//		console.log (princess);
//	}
//}
