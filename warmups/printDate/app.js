var now = new Date();
var hours = now.getHours()
var weekArray=["Sunday", "Moday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

if (now.getHours() >= 12) {
  amOrPm = "PM";
  hours = hours -12;
}
else {
  amOrPm = "AM";
}

console.log ("Today is : " + weekArray[ now.getDay()] );
console.log("Current time is : " + hours + ":" + now.getMinutes() + ":" +  now.getSeconds() + " "+ amOrPm);
