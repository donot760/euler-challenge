// One will have to take `gridSize` steps to the rigth and `gridSize`
// down intertwined in some order. The question is equivallent to
// asking in how many distinct ways can we order `gridSize` red balls
// and `gridSize` blue balls in a line.
// Which is further equivalent to asking in how many distinct ways can
// we choose n of the 2n spots to place the red balls in.
// The answer is, of course Combinations_n_of _2n = (2n!)/((n!)^2)

function factorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n-1);
}

function latticePaths(gridSize) {

    return factorial(2*gridSize)/(factorial(gridSize)**2);
  }

  console.log(latticePaths(4));