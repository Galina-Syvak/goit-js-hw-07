const listEl = document.querySelector('#categories');
console.log(`В списке ${listEl.children.length} категории.`);

const itemsEl = document.querySelectorAll('.item');
itemsEl.forEach(element => {
  console.log(`Категория: ${element.firstElementChild.textContent}`);
  console.log(
    `Количество элементов: ${element.lastElementChild.children.length}`,
  );
});

// const itemsEl = document.querySelectorAll('.item');
// itemsEl.forEach(
//   elem => (
//     console.log(`Категория: ${elem.querySelector('h2').textContent}`),
//     console.log(`Количество элементов: ${elem.querySelectorAll('li').length}`)
//   ),
// );
