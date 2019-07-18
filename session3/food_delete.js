let foods = ["Com", "Pho", "Ghe", "Rau", "Chao"];

foods.forEach((food, index) => {
  console.log(`${index + 1}. ${food}`);
})

let answer = prompt("Do you want delete? (Y/N)");

if (answer.toLowerCase() === 'y') {
  let indexOrValue = prompt('Delete by position or value? (1 or 2)');
  console.log(indexOrValue);
  if (indexOrValue === '1') {
    let position = prompt('Position?');
    let foodNum = prompt('Numbers of food?');
    foods.splice(position - 1, foodNum);
    console.log(foods);
  } else if (indexOrValue === '2') {
    let value = prompt('Value?');
    let foodNum = prompt('Numbers of food?');
    let indexOfFood = foods.indexOf(value);
    foods.splice(indexOfFood, foodNum);
    console.log(foods);
  } else {
    console.log('Select not available!')
  }
} else if (answer.toLowerCase() === 'n') {
  console.log("Good bye!");
} else {
  console.log("Get out!");
}