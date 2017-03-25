var newCount = localStorage.getItem('count');
var count = newCount;
$('#button1').click(function() {
	$('#names').html(function(){
		return   count ++ 
	})
});



$('#button1').click(function() {
  localStorage.setItem('count', count);
});




