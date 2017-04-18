var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");
var scheduleRoute = require("./routes/schedule-route");
console.log("sucess")

var port = 5000;
var app = express();

mongoose.connect("mongodb://localhost/schedule",function(err){
	if (err) throw err;
	console.log("connected to DB")
})

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"public")));
app.use("/schedule", scheduleRoute);

app.listen(port, function(){
	console.log ("servers up at 5000");
});




