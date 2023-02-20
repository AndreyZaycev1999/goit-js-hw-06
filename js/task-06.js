const textInput = document.querySelector('#validation-input');
const textInputNeeded = document.querySelector('[data-length="6"]');

textInput.addEventListener("blur", () => {
    const necesaryLength = Number(textInputNeeded.dataset.length);
    const inputLength = textInput.value.length;

    if (inputLength !== necesaryLength) {
        textInput.classList.add('invalid');
        textInput.classList.remove('valid');
    } else {
        textInput.classList.add('valid');
        textInput.classList.remove('invalid');
    }
});