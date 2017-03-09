document.getElementById("box").addEventListener("mouseover",hoverEvent); function hoverEvent() {
  document.getElementById("box").style.backgroundColor = "blue" ;
}

document.getElementById("box").addEventListener("mouseout",outEvent); function outEvent() {
 document.getElementById("box").style.backgroundColor = "red" ;
}

document.getElementById("box").addEventListener("mousedown",downEvent); function downEvent() {
document.getElementById("box").style.backgroundColor = "yellow" ;
}

document.getElementById("box").addEventListener("dblclick",dblclickEvent); function dbclickEvent() {
 document.getElementById("box").style.backgroundColor = "green" ;
}

document.getElementById("box").addEventListener("mousewheelevt",mousewheelevtEvent); function mousewheelevtEvent() {
 document.getElementById("box").style.backgroundColor = "orange" ;
}

