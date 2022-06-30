function multiplesOf3and5(number) {

  let sum = 0;
  for (let n = 1; n < number; n++) {
    if (n%3 === 0 || n%5 === 0) {
      sum += n;
    }
  }
  return sum;
}

multiplesOf3and5(1000);
