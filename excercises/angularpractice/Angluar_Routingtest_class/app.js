var app = angular.module("rounting-practice", ['ngRoute'])
.config(["$routeProvider", function($routeProvider){
	
		$routeProvider
        .when("/about", {
            templateUrl: "about/about.html",
            controller: "aboutController"
        })

	
}]);