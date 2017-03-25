var app = angular.module('myApp',[]);

app.controller('mainCtrl',['$scope', function($scope) {
	$scope.lists = [];
	$scope.submit = function(info) {
		$scope.lists.push(info);
		$scope.newList = {};
	}
}]);



//var app = angular.module('myApp',[]);
//
//app.controller('mainCtrl',['$scope', function($scope) {
//	$scope.submit = function(info) {
//		$scope.list = info;
//		$scope.newList = {};
//	}
//}]);

//$scope.people = [];
//	$scope.submit = function(info) {
//		$scope.people.push(info);
//		$scope.newPerson = {};



//var app = angular.module('myApp', []);
//
//app.controller('mainCtrl', function($scope) {
//
//    $scope.person = {
//        fname: "", lName: "", phone: "", email: "", favoriteFood: "", birthPlace: "", aboutYou: ""
//    }
//
//
//    $scope.submit = function(info) {
//        $scope.person = info;
//		$scope.newPerson = {};
//
//       
//
//    }
//})

