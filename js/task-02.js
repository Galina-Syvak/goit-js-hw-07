const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsContainer = document.querySelector('#ingredients');

const makeIngredientsOptions = options => {
  return options.map(ingredient => {
    const item = document.createElement('li');
    item.textContent = ingredient;
    return item;
  });
};

const elements = makeIngredientsOptions(ingredients);

ingredientsContainer.append(...elements);
