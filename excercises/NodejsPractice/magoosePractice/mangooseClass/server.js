var express = require("express");
var app = express();
var bodyParser = require("body-parser")
var friendRoute = require("./routes/friend-route")	
var mongoose = require("mongoose");

app.use(bodyParser.json());


mongoose.connect('mongodb://localhost/feb-class',function(err){
	if (err) throw err;
	console.log("Connected to DB");
	
});

app.use("/friends",friendRoute)

app.listen(8000,function() {

	console.log("server up at 8000")
});


//var friendSchema = new Schema({  
//  name: String,
//  age: Number,
//  interests: [String],
//  friends: [String],
//  isDeveloper: Boolean
//});
//
//var Friend = mongoose.model('Friend', friendSchema);  
//
//var myFriend = new Friend({  
//  name: 'JD',
//  age: 24,
//  interests: ['Music', 'Food'],
//  friends: []
//});
//
////myFriend.save( function (err, new_friend) {  
//// console.log(new_friend);
////});
//
//Friend.find({age: 24}, function (err, friends) {  
//  console.log(err);
//  console.log(friends);
//});