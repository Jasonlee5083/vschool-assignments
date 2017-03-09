//Write a function below called "oddsAndEvens" that loops through a parameter "nums" (an array).
//for each number in the given array, if it is even, it is added to the evens array, if the number is odd, is added to the odds array.
var evens = []; // Do not edit this line.
var odds = []; // Do not edit this line.


var nums= prompt("put your number");

var oddsAndEvens = function(nums)

{
    if (nums % 2 === 0) {
        evens.push("nums");
        console.log("even",nums);
    }
    else {
        odds.push("nums");
       console.log("odd",nums);
    }
}
oddsAndEvens(nums);
//console.log(evens);
//console.log(odds);

