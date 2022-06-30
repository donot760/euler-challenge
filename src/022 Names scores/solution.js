function getAlpabeticalValueOfLetter(l) {
    switch (l) {
        case 'A': return 1;
        case 'B': return 2;
        case 'C': return 3;
        case 'D': return 4;
        case 'E': return 5;
        case 'F': return 6;
        case 'G': return 7;
        case 'H': return 8;
        case 'I': return 9;
        case 'J': return 10;
        case 'K': return 11;
        case 'L': return 12;
        case 'M': return 13;
        case 'N': return 14;
        case 'O': return 15;
        case 'P': return 16;
        case 'Q': return 17;
        case 'R': return 18;
        case 'S': return 19;
        case 'T': return 20;
        case 'U': return 21;
        case 'V': return 22;
        case 'W': return 23;
        case 'X': return 24;
        case 'Y': return 25;
        case 'Z': return 26;
        default: throw Error("Not an uppercase letter!!")
    }

}

function namesScores(arr) {
    // Sort array and map each name to its alphabetical value
    const sortedArray = [...arr].sort();
    const alphabeticalValuesOfNames = sortedArray.map((name) => {
        const letters = name.split("");
        const alphabeticalValuesOfLetters = letters.map(l => getAlpabeticalValueOfLetter(l));
        const alphabeticalValueOfName = alphabeticalValuesOfLetters.reduce((x, y) => x + y, 0);
        return alphabeticalValueOfName;
    });

    // multiply each name's alphabetical value by its position to get the name score
    let nameScoreSum = 0;
    for (let ii = 0; ii < arr.length; ii++) {
        const namesScore = (ii+1)*alphabeticalValuesOfNames[ii]; // ii+i to convert to 1-indexing
        nameScoreSum += namesScore;
    }
    return nameScoreSum;

  }


  // Only change code above this line
  const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'];
  const test2 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST'];

  console.log(namesScores(test1));