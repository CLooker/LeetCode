// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

const findDisappearedNumbers = nums =>
  nums
    .map((_, i) => ++i)
    .filter(rangeNum => !nums.some(num => num === rangeNum));
