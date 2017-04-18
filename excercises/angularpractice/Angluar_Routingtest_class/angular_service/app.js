//contact.js
var app = angular.module("routing-practice")
app.controller("ContactController", ["$scope", "nameService", function($scope,nameService){
	$scope.test ="This is a contact page"
	$scope.name = nameService.userName;
	$scope.submit= function(name) {
		nameService.userName = name;
		$scope.name=name
	}
	
}])

// html <button ng-click ="submit(input)"//


// about.js

ar app = angular.module("routing-practice")
app.controller("ContactController", ["$scope", "nameService", function($scope,nameService){
	
	$scope.name = nameService.userName;
		$scope.test = "this is the about page";
	
}])