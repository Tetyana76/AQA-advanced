function printValue(num) {
    console.log(num);
    if (num > 0) {
        printValue(num - 1);
    }
}
printValue(9)
