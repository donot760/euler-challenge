function digitFibonacci(n) {
    // intialize F1 = 1 and F2 = 1
    let previousValue = 1;

    let currentIndex = 2;
    let currentValue = 1;

    // number of digits of a number is Math.log10(currentValue)+1
    while(Math.log10(currentValue) < n-1) {
        // Calculate next fibonacci number
        const nextIndex = currentIndex + 1;
        const nextValue = previousValue + currentValue;

        // update stored values
        previousValue = currentValue;
        currentIndex = nextIndex;
        currentValue = nextValue;
    }
    return currentIndex;
  }

console.log(digitFibonacci(20));