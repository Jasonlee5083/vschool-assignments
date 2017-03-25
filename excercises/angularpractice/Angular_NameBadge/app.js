var app = angular.module ('learningAngular',[]);

app.controller('mainCtrl', ['$scope', function($scope){
 $scope.collection = [{fname:"",lname:"",email:"",placeOfBirth:"", Phone:"", favoriteFood:"",aboutYou:"" }]
 $scope.myInfo = function() {
	$scope.collection.push($scope.newData);
	$scope.newData ='';
	};
    
//    dataService.personLoggedIn = $scope.person;
//	
}]);

