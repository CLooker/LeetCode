// https://leetcode.com/problems/longest-common-prefix/

const longestCommonPrefix = strs => {
  const doAllStartWithPrefix = prefix =>
    strs.every(str => str.slice(0, prefix.length) === prefix);

  let longest = '';

  strs.forEach(str => {
    for (let i = 0; i < str.length; i++) {
      const prefix = str.slice(0, i + 1);
      if (!doAllStartWithPrefix(prefix)) break;
      longest = prefix;
    }
  });

  return longest;
};
