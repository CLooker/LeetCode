// https://leetcode.com/problems/palindrome-number/

const isPalindrome = num => {
  const numStr = num.toString();
  const { length } = numStr;
  const borderIdx = Math.floor(length / 2);
  const areIdxesValid = (i, j) =>
    i < borderIdx && (j > borderIdx || (length % 2 === 0 && j === borderIdx));
  for (let i = 0, j = length - 1; areIdxesValid(i, j); i++, j--)
    if (numStr[i] !== numStr[j]) return false;
  return true;
};
