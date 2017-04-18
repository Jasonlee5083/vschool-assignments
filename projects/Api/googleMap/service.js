var app = angular.module("myApp");

app.service("mapservice",function($http) {
	
	var config = {
		headers:{
	'X-Mashape-Key': 'dfnU4hYGHxmshVKRvFYPvQND3Cfdp1sXuUpjsnhzljyW6zmpc0'	
		}
//		,data: { "name" :"jason"}
		
	};
	
	this.getMapdata1 = function(mapdata) {
		var url = 'https://michele-zonca-google-geocoding.p.mashape.com/geocode/json?address=' + mapdata;
		return $http.get(url,config).then(function(response){
			var mapResult = response.data;
			console.log(mapResult);
			return mapResult;
			
		})
	}
	
	
})

//var app = angular.module("myApp");
//
//app.service("mapservice",function($http) {
//	
//	var config = {
//		headers:{
//	'X-Mashape-Key': 'dfnU4hYGHxmshVKRvFYPvQND3Cfdp1sXuUpjsnhzljyW6zmpc0'	
//		}
////		,data: { "name" :"jason"}
//		
//	};
//	
//	this.getMapdata1 = function(mapdata) {
//		var url = 'https://michele-zonca-google-geocoding.p.mashape.com/geocode/json?address=' + mapdata;
//		return $http.get(url,config).then(function(response){
//			var mapResult = response.data;
//			console.log(mapResult);
//			return mapResult;
//			
//		})
//	}
//	
//	
//})
//
//
//var app = angular.module("myApp");
//
//app.service("mapservice",function($http) {
//	
//	var config = {
//		headers:{
//	'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'	
//		}
//	};
//	
//	this.getMapdata1 = function(mapdata) {
//		var url = 'https://yoda.p.mashape.com/yoda?sentence=' + mapdata;
//		return $http.get(url,config).then(function(response){
//			var mapResult = response.data;
//			console.log(mapResult);
//			return mapResult;
//			
//		})
//	}
//	
//	
//})


//var app = angular.module("myApp");
//
//app.service("mapservice",function($http) {
//	
//
//	this.getMapdata1 = function(data) {
//		var key = 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm';
//		var url = "https://yoda.p.mashape.com/yoda?sentence" + data + '&key=' + key;
//		return $http.get(url).then(function(response){
//			var mapResult = response.data;
//			console.log(mapResult);
//			return mapResult;
//			
//		})
//	}
//	
//	
//})


