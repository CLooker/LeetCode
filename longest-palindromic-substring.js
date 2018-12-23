// https://leetcode.com/problems/longest-palindromic-substring/

const isPalindrome = str => {
  for (let i = 0, j = str.length - 1; i < str.length, j >= 0; i++, j--) {
    if (str[i] !== str[j]) return false;
  }
  return true;
};

const longestPalindrome = str => {
  if (!str || isPalindrome(str)) return str;

  let [longest] = str;
  const updateLongest = localStr => {
    if (localStr.length > longest.length) longest = localStr;
  };

  for (let i = 0; i < str.length; i++) {
    let localStr = str[i];
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
  }
  return longest;
};
