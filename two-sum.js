// https://leetcode.com/problems/two-sum/

const twoSum = (ints, targetInt) => {
  for (const [i, int] of ints.entries()) {
    for (let j = i + 1; j < ints.length; j++) {
      const laterInt = ints[j];
      if (int + laterInt === targetInt) return [i, j];
    }
  }
};
