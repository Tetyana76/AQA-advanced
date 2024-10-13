function delayedMessage(text, delay) {
  setTimeout(() => {
    console.log(text);
  }, delay);
}

delayedMessage("Hi there!", 3000 );