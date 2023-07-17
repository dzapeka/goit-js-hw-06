function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`; 
};

const changeColorBtn = document.querySelector('button.change-color');
const colorSpan = document.querySelector('span.color');
const body = document.querySelector('body');

changeColorBtn.addEventListener('click', () => {
  const color = getRandomHexColor();
  colorSpan.textContent = color;
  body.style.backgroundColor = color;
});
