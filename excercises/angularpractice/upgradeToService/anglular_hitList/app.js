//app.js
var app =angular.module("hitListApp",[]);

app.controller("mainController",["$scope","$http","hitService",function($scope,$http,hitService) {
	hitService.gethitlist().then(function(hitlist){
	$scope.hitList = hitlist;
	});
}])







//var app = angular.module('hitListpApp',[]);
//
//app.controller('mainController',['$scope','$http',function($scope,$http){
//	
//	$http.get('http://api.vschool.io:6543/hitlist.json')
//        .then(function (response) {
//			$scope.hitList = response.data;
//        });
//	
//}])


