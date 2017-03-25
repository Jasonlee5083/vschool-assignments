 
var dictionary = {};

function addWord (word, definition) {
    word = word.toLowerCase();
    dictionary[word] = definition;
}

addWord('dog', 'an animal');
addWord('dog', 'a human');

console.log(dictionary);

function findWords (word) {
    if(dictionary[word] === undefined) {
        console.log('this word is not in the dictionary yet');
    } else {
        return dictionary[word];
    }
}

console.log(findWords('dog'));

//Parker
//var dictionary = {};
//
//function addWord (word, definition) {
//    word = word.toLowerCase();
//    dictionary[word] = definition;
//}
//
//addWord('dog', 'an animal');
//addWord('dog', 'a human');
//
//console.log(dictionary);
//
//function findWords (word) {
//    if(dictionary[word] === undefined) {
//        console.log('this word is not in the dictionary yet');
//    } else {
//        return dictionary[word];
//    }
//}
//
//console.log(findWords('dog'));
//
//

//
//
// Jason
//var words =[];
//
//function Words () {
//	this.name = name;
//	this.discription = discription;
//}
//
//function dictionary() {
//	var wordInput = prompt("please enter a words to the dictionary");
//	var wordDescription = prompt("please enter description fo the word to the dictionary");
//	
//	
//	for (i = 0; i < 10; i ++) {
//		
//		if (wordInput === this.name[i]) {
//			console.log("the word was already saved");
//		}
//	else {
//		var newWord = new Words("wordInput", "wordDescription");
//		words.push(newWord);
//	}
//}
//
//
//}
