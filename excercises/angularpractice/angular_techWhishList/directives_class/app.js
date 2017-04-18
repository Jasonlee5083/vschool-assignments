// app.js
angular.module('myApp', [])

.directive("clickRed",function (){
	return {
		restrict:"A",
		elem.on("click",function(){
				elem.css("color","red");
			});
//	controller:function($scope,UserService){
//		
//	}
	}
})
.directive('myInfo', function () {
    return {
        templateUrl: 'info.html',
        scope: {
//			name:"@",
//			email:'@',
			contact:"=" 
//			contact:"&"
		},
		link:function(scope,attrs,elem,attrs) {
//			scope.contact ={
//				name:"LOL",
//				email:"L@gmail.com"
//			}
			elem.on("click",function(){
				elem.css("color","red");
			});
		}
    };
})

.controller('myController', function ($scope) {
    $scope.people = {
		
		
	}
	$scope.freinds =
		{
			name:"A",
			email:"A@gmail"
		}
	
		
	
//	$scope.personName = 'A';
//    $scope.personEmail = 'A@gmail.com';
})

.controller('secondController', function ($scope) {
    
	 $scope.associate =
		{
			name:"A",
			email:"A@gmail"
		}
	$scope.contactName = 'Warren Buffett';
    $scope.contactEmail = 'warren.buffett@gmail.com';
})



.directive('myInfo', function () {
    return {
        template: '<span>{{name}} -- reach me at {{email}}</span>',
        restrict: 'E'
    };
});