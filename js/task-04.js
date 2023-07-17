let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueElement = document.querySelector('#value');

const decrementHandler = () => {
    counterValue -= 1;
    valueElement.textContent = counterValue;
}

const incrementHandler = () => {
    counterValue += 1;
    valueElement.textContent = counterValue;
}

decrementBtn.addEventListener("click", decrementHandler);
incrementBtn.addEventListener("click", incrementHandler);
