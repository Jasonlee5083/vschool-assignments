//var app = angular.module("myApp");
//	
//app.service("pokeservice", function(){
//	this.pokemon = [];
//	var self =this;
//	
//	this.addpoke = function(pokeName) {
//		self.pokemon.push(pokeName);
//		return self.pokemon;
//	
//	}
//	// class note
//	this.getLuke = function() {
//		var luke ={};
//		return $http.get("https://swapi.co/people/1/") //promise
//		.then(function(response){ //promose
//			luke.name =response.data.name;
//			luke.eyeColor =response.date.eye_Color;
//			return $http.get(response.data.homeworld);
//		}).then(function(response){
//			//what ever you do when there is problem
//			luke.homeworld=response.data.name;
//			return luke;
//		})
//	//	
//		
//	}
	
//	this.removepokemon = function(name) {
//		for (i=0; i < self.pokemon.length; i++) {
//			//console.log(self.pokemon[i]);
////			console.log(index);
////			console.log(pokemon);
//			if (self.pokemon[i] === name) {
////		console.log(name);
////		console.log(self.pokemon);
//		//console.log(self.pokemon.splice(name,1));
//
//		//console.log(self.pokemon.splice(name,1));
//			self.pokemon.splice([i],1);
//		
////			return pokemon;
//				//return self.pokemon;
////			
//			}
//			
//		}
//					return self.pokemon;
//
//	}
//		
//		
//
//
//	
//})


var app = angular.module("myApp");
	
app.service("pokeservice", function(){
	this.pokemon = [];
	var self =this;
	
	this.addpoke = function(pokeName) {
		self.pokemon.push(pokeName);
		return self.pokemon;
	
	}
	
	this.removepokemon = function(name) {
		for (i=0; i < self.pokemon.length; i++) {
			
			if (self.pokemon[i] === name) {

			self.pokemon.splice([i],1);
		

			}
			
		}
					return self.pokemon;

	}
		
		


	
})

