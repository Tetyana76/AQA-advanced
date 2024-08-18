
function isAdult(age) {
    if (age >= 18) {
        return true
    } else {
        return false
    }
}
console.log('Чи є особа дорослою: ' + isAdult(15))
console.log('Чи є особа дорослою: ' + isAdult(25))