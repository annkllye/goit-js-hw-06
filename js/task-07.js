// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const inputControlElement = document.querySelector('#font-size-control');
const textElement = document.querySelector('#text');

textElement.style.fontSize = inputControlElement.value + 'px';

const textResizing = () => {
    textElement.style.fontSize = `${inputControlElement.value}px`;
}

inputControlElement.addEventListener('input', textResizing);