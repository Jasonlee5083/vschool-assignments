// In app.js

var express = require("express");  
var bodyParser = require("body-parser");
var uuid = require("uuid/v4");
var app = express();

//console.log(uuid());

var port =8000;
var bounties =[
	{
  firstname: "Zam",
  LastName: "Wesell",
  Living: true,
  BountyAmount: "200",
  Type: "Sith",
  _id: "12345"
}
];

app.use(bodyParser.json());

app.get('/bounty', function (req, res) {  
    res.send(bounties);
	console.log(req.query);
});

app.post('/bounty',function (req,res){
//	console.log(req.body);
	var newbounty = req.body;
//	console.log(bounties);
	newbounty._id = uuid();
	bounties.push(newbounty);
	res.send(`Your bounty ${newbounty} has been added`)
});

app.delete('/bounty/:_id',function (req,res){
	var bountyId = req.params._id
	
	for(var i = 0; i <bounties.length; i ++) {
		
		if(bountyId === bounties[i]._id) {
			res.send(bounties.splice(i,1));
		}
	}
});

app.put('/bounty/:_id',function(req,res){
	var editbounty = req.body;
	

		for (i = 0; i < bounties.length; i ++) {
			
			if (editbounty._id === bounties[i]._id)
			{
				for(var key in req.body){
					if (editbounty[key] !== bounties[i][key])
					{
					bounties[i][key] = editbounty[key];
					
					}
				}
					res.send(req.body)
					
					}
			
		}
		
//		}

})

app.listen(port, function () {  
    console.log("App is listening on port " + port);
});

