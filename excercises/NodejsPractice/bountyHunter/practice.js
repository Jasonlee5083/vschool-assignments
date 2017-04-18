//npm init -y
//npm install express
//npm install body-parser
//npm install uuid

var express = require("express");
var bodyParser = require("body-parser");
var uuid = require("uuid/v4");

var app = express();

var dogs = [];


var port = 3000;

app.use(bodyParser,jason());
app.use(function(req,res,next){
	req.weAddedThis = "middle ware is cool";
	
	next();
	
})

app.get('dog/',function(req,res) {
	console.log(req.weAddedThis);
	res.send(dogs);
	
} );

app.post('dog/',function(req,res) {
	var newdog = req.body;
	newdog._id = uuid();
	dogs.push(newdog);
	res.send(`this dog ${newdog} was added`);
});

//app.get('dog/:name/:breed',function(req,res) {
//	var dogName = req.params.name
//	var dogBreed = req.params.breed
app.delete('dog/:name',function(req,res) {
	
	var dogName = req.params.name
	
	for(var i =0, i < dogs.length; i++) {
		
		if(dogName === dogs[i].name) {
			res.send(dogs.splice(i,1));
		}
	}

	console.log(req.params);
	
	res.send(dog);
} );


app.listen(port,function(){
	console.log("App is listening on port" + port);
})