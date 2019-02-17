// https://leetcode.com/problems/single-number/

const singleNumber = nums => {
  let pairs = {};

  nums.forEach(num => (pairs[num] ? delete pairs[num] : (pairs[num] = true)));

  return Object.keys(pairs)[0];
};
