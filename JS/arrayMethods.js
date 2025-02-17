let bca = [123, 124, 125, 126];

// let newBca = bca.map((i, index) => {
//   return i + ` INDEX ${index}`;
// });
// One liner
// let newBca = bca.map((i, index) => i + ` INDEX ${index}`);

// let newBcaDone = bca.map((i, index) => {
//   if (index == 0) {
//     return i + ` INDEX ${index}`;
//   } else {
//     return "Bao...Bao";
//   }
// });
// console.log(newBcaDone);

let evenArray = bca.filter((item) => item % 2 != 0);

console.log(evenArray);

let catProfile = {
  name: "Lilly",
  brand: [
    "Balungri",
    "Bili",
    "BagaarBili",
    "Kali Billi",
    "Grey Bili",
    "kaki buri Billi",
  ],
  voice: function () {
    console.log("MEAOW.....MEAOW");
  },
};

console.log(Object.values(catProfile));
