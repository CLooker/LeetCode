// https://leetcode.com/problems/longest-substring-without-repeating-characters/

const isUniqueItem = (items, targetItem) =>
  items.every(item => item !== targetItem);

const lengthOfLongestSubstring = str => {
  if (str.length < 2) return str.length;

  return [...str].reduce((longest, letter, i, letters) => {
    const uniqueLetters = [letter];
    for (const laterLetter of letters.slice(i + 1)) {
      if (!isUniqueItem(uniqueLetters, laterLetter)) break;
      uniqueLetters.push(laterLetter);
    }
    const { length } = uniqueLetters;
    return length > longest ? length : longest;
  }, 1);
};
