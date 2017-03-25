var app = angular.module('myApp', []);

app.controller('mainCtrl', function($scope) {

    $scope.person = {
        fname: "", lName: "", phone: "", email: "", favoriteFood: "", birthPlace: "", aboutYou: ""
    }


    $scope.submit = function(info) {
        $scope.person = info;
		$scope.newPerson = {};

       

    }
})


//var app = angular.module("myApp", []);
//
//app.controller("mainControler", ["$scope", function($scope) {
//	
//	$scope.submit = function(info) {
//		$scope.person = info;
//	}
//}]);
//	

//var app = angular.module('myApp', []);
//
//app.controller('mainCtrl', function($scope) {
//
//    $scope.person = {
//        fname: "", lName: "", phone: "", email: "", favoriteFood: "", birthPlace: "", aboutYou: ""
//    }
//
//
//    $scope.submit = function() {
//        $scope.person.fname = $scope.firstName;
//        $scope.person.lName = $scope.lastName;
//        $scope.person.phone = $scope.phone;
//        $scope.person.email = $scope.email;
//        $scope.person.favoriteFood = $scope.favoriteFood;
//        $scope.person.birthPlace = $scope.birthPlace;
//        $scope.person.aboutYou = $scope.aboutYou;
//
//    }
//})