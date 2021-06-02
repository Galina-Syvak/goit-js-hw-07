const listEl = document.querySelector('#categories');
console.log(`В списке ${listEl.querySelectorAll('.item').length} категории.`);

const itemsEl = document.querySelectorAll('.item');
itemsEl.forEach(
  elem => (
    console.log(`Категория: ${elem.querySelector('h2').textContent}`),
    console.log(`Количество элементов: ${elem.querySelectorAll('li').length}`)
  ),
);
