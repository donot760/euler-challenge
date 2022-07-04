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

function isAnAbundantNumber(n) {
    return getSumOfDivisors(n) > n;
}

function sumOfNonAbundantNumbers(n) {
    // Make an array to hold the information whether a number can be written
    // as a sum of two abundant numbers. Numbers are represented by the index,
    // 0 is set as false by default to account for the 1-indexing
    const canBeASumOfTwoAbundantNumbers = [false];
    for (let ii = 1; ii <= n; ii++) {
        // set false as placeholder, will be revisited later
        canBeASumOfTwoAbundantNumbers.push(false);
    }

    const abundantNumbers = [];
    for (let ii = 1; ii <= n; ii++) {
        if (isAnAbundantNumber(ii)) {
            abundantNumbers.push(ii);
        }
    }

    for (let ii = 0; ii <= abundantNumbers.length; ii++){
        const abundantNumber1 = abundantNumbers[ii];
        for (let jj = ii; jj <= abundantNumbers.length; jj++){
            const abundantNumber2 = abundantNumbers[jj];
            const sum = abundantNumber1 + abundantNumber2;
            if (sum <= n) {
                canBeASumOfTwoAbundantNumbers[sum] = true;
            } else {
                // because abundantNumbers is sorted, no need to check the rest of jj's
                break;
            }
        }
    }

    let resultSum = 0;
    for (let ii = 1; ii <= n; ii ++) {
        if (!canBeASumOfTwoAbundantNumbers[ii]) {
            resultSum += ii;
        }
    }

    return resultSum;
}


console.log(sumOfNonAbundantNumbers(24));