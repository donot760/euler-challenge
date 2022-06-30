const SEQUENCE_LENGTH_CASH = new Map();
SEQUENCE_LENGTH_CASH.set(1,1);

function getCollazSequenceLength(n) {
    if (SEQUENCE_LENGTH_CASH.has(n)) {
        return SEQUENCE_LENGTH_CASH.get(n);
    }
    let nextElt = 0;
    if (n%2 === 0) {
        nextElt = n/2;
    } else {
        nextElt = 3*n + 1;
    }
    const sequenceLength = 1 + getCollazSequenceLength(nextElt);
    SEQUENCE_LENGTH_CASH.set(n, sequenceLength);
    return sequenceLength;
}

function longestCollatzSequence(limit) {
    let maxSequenceLength = 1;
    let numberWithLongestSequence = 1;
    for (let n = 1; n < limit; n++) {
        let sequenceLength = getCollazSequenceLength(n);
        if (sequenceLength > maxSequenceLength) {
            maxSequenceLength = sequenceLength;
            numberWithLongestSequence = n;
        }
    }
    return numberWithLongestSequence;
  }

  console.log(longestCollatzSequence(14));