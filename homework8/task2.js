// Завдання 2: Копіювання з мутацією

const numbers = [1, 2, 3, 4, 5];
const multiplyByIndex = numbers.map((number, index) => number * index);
console.log('Вихідний масив:', numbers)
console.log('Новий масив:', multiplyByIndex)