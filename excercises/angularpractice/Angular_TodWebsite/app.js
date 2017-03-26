var app = angular.module('myApp',[]);

app.controller('mainController',['$scope','$http', function($scope,$http)
{
								 
	$http.get('http://api.vschool.io/jason/todo')
		.then(function(response){
		$scope.postMe = response.data;
	});
	
	$scope.submit = function(info){
	$http.post('http://api.vschool.io/jason/todo/',info).then(function(response){
		$scope.postMe.push(response.data);
	console.log("success")
})
	}
	
$scope.remove = function(index,id){
	
	$http.delete('http://api.vschool.io/jason/todo/',+ $scope.remove[index]._id).then(function(){
		$scope.remove.splice(index,1) = response;
	})
}

$scope.edit = function(index) {
	
}

}]);



//var postData = {
//	msg: 'hello world'
//}
	
//$scope.remove = function(index,id){
//	
//	$http.delete('http://api.vschool.io/jason/todo/',+ $scope.remove[index].id).then(function(){
//		$scope.remove.splice(index,1);
//	})
//}





