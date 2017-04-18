var app = angular.module("myApp",[])
var input="JASON";

app.filter("capitalize", function(){
    return function(input){
        var newString = "";
        newString += input[0].toUpperCase();
        
        for (var i = 1; i < input.length; i++){
            
            if (input[i] === " "){
                
                newString += " " + input[i+1].toUpperCase();
                i++;
            } else {
                newString += input[i]
                console.log(input[i]);
            }
            
        }
        
        return newString;
    }
})

app.controller("mainController",["$scope","myservice","capitalize" ,function($scope,myservice,capitalize){
	$scope.test = myservice.test1;
	$scope.sum = function(input) {
		$scope.sum = parseInt(input.first)+parseInt(input.second);
		var input = {};
	}
}])

app.controller("secondController",["$scope",function($scope){
	$scope.product =function(input) {
		$scope.product = parseInt(input.first) * parseInt(input.second);
		var input ={};
	}
}])