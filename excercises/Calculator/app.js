function math1() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var sum = number1 + number2;
    document.getElementById("p1").innerHTML = sum;
}

function math2() {
    var number1 = document.getElementById("number3").value;
    var number2 = document.getElementById("number4").value;
    var sum = number1 * number2;
    document.getElementById("p2").innerHTML = sum;

}

function math3() {
    var number1 = document.getElementById("number5").value;
    var number2 = document.getElementById("number6").value;
    var sum = number1 / number2;
    document.getElementById("p3").innerHTML = sum;

}

