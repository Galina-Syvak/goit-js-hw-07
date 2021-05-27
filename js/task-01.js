const linkEl = document.querySelector('p');

linkEl.insertAdjacentHTML(
  'afterend',
  '<ul id="categories"><li class="item"><h2>Животные</h2><ul><li>Кот</li><li>Хомяк</li><li>Лошадь</li><li>Попугай</li></ul></li><li class="item"><h2>Продукты</h2><ul><li>Хлеб</li><li>Петрушка</li><li>Творог</li></ul></li><li class="item"><h2>Технологии</h2><ul><li>HTML</li><li>CSS</li><li>JavaScript</li><li>React</li><li>Node</li></ul></li></ul >',
);

const listEl = document.querySelector('#categories');
console.log(`В списке ${listEl.querySelectorAll('.item').length} категории.`);

const itemsEl = document.querySelectorAll('.item');
itemsEl.forEach(
  elem => (
    console.log(`Категория: ${elem.querySelector('h2').textContent}`),
    console.log(`Количество элементов: ${elem.querySelectorAll('li').length}`)
  ),
);
