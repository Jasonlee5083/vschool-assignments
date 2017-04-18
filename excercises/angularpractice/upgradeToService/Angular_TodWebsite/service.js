//service.js

var app = angular.module("myApp");

app.service("todoService",function($http){
	this.getTodo = function(info) {
		return $http.get('http://api.vschool.io/jason/todo/').then(function(response){
			list = response.data;
			return list;
		})
	}
	this.submit = function(info) {
		return $http.post('http://api.vschool.io/jason/todo/',info).then(function(response){
			return response.data;
		})
	}
	
	this.remove = function(id) {
		return $http.delete("http://api.vschool.io/jason/todo/" + id).then(function(response){
			return "your item has been deleted";
		})
	}
	
	this.save = function(info) {
		return $http.put('http://api.vschool.io/jason/todo/' + info._id, info) 
			
		

	}
		
	
	
})
