
var audio = $("#audio1")[0];
$("#button1, #button2, #button3, #button3, #button4").click(function() {
	audio.play();
});

// $("#button5").click(function)() {
//	 //this keyword
//	$("#totalResult").append("Hi");
// });

// $("").on("click" function)() {
//	 $.append("<h1>Hi")
// });


$("#button5").click(function() {
	$(".header1").toggleClass("nightHeader");
	$(".row").toggleClass("nightBody");
	$(".").toggleClass("");
	$(".").toggleClass("");
	$(".p5").append("<p>Hi</p>");
});

// $("#button6").click(function)() {
//	 //this keyword
//	$(this).append("<p>Hi</p>");
// });



function totalSum() 

{
var baddiesCaught1 = document.getElementById("input1").value;
var baddiesCaught2 = document.getElementById("input2").value;
var baddiesCaught3 =   document.getElementById("input3").value;
	var totalPrice4 = baddiesCaught1 *5;
	var totalPrice5 = baddiesCaught2 *7;
	var totalPrice6 = baddiesCaught3 *11;
	
var totalPriceSum =totalPrice4 + totalPrice5 + totalPrice6; 

document.getElementById("totalResult").innerHTML ="  " + totalPriceSum +"    " +" Coins";
}

totalSum();

function goombasBaddiesCaught() {
var baddiesCaught = document.getElementById("input1").value;
    totalPrice1 = baddiesCaught * 5;
document.getElementById("totalPofGoombas").innerHTML = totalPrice1 + " Coins";
	
}

goombasBaddiesCaught(); 

function BobombsBaddiesCaught() {
var baddiesCaught2 = document.getElementById("input2").value;
    totalPrice2 = baddiesCaught2 * 7;
document.getElementById("totalPofBob-ombs").innerHTML = totalPrice2 + " Coins";
}

BobombsBaddiesCaught(); 

function CheepcheepBaddiesCaught() {
var baddiesCaught3 = document.getElementById("input3").value;
    totalPrice3 = baddiesCaught3 * 11;
document.getElementById("totalPofCheep-cheeps").innerHTML = totalPrice3 + " Coins";
}

CheepcheepBaddiesCaught();



