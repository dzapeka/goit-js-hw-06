const fontSizeControl = document.querySelector('input#font-size-control');
const message = document.querySelector('span#text');

fontSizeControl.addEventListener('input', () => {
    message.style.fontSize = `${fontSizeControl.value}px`;
})