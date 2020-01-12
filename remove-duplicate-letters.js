// https://leetcode.com/problems/remove-duplicate-letters/

const removeDuplicateLetters = ([...letters]) => {
  const letterToFreq = letters.reduce((accum, letter) => {
    if (letter in accum) accum[letter]++;
    else accum[letter] = 1;
    return accum;
  }, {});

  return letters.reduce((accum, letter) => {
    letterToFreq[letter]--;

    if (accum.includes(letter)) return accum;

    let peekLetter = accum[accum.length - 1];
    if (letter < peekLetter) {
      while (letter < peekLetter && letterToFreq[peekLetter] > 0) {
        accum = accum.slice(0, accum.length - 1);
        peekLetter = accum[accum.length - 1];
      }
    }

    return accum + letter;
  }, '');
};
