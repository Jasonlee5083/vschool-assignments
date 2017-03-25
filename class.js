//post



//delect

$("").append
// get add their ids
// acess them by their ids

//<button class ="btn delete" type="button">x</button>
// data-item-id

function deleteEvent(){
	
	$(".delete").click(function() {
	var _id = $(this).parent().attr("data-item-id");
	
	var deleteOject = {
		type:"DELETE";
		url:"" + _id;
		success: function(response) {
		console.log(response);
	}
	};
	
	$.ajax(deleteOject)
	$(this).parent().remove();


})
}
