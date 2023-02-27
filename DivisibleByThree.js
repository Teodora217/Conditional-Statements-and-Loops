function divisible() {
  for (let i = 1; i <= 100; i++) {
    let currentNumber = Number([i]);
    if (currentNumber % 3 === 0) {
      console.log(currentNumber);
    }
  }
}
divisible();
