var app = angular.module('httpApp',[]);

app.controller('mainController',['$scope','$http',function($scope,$http){
	
	$http.get('http://pokeapi.co/api/v1/pokemon/1')
        .then(function (response) {
            console.log(response.data);
        });
	var todos = {
		title:'Buy hat',
		discription:'Not Salmon',
		completed:false
	}
	$http.post('http://api.vschool.io/bob/todo/hey', todos)
        .then(function (response) {
		console.log(response.data)
	});
	
}])

