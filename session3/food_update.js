// let foods = ["Com", "Pho", "Ghe", "Rau", "Chao"];

// foods.forEach((food, index) => {
//   console.log(`${index+1}. ${food}`);
// })

// let answer = prompt("Do you want update? (Y/N)");

// if (answer.toUpperCase() === "Y") {
//   let position = prompt('Position?');
//   let newFood = prompt('New food name?');
//   if (0 <= position - 1 && position - 1 < foods.length ) {
//     foods[position - 1] = newFood;
//     foods.forEach((food, index) => {
//       console.log(`${index+1}. ${food}`);
//     })
//   } else {
//     console.log('Index not available!');
//   }
// } else if (answer.toUpperCase() === "N") {
//   console.log("Good bye!");
// } else {
//   console.log("Get out!");
// }