function antiCaps(str) {
  var arr= [];
  
	for (i = 0; i < str.length; i ++ ) {
		if (isCaps(str[i])) {
			var newLetter = str[i].toLowerCase();
		}
		else {
			 newLetter = str[i].toUpperCase();
		}
		arr.push(newLetter);
	}
	  var newStr = arr.join("");
	  return newStr;

}

function isCaps(letter) {
	 return letter === lette.toUpperCase;
}
console.log(antiCaps("hello"));

//function antiCaps(str) {
//	var arr = [];
//	for (var i = 0; i < str.length; i++) {
//		if(siCaps(stri[i])) {
//			var newLetter = 
//		}
//			else 
//				var newLetter =str[i].toUpperCase();
//		}
//		arr.push(newLetter);
//	}
//	var newStr = arr.join("");
//	return newStr;
//}
// function isCaps(letter) {
//	 return letter === lette.toUpperCase;
// }
//console.log(antiCaps("hello"));


//function antiCaps(letter) {
//	for (i = 0; i < letter.length; i ++ ) {
//		if (letter[i] === letter[i].toUpperCase() ) {
//			return letter[i] = letter[i].toLowerCase();
//		}
//		else {
//			return letter[i] = letter[i].toUpperCase();
//		}
//	}
//	console.log(letter[i]);
//}
//antiCaps("Hello");

//var letter = ["Hello"]
//function antiCaps(letter) {
//	for (i = 0; i < letter.length; i ++ ) {
//		if (letter[i] === letter[i].toUpperCase() ) {
//			return letter[i] = letter[i].toLowerCase();
//		}
//		else {
//			return letter[i] = letter[i].toUpperCase();
//		}
//	}
//}

//function antiCaps(letter) {
//	for (i = 0; i < letter.length; i ++ ) {
//		if (letter[i] === letter[i].toUpperCase() ) {
//			return letter[i] = letter[i].toLowerCase();
//		}
//		else {
//			return letter[i] = letter[i].toUpperCase();
//		}
//	}
//	console.log(letter.push(letter[i]));
//	//letter.push(letter[i]);
//	
//}
//  antiCaps("Hello");;