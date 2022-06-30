function nthPrime(n) {
    const primesSoFar = [2];
    let currentNum = 3;
    while (primesSoFar.length<n){
      let isPrime = true;
      for (const prime of primesSoFar){
        if (currentNum%prime === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primesSoFar.push(currentNum);
      }
      //all the prime numbers beyond 2 will be odd
      currentNum = currentNum + 2;
    }
    return primesSoFar[primesSoFar.length-1];
  }

  console.log(nthPrime(10001));