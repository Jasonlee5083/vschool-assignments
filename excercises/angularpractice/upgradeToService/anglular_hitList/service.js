//service.js

var app = angular.module("hitListApp")
	
app.service("hitService", function($http) {
	var hitlist = {};
	this.gethitlist = function(){
		
		return $http.get("http://api.vschool.io:6543/hitlist.json")
		.then(function(response){
		hitlist = response.data;
		return hitlist;
	})
	}
	

}) 

