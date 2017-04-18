//npm install express

var express = require("express");
var app = express();

var fruit =[
	{
		type:"banana",
		color:"yellow"
	},
	{
		type:"banana",
		color:"brown"
	},
	{
		type:"apple",
		color:"red"
	}, {
		
		type:"apple",
		color:"yellow"
	},
	{
		type:"apple",
		color:"green"
	}
]

app.get("/fruit",function(req,res){
	console.log(req.query);
	foundItems =[];
		
	for (var i=0; i<fruit.length; i++) {
		
		var haveFoundExactmatch = true;

		for (var key in req.query) {
			if(req.query[key] !== fruit[i][key]) {
				haveFoundExactmatch = false;
			}	
		}
		if (haveFoundExactmatch) {
			foundItems.push(fruit[i]);
		}
	}
	
	res.send(foundItems);
})

app.listen(8000,function(){
	console.log("running!!")
})

