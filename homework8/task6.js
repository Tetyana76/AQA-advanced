// Завдання 6: Сортування масивів

const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
const copiedNumbersList = numbersList.slice();
copiedNumbersList.sort((a, b) => a - b);

console.log('Вихідний масив:', numbersList);
console.log('Відсортований масив:', copiedNumbersList);