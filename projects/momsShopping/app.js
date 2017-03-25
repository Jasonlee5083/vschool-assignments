$("#button1").click(function() {
	var name1 = $("#name1");
	var shoppingList = name1.val();
	$(".p1").append(`<li class = "lidDelete"><button class = "buttonDelete" > x </button> ${shoppingList}</li>`);
		$(".buttonDelete").click(function () {
		$(this).parent().remove();
	});
});


//
//document.getElementById("button1").addEventListener("click", function() {
//	var form1 = document.getElementById("form1");
//	var shoppingList = form1.name1.value;
//	$(".p1").append(`<li class = "lidDelete"><button class = "buttonDelete" > x </button> ${shoppingList}</li>`)
//});
