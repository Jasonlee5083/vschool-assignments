var app = angular.module("myApp");

app.filter("unitLat",function(){
	return function(num) {
		if (num === undefined){
			return;
		}
		return  'Latitude: ' + num;
	}
});

app.filter("unitlng",function(){
	return function(num) {
		if (num === undefined){
			return;
		}
		return ' Longitude: ' + num;
	}
});

app.controller('oneController',['$scope','mapservice','$location', function($scope,mapservice,$location) {
 
	$scope.getMapdata = function(input) {
		mapservice.getMapdata1(input).then(function(mapResult){
			$location.path('/three')
			$scope.lat = mapResult.results[0].geometry.location.lat;
			$scope.lng = mapResult.results[0].geometry.location.lng;

		});
	}
 
	
}]);





//var app = angular.module("myApp");
//
//app.controller('oneController',['$scope','mapservice', function($scope,mapservice) {
// 
//	$scope.getMapdata = function(input) {
//		mapservice.getMapdata1(input).then(function(mapResult){
//			$scope.lat = mapResult.results[0].geometry.location.lat;
//			$scope.lng = mapResult.results[0].geometry.location.lng;
//
//		});
//	}
// 
//	
//}]);
//var app = angular.module("myConverter",[]) 
//	
//
//app.filter("convertTemp", function(){
//		
//	return function(currentTempF,selectedTems ) {
//		
//		if (selectedTems==="°F") {
//			
//		var TemFah = currentTempF;
//			TemFah = TemFah.toFixed(2);
//		return 	TemFah;
//			
//		}
//		
//		else if (selectedTems === "°C") {
//			
//		var temCel = (currentTempF-32)*(5/9);
//			temCel = temCel.toFixed(2);
//		return temCel;
//			
//		}
//		else if (selectedTems === "°K") {
//			
//		var temKel = (currentTempF-32)*(5/9) + 273.15;
//			temKel = temKel.toFixed(2);
//		return temKel;
//	
//		}	
//		console.log(selectedTems);
//	}
//}) 
//
//app.controller("mainController",["$scope","$http",function($scope,$http){
//	
//$scope.tems = {
//	Fahrenheit:"°F",
//	Celsius:"°C",
//	Kelvin: "°K"
//	}