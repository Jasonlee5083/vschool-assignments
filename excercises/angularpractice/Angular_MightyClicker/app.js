
var app = angular.module("myApp",[]);

app.controller("mainController", function($scope, blueservice,redservice){
	$scope.bcount = blueservice.bcount;
	$scope.rcount = redservice.rcount;

	
	$scope.blueClick = function () {
		$scope.bcount = blueservice.blueClick();
		$scope.rcount = redservice.rdecrease();
		if ( $scope.rcount <= 0) {
			$scope.rcount = redservice.redReset();
			
		}

	}
	
	$scope.redClick = function () {
		$scope.rcount = redservice.redClick();
		$scope.bcount = blueservice.bdecrease();
		if ($scope.bcount <= 0) {
			$scope.bcount = blueservice.blueReset();
		}

	}
	
	
})




