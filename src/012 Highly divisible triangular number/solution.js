function getNumberOfDivisors(n){
  let divisors = 0;
  const squareRoot = Math.sqrt(n);
  for (let ii = 1; ii<squareRoot; ii++){
    if (n % ii === 0) {
      divisors += 2;
    }
  }
  return divisors;
}

function divisibleTriangleNumber(n) {
    let orderOfTriangularNumber = 1;
    let triangularNumber = 1;
    while (getNumberOfDivisors(triangularNumber) < n) {
      orderOfTriangularNumber++;
      // ith_triangular_number = (i-1)th_triangular_number + i;
      triangularNumber += orderOfTriangularNumber;
    }
    return triangularNumber;
  }

  console.log(divisibleTriangleNumber(5));