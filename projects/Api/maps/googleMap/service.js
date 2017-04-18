var app = angular.module("myApp");

app.service("mapservice",function($http) {
	
	var config = {
		headers:{
	'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'	
		}
	};
	
	this.getMapdata = function(mapdata) {
		var url = "https://yoda.p.mashape.com/yoda?sentence=" + mapdata;
		return $http.get(url,config).then(function(response){
			var mapResult = response.data;
			console.log(mapResult);
			return mapResult;
			
		})
	}
	
	
})