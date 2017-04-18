// app.js
angular.module("myApp", ["ngRoute"])

.config(["$routeProvider", function($routeProvider) {

    $routeProvider
        .when("/home", {
            templateUrl: "home/home.html",
            controller: "HomeController"
        })
        .when("/about", {
            templateUrl: "about/about.html",
            controller: "AboutController"
        })
    	.when("/whyilove", {
            templateUrl: "whyilove/whyilove.html",
            controller: "whyiloveController",
        })
	 	.otherwise({
            redirectTo: "/home"
        });
	
}]);