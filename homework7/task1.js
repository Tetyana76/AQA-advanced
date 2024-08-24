
function handleNum(number, func1, func2) {
    if (number%2 === 0) {
        func1();
    } else {
        func2();
    }
}

function handleEven() {
    console.log('Number is even')
}

function handleOdd() {
    console.log('Number is odd')
}

handleNum(8, handleEven, handleOdd);
handleNum(15, handleEven, handleOdd);