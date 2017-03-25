
$.get("http://api.vschool.io/jason/todo/",function(response) {
	var todos = response;
		for (var i =0; i < todos.length; i++) {
	$("#todus").append(`<li class ="movethelist">
				<h1>${ todos[i].title }</h1>
				<h1>${ todos[i].description }</h1>
				<h1>${ todos[i].sessionId }</h1>
					  </li>`);
		}

})

$("").click(function(){
	var newTodo = {};
	newTodo.title = $("#title").val();
	newTodo.description = $("#description").val();	
	newTodo.price = $("#price").val();
	console.log(newTodo);
	
	


$.post("http://api.vschool.io/jason/todo/",newTodo, function() {
	
	console.log(newTodo);
} )
})
