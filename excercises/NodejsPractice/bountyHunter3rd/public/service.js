var app = angular.module("bounty-hunter");

app.service("httpService", function ($http) {
	this.getBounties = function () {
		return $http.get("/bounty").then(function (response) {
			return response.data;

		})


	}

	this.postBounties = function (newitem) {
		return $http.post("/bounty", newitem).then(function (response) {
			return response.data;

		})
	}
	
	this.removeBounties = function(id) {
		return $http.delete("/bounty/" +id).then(function(response){
			return "your item has been deleted"})
	}
	
	this.saveBounties = function(newitem) { 
		return $http.put("/bounty/" + newitem._id, newitem).then(function(response){
			console.log(response.data);
			return response.data;
		})
	
	}

})
