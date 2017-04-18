var express = require("express");

var port = 3000;

var app = express();
var path = require("path");
app.use(express.static(path.join(__dirname,"public")));
// or app.use(express.static("public"));

app.use("/bounty", require("./bounty"));


//var path = require("path");

app.listen(port,function(){
	console.log("your server is listing on" + port)
})


	
	
	
	
//	npn install save- express
//	npm install body-bodyParser
// npm uuid body-parser express --save
	