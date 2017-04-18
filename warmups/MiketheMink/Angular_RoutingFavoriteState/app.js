// app.js
var app = angular.module("myApp", ["ngRoute"])

app.config(["$routeProvider", function($routeProvider) {

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
	
}])

.directive('mikeTheMink', function () {
    return {
        template:"<img ng-hide ='mink' ng-mouseover='mink= true' src = download.jpg>"
		

		
    };
//	<img src="{{name}}">
});