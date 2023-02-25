// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsItem = document.querySelector('#ingredients');

const createEl = ingredients.map(el => {
  const ingredientsEl = document.createElement('li');

  ingredientsEl.textContent = el;
  ingredientsEl.classList.add('item');
  
  return ingredientsEl;
});

ingredientsItem.append(...createEl);
