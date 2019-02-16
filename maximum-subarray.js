// https://leetcode.com/problems/maximum-subarray/

const maxSubArray = nums => {
  let [result] = nums;
  let runningMax = result;

  for (num of nums.slice(1)) {
    runningMax = Math.max(runningMax + num, num);
    if (result < runningMax) result = runningMax;
  }

  return result;
};
