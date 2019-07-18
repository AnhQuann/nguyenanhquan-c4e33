let h1 = document.getElementById('dom-h1');
// console.dir(h1);
h1.innerText = 'AHIHI';

let newFood = `<li>Phở</li>`;
let menu = document.getElementById('menu');

menu.innerHTML += newFood;

let h2 = document.getElementById('dom-h2');
h2.remove();

let btnDemo = document.getElementById('btn_demo');
btnDemo.addEventListener('click', () => {
  console.log("Mày vừa click vào tao")
})

let foodInput = document.getElementById('dom-input');
foodInput.addEventListener('keyup', () => {
  console.log(foodInput.value);
})