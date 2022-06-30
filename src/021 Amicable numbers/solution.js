function getAllDivisors(n){
    if (n === 1) {
        return [];
    }

    let divisors = [1];
    const squareRoot = Math.sqrt(n);
    for (let ii = 2; ii<squareRoot; ii++){
      if (n % ii === 0) {
        divisors.push(ii);
        divisors.push(n/ii);
      }
    }
    //make sure squareRoot is only included once
    if (Math.floor(squareRoot) === squareRoot) {
        divisors.push(squareRoot);
    }
    return divisors;
}

function getSumOfDivisors(n) {
    return getAllDivisors(n).reduce((x,y) => x+y, 0);
}

function sumAmicableNum(n) {
    const setOfAmicableNumbers = new Set();
    for (let currentNumber = 2; currentNumber < n; currentNumber++) {
        const sumOfCurrentNumberDivisors = getSumOfDivisors(currentNumber);
        const sumOfDivisorsOfSumOfDivisors = getSumOfDivisors(sumOfCurrentNumberDivisors);
        if (sumOfDivisorsOfSumOfDivisors === currentNumber &&
            currentNumber !== sumOfCurrentNumberDivisors) { //need to have two distinct numbers to form an amicable pair
            setOfAmicableNumbers.add(currentNumber);
            setOfAmicableNumbers.add(sumOfCurrentNumberDivisors);
        }

    }
    const arrayOfAmicableNumbers = [...setOfAmicableNumbers];
    const sumOfAmicableNumbers = arrayOfAmicableNumbers.reduce((x,y) => x+y, 0);
    return sumOfAmicableNumbers;
}

console.log(sumAmicableNum(1000));