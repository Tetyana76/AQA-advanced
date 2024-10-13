// Використовуючи конкатенацію рядків, створіть новий рядок, який містить вітання для обох осіб.
const guest1 = 'Alex';
const guest2 = 'Sonya';
const greeting1 = 'Welcome, ' + guest1 + ' and ' + guest2 + '!';
console.log(greeting1);

// Використайте шаблонний рядок для створення того ж вітання
const greeting2 = `Welcome, ${guest1} and ${guest2}!`;
console.log(greeting2);
