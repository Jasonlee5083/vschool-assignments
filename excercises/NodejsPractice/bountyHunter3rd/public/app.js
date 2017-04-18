var app = angular.module("bounty-hunter", []);

app.controller("bounties", function ($scope, httpService) {
			$scope.bounties = [];
	
		$scope.getBounties = function(){	httpService.getBounties().then(function (response) {
				$scope.bounties = response;
			})
										}
		$scope.getBounties();


			$scope.submit = function (input) {
				httpService.postBounties(input).then(function (data) {
					$scope.bounties.push(data);
				})

			}
			
		$scope.remove = function(index,id) {
			httpService.removeBounties(id).then(function(response){
				$scope.bounties.splice(index,1);
			})
		}
		
		$scope.save = function(newitem) {
			httpService.saveBounties(newitem);
		}
			
})
