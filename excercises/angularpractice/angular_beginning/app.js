var app = angular.module ('learningAngular',[]);

app.controller('mainCtrl', ['$scope','dataService', function($scope,dataService){
	$scope.person = {
		firstName: 'Jason',
        lastName: 'Lee'
	};
	$scope.getName = function() {
	  	return $scope.person.firstName + ' ' + $scope.person.lastName;
	
	};
	
		$scope.test = function() {
	  	return $scope.type;
	
	};
	
	$scope.todos = [
    {
        name: "Bread",
        price: "$2.00"
    },
    {
        name: "Milk",
        price: "$2.99"
    },
    {
        name: "Protein",
        price: "$14.50"
    }
]
	$scope.type ="TEST";
	
    dataService.personLoggedIn = $scope.person;
	
}]);




















//var app = angular.module('myApp',[]); /class work/
//
//app.controller('mainController', ['$scope', function($scope) {
//	$scope.person = {
//		firstName: "John",
//        lastName: "Johnson"
//	}
//	$scope.house = 'this is my house:'
//	$scope.getName = function() {
//	    return $scope.person.firstName + ' ' + $scope.person.lastName;
//
//	}
//}])

