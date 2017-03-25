var app = angular.module('yoda',[]);

app.controller('mainController',['$scope','$http', function($scope,$http) {
 
var config = {
	 headers: {
	'X-Mashape-Key': "ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm"							 
			}
 }
								 
$scope.getYodaSpeak = function() {
	url ="https://yoda.p.mashape.com/yoda?sentence=" + $scope.sentence 
								 
$http.get(url,config).then (
	function(response){
	$scope.yodaSentence = response.data;
	}, function(error) {
	console.log(error)
					}
	)}
}]);





			



								 
								 
								 
								 
//								 var req = {
//		method :"GET",
//		 url :url + $scope.sentence,
//		headers:{
//			'X-mashape-key':
//								 }
//								 }		
//	$scope.getYodaSpeak = function() {
//				req
//	$http().then(function(response){
// 
// 
//} ,
//								 
//function(error) {
//								 
//							
