function primeSummation(n) {
    const primesSoFar = [2];
    let sumSoFar = 2;
    for (let currentNum = 3; currentNum < n; currentNum = currentNum + 2){
      let isPrime = true;
      for (const prime of primesSoFar){
        if (prime > Math.sqrt(currentNum)) {
            break;
        }
        if (currentNum%prime === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primesSoFar.push(currentNum);
        sumSoFar += currentNum;
      }
    }
    return sumSoFar;
}

console.log(primeSummation(2000000));