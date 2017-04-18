// app.js
angular.module("myApp", ["ngRoute"])

.config(["$routeProvider", function($routeProvider) {

    $routeProvider
  
        .when("/computer", {
            templateUrl: "computer/computer.html",
            controller: "computerController"
        })
    	.when("/robots", {
            templateUrl: "robots/robots.html",
            controller: "robotsController",
        })
	 	.otherwise({
            redirectTo: "/computer"
        });
	
}]);

