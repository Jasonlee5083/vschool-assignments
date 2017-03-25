var app = angular.module("practice", []);

app.controller("mainController", ["$scope",function($scope){
    
    $scope.people = [];
    
    $scope.submit = function(info){
        $scope.people.push(info);
        $scope.newPerson = {};
		$scope.personForm.$setUntouched();
        
    }
    $scope.delete = function(i) {
		$scope.people.splice(i,1);
	}
}])



//var app = angular.module("myApp", []);
//
//app.controller("mainControler", ["$scope", function($scope) {
//	
//	$scope.people = [];
//	$scope.submit = function(info) {
//		$scope.people.push(info);
//		$scope.newPerson = {};
//		
//		
//	}
//}]);
								  
//var app = angular.module("myApp", []);
//
//app.controller("mainControler", ["$scope", function($scope) {
//	
//	$scope.people = [];
//	$scope.submit = function(info) {
//		$scope.person = info;
//		$scope.newPerson = {};
//	}
//}]);