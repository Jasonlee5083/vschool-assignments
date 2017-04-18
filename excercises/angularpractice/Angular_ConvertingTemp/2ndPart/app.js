var app = angular.module("myConverter",[]) 
	

app.filter("convertTemp", function(){
		
	return function(currentTempF,selectedTems ) {
		
		if (selectedTems==="°F") {
			
		var TemFah = currentTempF;
			TemFah = TemFah.toFixed(2);
		return 	TemFah;
			
		}
		
		else if (selectedTems === "°C") {
			
		var temCel = (currentTempF-32)*(5/9);
			temCel = temCel.toFixed(2);
		return temCel;
			
		}
		else if (selectedTems === "°K") {
			
		var temKel = (currentTempF-32)*(5/9) + 273.15;
			temKel = temKel.toFixed(2);
		return temKel;
	
		}	
		console.log(selectedTems);
	}
}) 

app.controller("mainController",["$scope","$http",function($scope,$http){
	
$scope.tems = {
	Fahrenheit:"°F",
	Celsius:"°C",
	Kelvin: "°K"
	}


$scope.init = function(lat, lon) {
	var lat =  parseInt(39.3210); 
	var lon =  parseInt(-111.0937);
    var key = '12c88eeb31096ba68ccef37a923bf98f';
    var url = 'https://api.darksky.net/forecast/' + key + '/' + lat + ',' + lon + '?callback=JSON_CALLBACK';
    $http.jsonp((url))
        .then(function(response){
            var currentTempF = response.data.currently.temperature;
          return  $scope.cur = currentTempF;
		console.log(currentTempF);
        })
}

}])

