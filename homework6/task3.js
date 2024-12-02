function checkOrder(available, ordered) {
    if (ordered === 0) {
        console.log('Your order is empty');
        return;
    } else if (available >= ordered) {
        console.log('Your order is accepted')
        return;
    } else {
        console.log('Your order is too large, we don’t have enough goods')
    } 
} 

checkOrder(100, 0)