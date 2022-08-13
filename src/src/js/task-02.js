const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl1 = document.createElement("li");
ingredientsEl1.classList.add('item')
ingredientsEl1.textContent = `${ingredients[0]}`

const ingredientsEl2 = document.createElement("li");
ingredientsEl2.classList.add('item')
ingredientsEl2.textContent = `${ingredients[1]}`

const ingredientsEl3 = document.createElement("li");
ingredientsEl3.classList.add('item')
ingredientsEl3.textContent = `${ingredients[2]}`

const ingredientsEl4 = document.createElement("li");
ingredientsEl4.classList.add('item')
ingredientsEl4.textContent = `${ingredients[3]}`

const ingredientsEl5 = document.createElement("li");
ingredientsEl5.classList.add('item')
ingredientsEl5.textContent = `${ingredients[4]}`

const ingredientsEl6 = document.createElement("li");
ingredientsEl6.classList.add('item')
ingredientsEl6.textContent = `${ingredients[5]}`

document.querySelector('#ingredients').append(ingredientsEl1, ingredientsEl2, ingredientsEl3, ingredientsEl4, ingredientsEl5, ingredientsEl6)

