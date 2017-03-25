var app = angular.module('hitListpApp',[]);

app.controller('mainController',['$scope','$http',function($scope,$http){
	
	$http.get('http://api.vschool.io:6543/hitlist.json')
        .then(function (response) {
			$scope.hitList = response.data;
        });
	
}])


//var app = angular.module('hitListpApp',[]);
//
//app.controller('mainController',['$scope','$http',function($scope,$http){
	
//	var req = {
//		method:"GET",
//		url: "http://poke",
//		headers: {
//			password:"dasfafd"
//		}
//	} 
//$http(req).then( /*successCallback*/ );

//$http.get('http://api.vschool.io:6543/hitlist.json')
//        .then(function (response) {
//			$scope.pokemon = response.data.objects[0].pokemon;
//        });
	


//<ul>
//<span ng-repeat="monster in pokemon">
//	<li>{{monster.name}}</li>
//</ul>
	
//var app = angular.module('hitListpApp',[]);
//
//app.controller('mainController',['$scope','$http',function($scope,$http){
//	
//	$http.get('http://api.vschool.io:6543/hitlist.json')
//        .then(function (response) {
//			$scope.hitList = response.data;
//        });
//	
//}])