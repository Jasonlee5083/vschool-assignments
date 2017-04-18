angular.module('temperatureApp')

.service('getTempService',['$http',function($http){
	
	this.getTemp = function(lat,long) {
		return $http.jasonp('https://api.darksky.net/forecast/' + key + '/' + lat + ',' + lon + '?callback=JSON_CALLBACK').then(function(response){
			var currentTemp = response.data.currently.temperature;
			
		})
	}
}])


.controller('mainController',['$scope','getTempService' ,function($scope,getTempService){
	$scope.submit = function(lat,long) {
		getTempService.getTemp(lat,long).then(function) {}
	}
}])



//var app = angular.module("myConverter",[]) 
//	
//
//app.filter("convertTemp", function(){
//		
//	return function(currentTempF) {
//		
//		if (tems.Fahrenheit) {
//			
//		var TemFah = currentTempF;
//		return 	TemFah;
//			
//		}
//		
//		else if (tems.Celsius) {
//			
//		var temCel = (currentTempF-32)*(5/9);
//		return temCel;
//			
//		}
//		else if (tems.Kelvin) {
//			
//		var temKel = (currentTempF-32)*(5/9) + 273.15;
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
//
//
//$scope.init = function(lat, lon) {
//	var lat =  parseInt(39.3210); 
//	var lon =  parseInt(-111.0937);
//    var key = '12c88eeb31096ba68ccef37a923bf98f';
//    var url = 'https://api.darksky.net/forecast/' + key + '/' + lat + ',' + lon + '?callback=JSON_CALLBACK';
//    $http.jsonp((url))
//        .then(function(response){
//            var currentTempF = response.data.currently.temperature;
//          return  $scope.cur = currentTempF;
//		console.log(currentTempF);
//        })
//}
//
//}])