var express = require("express");
var bodyParser = require("body-parser");
var uuid = require("uuid/v4");

var port = 8000;

var app = express();
var path = require("path");
app.use(express.static(path.join(__dirname,"public")));
// or app.use(express.static("public"));


var bounties = [
	{
	fName:'Jason',
	LastName:'Lee',
	cost: 10000000,
	_id: "a1234"
	},
	
	{
	fName:'Aaron',
	LastName:'Ellis',
	cost: 10,
	_id: "a1234"
	}
	];

app.get("/bounties", function(req,res){
	res.send(bounties)
})

//var path = require("path");

app.listen(port,function(){
	console.log("your server is listing on" + port)
})
	
	
	
	
//	npn install save- express
//	npm install body-bodyParser
// npm uuid body-parser express --save
	