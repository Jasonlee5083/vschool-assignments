document.getElementById("button").addEventListener("click", function() {
	var form = document.getElementById("form");
	var fname = form.fname.value;
	var lname = form.lname.value;
	var age = form.age.value;
	var gender = form.gender.value;
	var location = form.location.value;
	var restrictions = form.restrictions;

	for (var i=0; i<form.restrictions.length; i++) 
	{
		if(form.restrictions[i].checked)
			{
				restrictions.push(form.restrictions[i].value);
			}
	}
var formOutput = `The name is ${fname} ${lname}, and the age is ${age}, and the gender is ${gender}, and the location is ${location}, and the Dietary restrictions is ${restrictions}`
	
	
	alert(formOutput);

												   }
												  )