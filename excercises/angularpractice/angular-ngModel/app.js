var app = angular.module ('learningAngular',[]);

app.controller('mainCtrl', ['$scope','dataService', function($scope,dataService){

//	   $scope.test = function() {
//	  	return $scope.type;
//	
//	};
    dataService.personLoggedIn = $scope.person;
	
}]);