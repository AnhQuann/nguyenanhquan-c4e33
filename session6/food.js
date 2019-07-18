// Ex1
let btnAddFood = document.getElementById('btn_add_food');
btnAddFood.addEventListener('click', () => {
  let inputNewFood = document.getElementById('input_new_food');
  let foodMenu = document.getElementById('food_menu');
  foodMenu.innerHTML += `<li>${inputNewFood.value}</li>`;
})

// Ex2
let btnDelete = document.getElementById('btn_delete');
btnDelete.addEventListener('click', () => {
  let foodMenu = document.getElementById('food_menu');
  foodMenu.lastElementChild.remove();
})