angular.module('myApp', [])

.directive("navbar",funciton(){
		   
		  return {
		  
		   templeUrl : "directives/navbar/navbar.html"
		   replace:true;
		   }
		   })