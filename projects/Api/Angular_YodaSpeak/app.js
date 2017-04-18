//app.js

var app = angular.module('yoda',[]);

app.controller('mainController',['$scope','yodaservice', function($scope,yodaservice) {
 
	$scope.getYoda = function(sentence) {
		yodaservice.getYodaSpeak(sentence).then(function(yoda){
			$scope.yodaSentence = yoda;
		});
	}
	
	
//yodaservice.getYodaSpeak(info).then(function() {
//	$scope.yodaSentence = yodaSentence;
//	console.log(yodaSentence);
//	});
							 
								 
//$scope.getYodaSpeak = function() {
//	url ="https://yoda.p.mashape.com/yoda?sentence=" + $scope.sentence 
//								 
//$http.get(url,config).then (
//	function(response){
//	$scope.yodaSentence = response.data;
//	}, function(error) {
//	console.log(error)
//					}
//	)}
	
	
	
}]);


////app.js
//var app =angular.module("hitListApp",[]);
//
//app.controller("mainController",["$scope","$http","hitService",function($scope,$http,hitService) {
//	hitService.gethitlist().then(function(hitlist){
//	$scope.hitList = hitlist;
//	});
//}])
						
