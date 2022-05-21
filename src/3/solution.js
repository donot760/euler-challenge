function largestPrimeFactor(number) {
  // base case for recursion
  if (number === 1) return 1;


  let newNumber = number;
  for (let i=2; i<=number; i++){
    // first factor will necessarily be prime
    if (newNumber%i === 0) {
      while (newNumber%i === 0) {
        newNumber = newNumber/i;
      }
      return Math.max(i, largestPrimeFactor(newNumber))
    }
  }
}
largestPrimeFactor(13195);
