// let yob = prompt('Enter year of birth:');
// let age = 2019 - yob;

// if (age < 11) {
//   console.log("Baby");
// }
// else if (age < 15) {
//   console.log("teen");
// }
// else {
//   console.log("Not baby");
// }

// let randomNumber = Math.floor(Math.random()*100);

// if (0 < randomNumber && randomNumber <= 30) {
//   console.log("Sunny");
// } else if (randomNumber <= 70) {
//   console.log("Rainy");
// } else {
//   console.log("Cloudy");
// }



// let a = prompt("Nhap a");
// let b = prompt("Nhap b");
// let c = prompt("Nhap c");

// let delta = b*b - 4*a*c;

// if (delta < 0) {
//   console.log("Vo nghiem");
// }
// else if (delta === 0) {
//   let x = -b / (2*a);
//   console.log(`Nghiem kep la ${x}`); //backticks
// }
// else {
//   let x1 = (-b-delta**0.5)/(2*a);
//   let x2 = (-b+delta**0.5)/(2*a);
//   console.log("2 nghiem phan biet");
//   console.log(`x1 = ${x1}`);
//   console.log(`x2 = ${x2}`);
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

let username = "c4e33";
let password = "codethechange";

let usernameLogin = prompt("Username?");

if (usernameLogin === username) {
  let passwordLogin = prompt("Password?");
  if (passwordLogin === password) {
    console.log(`Welcome ${usernameLogin}`);
  } else {
    console.log("Wrong password");
  }
} else {
  console.log("User not found");
}