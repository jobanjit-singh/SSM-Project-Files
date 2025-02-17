document.getElementById("button1").onmouseenter = displayDate;
document.getElementById("button1").onmouseleave = leaveMethod;
function displayDate() {
  document.getElementById("h1").innerHTML = "Mouse Enter Done";
}

function leaveMethod() {
  document.getElementById("h1").innerHTML = "Mouse LEAVE DOne";
}
