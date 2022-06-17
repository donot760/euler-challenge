function maximumPathSumI(triangle) {
    // Will do a recursive implementation that takes the second to last row
    // and adds to it the max of the following two elements.
    // Basically, we are reconstructing the longest pathway backwards.

    const triangleSize = triangle.length;
    // base case
    if (triangleSize === 1) {
        return triangle[0][0];
    }

    const newTriangle = [];
    // copy the first triangleSize-2 rows as is (minus the final 0)
    for (let ii = 0; ii < triangleSize-2; ii++) {
        const newRow = triangle[ii].slice(0, -1);
        newTriangle.push(newRow);
    }

    // calculate the new last row
    const currentSecondToLastRow = triangle[triangleSize-2].slice(0, -1);
    const currentLastRow = triangle[triangleSize-1];
    const currentLastRowMaxes = [];
    for (let ii = 1; ii < triangleSize; ii++) {
        const maxElt = Math.max(currentLastRow[ii-1], currentLastRow[ii]);
        currentLastRowMaxes.push(maxElt);
    }
    const newLastRow = [];
    for (let ii = 0; ii < triangleSize-1; ii++) {
        const newElt = currentSecondToLastRow[ii] + currentLastRowMaxes[ii];
        newLastRow.push(newElt);
    }
    newTriangle.push(newLastRow);

    return maximumPathSumI(newTriangle);
  }

  const testTriangle = [[3, 0, 0, 0],
                        [7, 4, 0, 0],
                        [2, 4, 6, 0],
                        [8, 5, 9, 3]];

  console.log(maximumPathSumI(testTriangle));