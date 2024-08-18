// function declaration
function calculateSquare(width, height) {
    const square = width * height
    return square
}
const result = calculateSquare(5, 10)
console.log(result)


// function expression
const square1 = function (width, height) {
    return width*height
}
console.log(square1(5, 10))

// arrow function expression
const square2 = (width, height) => {
    return width*height
}
console.log(square2(5, 10))

// concise arrow function expression
const square3 = (width, height) => width * height;
console.log(square3(5, 10))