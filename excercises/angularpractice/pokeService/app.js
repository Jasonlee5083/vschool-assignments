//var app = angular.module("myApp",[]);
//
//app.controller("pokecontroller", function($scope, pokeservice){
//	//$scope.pokemon = pokeservice.pokemon;
//	
//	$scope.addpoke = function (poke) {
//		$scope.pokemon = pokeservice.addpoke(poke);
//	}
//	
//	$scope.removepokemon = function (name) {
//		$scope.pokemon = pokeservice.removepokemon(name);
//	}
//	 class note
//	$scope.luke = pokeservice.getLuke();
//	console.log($scope.luke); return promise
//	
//	
//	pokeservice.getLuke().then(function(response){
//		$scope.luke = luke;
//		
//		// {{luke.name}}
//		//{{luke.eyeColor}}
//	})
//})

var app = angular.module("myApp",[]);

app.controller("pokecontroller", function($scope, pokeservice){
	//$scope.pokemon = pokeservice.pokemon;
	
	$scope.addpoke = function (poke) {
		$scope.pokemon = pokeservice.addpoke(poke);
	}
	
	$scope.removepokemon = function (name) {
		$scope.pokemon = pokeservice.removepokemon(name);
	}
	
	
})




