function addCandy () {

var userCandy= document.getElementById("cnadyInupt").value;
    console.log(userCandy);
}

//creat empty <li> tag
var li = document.getElementById("li");

//creating text node  with text of user's candy choice
var txNode = document.createTextNode(candyText);

//get the ul and attch li as the child of the us
