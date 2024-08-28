// Завдання 4: Відбір парних чисел

const arrInitial = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrNew = [];
for (let i = 0; i < arrInitial.length; i++) {
    if (arrInitial[i] % 2 === 0) {
        arrNew.push(arrInitial[i]);
    }
}
console.log('Масив парних чисел:', arrNew);