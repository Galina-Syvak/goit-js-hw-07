const counterValue = document.querySelector('#value');
const increment = document.querySelector('[data-action="increment"]');
const decrement = document.querySelector('[data-action="decrement"]');

// const incrementValue = counterValue => (counterValue += 1);
// const decrementValue = counterValue => (counterValue -= 1);

increment.addEventListener('click', counterValue => (counterValue += 1));
decrement.addEventListener('click', counterValue => (counterValue -= 1));
