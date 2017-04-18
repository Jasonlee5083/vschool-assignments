<!DOCTYPE html>
<html>
  <head>
    <title>Simple Map</title>
    <meta name="viewport" content="initial-scale=1.0">
    <meta charset="utf-8">
    <style>
      /* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
      #map {
        height: 100%;
      }
      /* Optional: Makes the sample page fill the window. */
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <script>
      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }
    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
    async defer></script>
  </body>
</html>



////service.js
//
//var app = angular.module("yoda");
//
//app.service("yodaservice", function($http) {
//	
//		var config = {
//		 headers: {
//	'X-Mashape-Key': 'AIzaSyAFrB1ToTkq4a-BNsaGUf_zgtR_Rb3Aa-0'							 
//			}
//	};
//
//	
//	this.getYodaSpeak = function(info) {
//		var url = "https://maps.googleapis.com/maps/api/js?sentence=" + info;
//		
//		return $http.get(url,config).then(function(response){
//			var yoda = response.data;
//			console.log(yoda);
//			return yoda;
//			
//			
//			}
//				  )};
//});
//	
//
//"https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
//			
				  
				  
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
