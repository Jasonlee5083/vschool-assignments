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
	
}])

.directive('myInfo', function () {
    return {
        template:'<span class="results"><table><tr><td>{{item.name}}</td></tr><tr><td>{{item.price | currency:"$"}}</td></tr><tr><td><img src="{{item.image}}"</td></tr></table></span>',
        restrict: 'E'
    };
	
});

