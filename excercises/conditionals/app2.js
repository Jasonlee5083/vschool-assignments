var monkeyTroble=function(aSmile,bSmile) {
    if(aSmile && bSmile) {
         return true;
    } else if(!aSmile && bSmile) {
        return false;
    }
       else if (aSmile && !bSmile) {
        return false;
       }
    else {
        return true;
    }
}

console.log(monkeyTroble(true, true)); 

//console.log(monkeyTrouble(true, true)); //→ true  
//console.log(monkeyTrouble(false, false)); //→ true  
//console.log(monkeyTrouble(true, false)); //→ falsels
