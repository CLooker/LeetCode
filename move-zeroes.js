// https://leetcode.com/problems/move-zeroes/

const moveZeroes = nums => {
  let nonZeroes = nums.filter(num => num !== 0);

  for (let i = 0; i < nums.length; i++) {
    nums[i] = nonZeroes[i] || 0;
  }
};
