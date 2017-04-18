// robots.js
angular.module("myApp")

.controller("robotsController", ["$scope", function($scope) {
	$scope.robots =[
		{
		
	name:  "UBTECH Alpha 1S Humanoid Robot",
	price : 500,
	image : "https://static.bhphoto.com/images/images500x500/1449519673000_1204899.jpg"
	
	},
	
	{name:  "Humanoid Robot Standard Kit (H1-B)",
	price : 479,
	image : "http://www.robotshop.com/media/catalog/product/cache/1/image/900x900/9df78eab33525d08d6e5fb8d27136e95/h/u/humanoid-robot-standard-kit-h1-b_2.png"
	},
		
	{name:"New Star Wars Interactive R2D2 Robot",
	price : 1187.99,
	image : "https://images.bonanzastatic.com/afu/images/3287/9918/09/__1.jpg"
	}	
	]
  

}]);