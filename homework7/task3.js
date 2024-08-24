function divide(numerator, denominator) {
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error('Обидва аргументи повинні бути числами!');
    } else if (denominator === 0) {
        throw new Error('Ділення на нуль недопустиме!');
    } else {
        return numerator / denominator;
    }
}

const values = [
    [8, 2],
    [10, 0],
    ['num', 6]
];
values.forEach(([numerator, denominator]) => {
    try {
        const result = divide(numerator, denominator);
        console.log(`Результат ділення ${numerator} на ${denominator}: ${result}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    } finally {
        console.log("Робота завершена");
    }
});
    