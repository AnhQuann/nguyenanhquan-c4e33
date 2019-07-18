// // array (mang)
// let foods = ["Com", "Pho", "Ghe", "Rau", "Chao"];

// // index (vi tri)
// console.log(foods[0]);

// // length of array
// console.log(foods.length);

// // 1. CREATE
// let newFood = "Ca";
// foods.push(newFood);
// console.log(foods);
// // Research: add item by index // key: splice()


// 2. READ
// 2.1 READ ONE
// console.log(foods[3]);

// 2.2 READ MANY
// console.log(foods);
// way 1
// for (let i = 0; i < foods.length; i++) {
//   let food = foods[i];
//   console.log(`${i+1}. ${food}`); //backticks
// }

// way 2
// foods.forEach((food, index) => {
//   console.log(`${index+1}. ${food}`);
// })

// 3. UPDATE
// foods[1] = "Bun";
// console.log(foods);

// console.log(foods);
// 4. DELETE
// 4.1 Delete by index
// foods.splice(1, 3);
// console.log(foods);

// 4.2 Delete by value
// let valueDelete = "Rau";
// let indexDelete = foods.indexOf(valueDelete);
// foods.splice(indexDelete, 1);
// console.log(foods);