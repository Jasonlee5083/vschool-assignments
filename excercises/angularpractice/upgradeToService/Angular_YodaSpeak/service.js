//service.js

var app = angular.module("yoda");

app.service("yodaservice", function($http) {
	
		var config = {
		 headers: {
	'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'							 
			}
	};

	
	this.getYodaSpeak = function(info) {
		var url = "https://yoda.p.mashape.com/yoda?sentence=" + info;
		
		return $http.get(url,config).then(function(response){
			var yoda = response.data;
			console.log(yoda);
			return yoda;
			
			
			}
				  )};
});
	


			
				  
				  
//var app = angular.module('yoda',[]);
//
//app.controller('mainController',['$scope','$http', function($scope,$http) {
// 
//var config = {
//	 headers: {
//	'X-Mashape-Key': "ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm"							 
//			}
// }
//								 
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
//}]);
