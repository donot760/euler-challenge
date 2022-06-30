function smallestMult(n) {
    // maps every prime less than or equal to n to it's largest power
    // such that prime**power <= n
    const primeFactors = new Map();

    for (let currentNum = 2; currentNum<=n; currentNum++){
      let remainderNum = currentNum;
      for (const [prime, largestExpSoFar] of primeFactors){
        let exponentInCurrentNum = 0;
        // divide by `prime` until `prime` is no longer a factor of remainderNum
        // and keep track of how many divisions happened
        while (remainderNum%prime === 0) {
            remainderNum = remainderNum/prime;
            exponentInCurrentNum++;
        }
        primeFactors.set(prime, Math.max(largestExpSoFar, exponentInCurrentNum));
      }
      if (remainderNum === currentNum) {
        // currentNum had no prime factors, therefore it must be prime
        primeFactors.set(currentNum, 1);
      }
    }
    let leastCommonMultiple = 1;
    for (const [prime, exponent] of primeFactors) {
        leastCommonMultiple = leastCommonMultiple*prime**exponent;
    }
    return leastCommonMultiple;
  }

  console.log(smallestMult(6));
