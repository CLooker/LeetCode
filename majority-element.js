const majorityElement = nums => {
  const getIsMajorityElement = freq => freq > nums.length / 2;

  let numToFreq = {};

  for (num of nums) {
    numToFreq[num] = numToFreq[num] + 1 || 1;
    if (getIsMajorityElement(numToFreq[num])) return num;
  }
};
