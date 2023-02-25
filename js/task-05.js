// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".


const inputElement = document.querySelector('#name-input');
const outputElement = document.querySelector('#name-output');

const inputMake = () => {
    if (inputElement.value.length > 0) {
        outputElement.textContent = inputElement.value;
    } else {
        outputElement.textContent = 'Anonymous';
    }

 }

inputElement.addEventListener('input', inputMake);