var app = angular.module("myConverter",[]) 

app.filter("convertTemp", function(){
		
	
	
	return function(temps) {
			var tempFah = temps*(9/5)+32;
			console.log(tempFah);
		
		return tempFah;
		
	}
}) 

app.controller("mainController",["$scope",function($scope){
	
	var temps = [10, 15, 20, 25, 30];
//	var tempFah = [];
	
	$scope.tempC = temps;
	
}])




    
//	return function(input){
//        var newString = "";
//        newString += input[0].toUpperCase();
//        
//        for (var i = 1; i < input.length; i++){
//            
//            if (input[i] === " "){
//                
//                newString += " " + input[i+1].toUpperCase();
//                i++;
//            } else {
//                newString += input[i]
//                console.log(input[i]);
//            }
//            
//        }
//        
//        return newString;