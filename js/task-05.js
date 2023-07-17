const nameInput = document.querySelector('#name-input');
const nameOutout = document.querySelector('#name-output');

nameInput.addEventListener('input', (event) => {
    nameOutout.textContent = event.currentTarget.value || 'Anonymous';
})
