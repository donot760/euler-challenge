function fiboEvenSum(n) {
  let sum = 0;
  let secondToLast = 0
  let last = 1
  while (true) {
    const newFib = secondToLast + last;
    if (newFib > n) {
      return sum;
    }
    if (newFib%2 === 0) {
      sum += newFib;
    }
    secondToLast = last;
    last = newFib;
  }
}
