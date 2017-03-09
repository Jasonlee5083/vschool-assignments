// #1 Write a function that accepts two numbers as parameters, and returns the sum.

function addNumbers(num1, num2) {
    sum = num1+num2;
    console.log(sum);
    
}

    addNumbers(3,5);

//#2 Write a function that accepts three numbers as parameters, and returns the largest of those numbers.


function findNumber(num1,num2,num3){

        if (num1 - num2 >0 && num1 -num3 >0) {
            console.log ( num1 + " is the largest");
        }
        
        else if (num2 - num1 >0 && num2 -num3 >0)
        {
            console.log ( num2 + " is the largest");
        }  
        
        else {
            console.log ( num3 + " is the largest");
        }
       
}

 findNumber(100,3,17);

//#3 Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");

function oddOrEven(num) {
    if (num % 2 === 0) {
        console.log (num + " is even number");
    }
    
    else {
        console.log (num + " is odd number");
    }
    
}
    oddOrEven(3);
    
  //#4  Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.
var stringFull = [];
var stringHalf = [];
function checkString(string1) {
  
    if ( string1.length <= 20) {
    for (i=0; i < string1.length; i++)
        full = stringFull.push(string1[i]);
        full = stringFull.join("");
       console.log(full);
    }
    //console.log(full);
    
    else {
        for (i=0; i < (string1.length)/2; i++) 
         half = stringHalf.push(string1[i]);
         half = stringHalf.join("");
        console.log(half);
        }
        
 
      //console.log(half);
    
}
 
   
    
  checkString("Hello my name is Joonsuk Lee. It is very nice to meet you.  How are you doing?");
  //checkString("Hello");
    
    
/* 
var animal = "cat";
var food = "lettus";

function = wahtToFeed(){
    animal = "dog";
    var food = "cat";
}

whatToFeed();

console.log(animal);
console.log(food); */
