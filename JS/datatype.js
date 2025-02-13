let name = "Webcooks";
let age = 18;
let isLogin = false;
let isStudent = undefined;
let table1;

let bca = [123, "512", 1024];
//          0                 1              2
// name = "John Doe";

bca[0].rollno;

let userProfile = {
  name: "Jobanjit singh",
  age: 25,
  "is Login": true,
  isStudent: false,
  table: table1,
  subjects: ["Math", "Science", "English"],
};

let user = ["Jobanjit Singh", 24];

console.log(typeof name);
console.log(typeof age);
console.log(typeof isLogin);
console.log(typeof isStudent);
console.log(typeof table);

console.log(bca);
console.log(bca[0]);
console.log(bca[2]);

console.log(userProfile);

console.log(userProfile["age"]);
console.log(userProfile["is Login"]);

console.log(`Type of Table in user profile is ${typeof userProfile.table}`);
