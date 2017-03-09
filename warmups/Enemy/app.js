var enemy =[];
var threeEnemies = ["Ancient Dragon","Prowler","Mighty Grunt"];

function Enemy  (type, hitPoints, defense) 
	{
		this.type;
		this.hitPoint;
		this.defense;
	}

//var enemy = [];
//function Enemy (type, hitPoints, defense) {
//	
//	this.getType = function () 
//		{ 
//			var enmyType = ["Ancient Dragon", "Prowler", "Mighty Grunt"] 
//			 var randomZeroTo2 = Math.floor(Math.floor(Math.random()*10)/4);
//				var randomEnenmy = enmyType[randomZeroTo2];
//		//return randomEnenmy;
//			console.log(randomEnenmy);
//			}
//	this.type = this.getType()
//	this.gethitPoints = function () 
//		{
//			if (this.type == "Ancient Dragon") 
//			{
//				var max = 100;
//				var min = 80;
//				var hitPoints1 = Math.floor(Math.random() * (max - min) + min);
//				console.log(hitPoints1);
//			}
//		    else if (this.type == "Prowler") 
//			{
//				var max = 79;
//				var min = 50;
//				var hitPoints2 =
//				Math.floor(Math.random() * (max - min) + min);
//				console.log(hitPoints2);
//
//			}
//			else 
//			{
//				var max = 49;
//				var min = 20;
//				var hitPoints3 =
//				Math.floor(Math.random() * (max - min) + min);
//				console.log(hitPoints3);
//
//			}
//		}
//	this.hitPoints = gethitPoints(); 
//	this.defense = defense;
//
//}
//	for (i=0; i<100; i++) {
//		
//		var enemies = new Enemies[i](Enemy.this.type,Enemy.this.hitPoints,Enemy.this.defense*3);
//		enemy.push(enemies);
//	}
//
