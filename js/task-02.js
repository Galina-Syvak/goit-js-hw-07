const linkEl = document.querySelector('p');
linkEl.insertAdjacentHTML('afterend', '<ul id="ingredients"></ul>');

const listEl = document.querySelector('#ingredients');

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const itemsEl = ingredients.map(ingredient => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  return listEl.append(item);
});
