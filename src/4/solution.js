// takes a string as input and returns a boolean value
// representing whether `word` is a palindrome
function isPalindrome(word) {
    const len = word.length;
    for (let ix=0; ix<len/2; ix++) {
      if (word[ix] !== word[len-1-ix]) {
        return false;
      }
    }
    return true;
  }

// given a number `n`, returns the largest palindrome made
// from the product of two n-digit numbers
function largestPalindromeProduct(n) {
    // most likely, at least one of the two n-digit numbers
    // will start with 9
    const large9s = 10**n-1;
    const small9s = 10**(n-1)-1;
    for (let i = large9s; i>large9s-small9s; i--){
      for (let j = i; j>large9s-small9s; j--){
        const prod = i*j;
        if (isPalindrome(prod.toString())){
          return i*j;
        }
      }
    }
    return false;
  }


console.log(largestPalindromeProduct(2));