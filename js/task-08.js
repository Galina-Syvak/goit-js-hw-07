const refs = {
  renderEl: document.querySelector('[data-action="render"]'),
  destroyEl: document.querySelector('[data-action="destroy"]'),
  inputEl: document.querySelector('input'),
  containerEl: document.querySelector('#controls'),
  boxesEl: document.querySelector('#boxes'),
};

refs.inputEl.addEventListener('input', () => refs.inputEl.value);
refs.renderEl.addEventListener('click', makeBlockMarkup);
refs.destroyEl.addEventListener('click', destroyBoxes);

function makeBlockMarkup() {
  return createBoxes(refs.inputEl.value);
}

function createBoxes(amount) {
  const elementBox = document.createElement('div');

  let sizeBox = 30;

  for (let i = 0; i < amount; i += 1) {
    const element = document.createElement('div');

    sizeBox += 10;
    let redColor = Math.random() * (255 - 0) + 1;
    let greenColor = Math.random() * (255 - 0) + 1;
    let blueColor = Math.random() * (255 - 0) + 1;

    element.style.width = `${sizeBox}px`;
    element.style.height = `${sizeBox}px`;
    element.style.backgroundColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`;

    elementBox.append(element);
  }

  return refs.boxesEl.append(...elementBox.children);
}

function destroyBoxes() {
  refs.boxesEl.innerHTML = '';
}
