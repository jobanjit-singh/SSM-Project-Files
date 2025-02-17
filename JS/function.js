function arithmeticOperation(a, b, operation) {
  switch (operation) {
    case "+":
      console.log("Addition Done");
      return a + b;
    case "-":
      console.log("Subtraction Done");
      return a - b;
  }
}

let dogProfile = {
  name: "Gimmy",
  brand: ["Pug", "Lebra", "Bully", "Desi"],
  voice: function (girlFriendName) {
    console.log("BARK....BARK");
    console.log(`Bao...Bao..Baaaoooo....${girlFriendName}`);
  },
};
let result = arithmeticOperation(2, 4, "-");
console.log(result);
console.log(dogProfile.brand);
console.log(dogProfile.voice("Jully"));
