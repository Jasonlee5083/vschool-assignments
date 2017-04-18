var app = angular.module('myApp',[]);

app.controller("mainCtrl",function($scope,moreservice) {
	$scope.lists = moreservice.lists;
	
	$scope.addCartoon = function(info) {
		$scope.lists = moreservice.submit(info);	
		$scope.newList = {};
	}
});


//
//var app = angular.module('myApp',[]);
//
//app.controller('mainCtrl',['$scope', function($scope) {
//	$scope.lists = [];
//	$scope.submit = function(info) {
//		$scope.lists.push(info);
//		$scope.newList = {};
//	}
//}]);