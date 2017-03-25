function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var trashTalking = ["You couldn't tackle me in a phone booth","I am going to beat you blindfolded"
,"You're so bad I could beat you while I was sleeping"
,"I’m just looking around to see who’s gonna finish second","That is a clown question, bro.", "I'm not arrogant I'm good"]
document.getElementById("button1").addEventListener("click", function() {
	var messageon = 0;
	var form1 = document.getElementById("form1");
	var name1 = form1.name1.value;
	var game1 = form1.game1.value;
	var date1 = form1.date1.value;
	var highScore = form1.high_score.value;
	var messageon = form1.message1.value;
	
	if ($("#message1").is(":checked")) {
		i = getRandomInt(0, 5);
		var message = trashTalking[i];
	}
	else {
		message = "";
	}
	
	//var message1 = trashTalking[i];
	$(".p1").append( `<table><tr><td>${name1}</td><td>${game1}</td><td>${date1}</td><td>${highScore}</td><td>${message}</td></tr><table>`
				   )
});



	
	