// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


let counterValue = document.querySelector('#value');

const incrementEl = document.querySelector('button[data-action="increment"]');
const decrementEl = document.querySelector('button[data-action="decrement"]');

const increment = () => {
    counterValue.textContent = Number(counterValue.textContent) + 1;
}
const decrement = () => {
    counterValue.textContent = Number(counterValue.textContent) - 1;
}


incrementEl.addEventListener('click', increment);
decrementEl.addEventListener('click', decrement);
