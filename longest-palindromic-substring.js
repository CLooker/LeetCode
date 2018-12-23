// https://leetcode.com/problems/longest-palindromic-substring/

const isPalindrome = str => {
  const { length } = str;
  const borderIdx = Math.floor(length / 2);
  const areIdxesValid = (i, j) =>
    i < borderIdx && (j > borderIdx || (length % 2 === 0 && j === borderIdx));
  for (let i = 0, j = length - 1; areIdxesValid(i, j); i++, j--)
    if (str[i] !== str[j]) return false;
  return true;
};

const longestPalindrome = str => {
  if (!str || isPalindrome(str)) return str;

  let [longest] = str;
  const updateLongest = localStr => {
    if (localStr.length > longest.length) longest = localStr;
  };

  [...str].forEach((letter, i) => {
    let localStr = letter;
    let isAllSameLetter = true;
    for (let j = i + 1; j < str.length; j++) {
      localStr += str[j];
      switch (true) {
        case !isAllSameLetter:
          if (isPalindrome(localStr)) updateLongest(localStr);
          continue;
        case str[j] !== str[j - 1]:
          isAllSameLetter = false;
          continue;
        default:
          updateLongest(localStr);
      }
    }
  });

  return longest;
};
