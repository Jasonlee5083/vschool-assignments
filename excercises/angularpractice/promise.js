$scope.luke = {};
$http.get('');
.then(function(response){
	$scope.luke.name=response.data.name;
	$scope.luke.eyeColor = response.data.eye_color;
	return $http.get(response.data.homeworld);
}).then(function(response){
	$scope.luke.homeworld =response.data.name;
});
