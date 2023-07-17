const validationInput = document.querySelector('#validation-input');
const dataLengthValue = parseInt(validationInput.dataset.length);

validationInput.addEventListener('blur', () => {
    console.log(validationInput.value.length);
    const validationInputLength = validationInput.value.length;

    validationInput.classList.remove('valid', 'invalid');
    
    if (validationInputLength === 0) {
        return
    }

    validationInput.classList.add(validationInputLength === dataLengthValue ? 'valid' : 'invalid');

});
