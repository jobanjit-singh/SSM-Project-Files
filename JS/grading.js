let marks = -80;

if (marks <= 0) {
  console.log("Invalid Input");
} else {
  if (marks >= 80) {
    if (marks > 100) {
      console.log("Invalid Percentage");
    } else {
      console.log("Grade A");
    }
  } else if (marks < 80 && marks >= 60) {
    console.log("Grade B");
  } else if (marks < 60 && marks >= 40) {
    console.log("Grade C");
  } else {
    console.log("Fail");
  }
}
