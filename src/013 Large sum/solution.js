function largeSum(arr) {

    const sum = arr.map(elt => parseInt(elt)).reduce((x, y) => x+y, 0);
    const powerOfTenInSum = Math.ceil(Math.log10(sum));
    const firstTenDigits = Math.floor(sum/(10**(powerOfTenInSum-10)));
    return firstTenDigits;
  }

  const testNums = [
    '37107287533902102798797998220837590246510135740250',
    '46376937677490009712648124896970078050417018260538'
  ];

  console.log(largeSum(testNums));