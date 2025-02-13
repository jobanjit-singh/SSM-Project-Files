let a = parseFloat(prompt("Enter first value")); //12
let b = parseFloat(prompt("Enter second value")); //13
let choice = prompt("Enter your operation"); //adsfadfs
let result;
switch (choice) {
  case "Add":
    result = a + b;
    break;
  case "Subtract":
    result = a - b;
    break;
  case "Multiply":
    result = a * b;
    break;
  case "Divide":
    result = a / b;
    break;
  case "Mode":
    result = a % b;
    break;
}
if (result == undefined || result == null) {
  console.log("Invalid Input");
} else {
  console.log(`The Result is:- ${result}`);
}
