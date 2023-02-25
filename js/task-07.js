// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const inputControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

textEl.style.fontSize = inputControlEl.value + 'px';

const ChangeTextSize = () => {
    textEl.style.fontSize = `${inputControlEl.value}px`;
}

inputControlEl.addEventListener('input', ChangeTextSize);