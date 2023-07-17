function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const amountInput = document.querySelector('#controls input');
const boxesDiv = document.querySelector('#boxes');

let boxSize = 30;

function createBoxes(amount) {
  const boxes = []
  
  while (amount > 0) {
    const newBox = document.createElement('div');
    newBox.style.width = boxSize + 'px';
    newBox.style.height = boxSize + 'px';
    newBox.style.backgroundColor = getRandomHexColor();
    boxes.push(newBox);
    boxSize += 10;
    amount -= 1;
  }

  return boxes
}

function destroyBoxes() {
  boxesDiv.querySelectorAll('div').forEach(element => element.remove());
  boxSize = 30;
}

createBtn.addEventListener('click', () => {
  if (amountInput.value <= 0) return;
  boxesDiv.append(...createBoxes(amountInput.value));
});

destroyBtn.addEventListener('click', destroyBoxes);
