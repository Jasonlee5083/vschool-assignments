//app.js

var app = angular.module('myApp', []);

app.controller('mainController', ['$scope', '$http', 'todoService', function ($scope, $http, todoService)
	{
		todoService.getTodo().then(function (list) {
			$scope.posts = list;

		})

		$scope.submit = function (todo) {

			todoService.submit(todo).then(function (newPost) {
				$scope.posts.push(newPost);

			})
		}

		$scope.remove = function (index, id) {


			todoService.remove(id).then(function (response) {
				$scope.posts.splice(index, 1);
				console.log(response)
			})

		}
		$scope.save = function (item, i) {
			todoService.save(item).then(function () {
				$scope.posts[i] = item;

			})
		}
}]);
