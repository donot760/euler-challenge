function sumSquareDifference(n) {
    let sumOfNumbers = 0;
    let sumOfSquares = 0;
    for (let currentNum=1; currentNum<=n; currentNum++){
      sumOfNumbers += currentNum;
      sumOfSquares += currentNum**2;
    }
    return sumOfNumbers**2-sumOfSquares;
  }

sumSquareDifference(100);