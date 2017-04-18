var app = angular.module('myApp',[]);

app.controller('mainController',['$scope','$http', function($scope,$http)
{
								 
	$http.get('http://api.vschool.io/jason/todo')
		.then(function(response){
		$scope.newPost = response.data;
	});
	
	$scope.submit = function(info){
	$http.post('http://api.vschool.io/jason/todo/',info).then(function(response){
		$scope.newPost.push(response.data);
	console.log("success")
})
	}
	
//$scope.remove = function(index){
//	
//	$http.delete('http://api.vschool.io/jason/todo/' + $scope.newPost[index]._id)
//		.then(function(){
//		$scope.newPost.splice(index,1);
//	}
//													)}

$scope.remove = function(index, id) {
	$http.delete("http://api.vschool.io/jason/todo/" + id)
	$scope.newPost.splice(index,1);
}
	

	$scope.save = function(info){
	$http.put('http://api.vschool.io/jason/todo/' + info._id, info)

	}

}]);


//$scope.edit = function(index) {
	
//}
//var postData = {
//	msg: 'hello world'
//}
	






