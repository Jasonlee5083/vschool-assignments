$("#button1").click(function() {
	$.get("http://api.vschool.io:6543/pokemon.json", function(personData) {
		 
			for (i=0; i < personData.objects[0].pokemon.length; i++) {
				var node = document.createElement("li"); 
				var textnode = document.createTextNode(personData.objects[0].pokemon[i].name); 
				node.appendChild(textnode); 
				document.getElementById("names").appendChild(node);

				}		
		
	})
		 
});


//$("names").text(personData.objects[0].pokemon[i].name);

//document.getElementById("names").innerHTML = pokemonName ;		
//var pokemonName = personData.objects[0].pokemon[i].name;
			//console.log(pokemonName);
		//document.getElementById("names").innerHTML = personData.objects[0].pokemon[i].name ;