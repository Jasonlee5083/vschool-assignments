// computer.js
angular.module("myApp")

.controller("computerController", ["$scope", function($scope) {
$scope.computers =[
		{
		
	name:  "Apple 27 iMac with Retina 5K display",
	price : 2849,
	image : "http://cdn-us-ec.yottaa.net/5150ada0ea2e0c405c000108/9eedcbc0a5410130d7f9123138151fb1.yottaa.net/v~13.9fb/prod/13697000/13697198_xxlg_0.jpg#?yocs=_&yoloc=us"
	
	},
	
	{name:  "HP Envy 27 Touchscreen Premium, Robots",
	price : 2256.45,
	image : "https://i5.walmartimages.com/asr/6ed44de0-4259-4507-baf9-abf23b2eb0ec_1.28ee3e6df603115af7f16fd2e23a7434.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"
	},
	{name:"Apple iMac with Retina 4K display - 21.5 LED",
	price : 1399.99,
	image : "http://cdn-us-ec.yottaa.net/5150ada0ea2e0c405c000108/9eedcbc0a5410130d7f9123138151fb1.yottaa.net/v~13.9fb/prod/13697000/13697198_xxlg_0.jpg#?yocs=_&yoloc=us"
	}
	]
	
}])

