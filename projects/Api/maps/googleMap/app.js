angular.module("myApp", ["ngRoute"])

.config(["$routeProvider", function($routeProvider) {

    $routeProvider
  
        .when("/one", {
            templateUrl: "one/one.html",
            controller: "oneController"
        })
    	.when("/two", {
            templateUrl: "two/two.html",
            controller: "twoController",
        })
		.when("/three", {
            templateUrl: "three/three.html",
            controller: "threeController",
        })
	
	 	.otherwise({
            redirectTo: "/one"
        });
	
	}]);
//	app.controller('mainController',['$scope','$http', function($scope,$http) {
// 
//var config = {
//	 headers: {
//	'X-Mashape-Key': "ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm"							 
//			}
// }
								 

//
//app.controller('oneController',['$scope','mapservice', function($scope,mapservice) {
// 
//	$scope.getMapdata = function(input) {
//		mapservice.getmap(input).then(function(mapResult){
//			$scope.mapdata = mapResult;
//			console.log(mapResult);
//		});
//	}
//	
//	
//}]);