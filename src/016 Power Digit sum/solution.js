function powerDigitSum(exponent) {
    const n = BigInt(2**exponent);
    const arrayOfDigits = n.toString().split("").map(stringOfDigit => parseInt(stringOfDigit));
    const sumOfDigits = arrayOfDigits.reduce((x, y) => x+y, 0);
    return sumOfDigits;
  }

  console.log(powerDigitSum(100));