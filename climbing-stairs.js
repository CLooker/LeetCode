// https://leetcode.com/problems/climbing-stairs/

/*
  time complexity O(n)
  space complexity O(1)
*/

const climbStairs = stepsTotal => {
  if (stepsTotal === 1) return 1;

  let [first, second, third] = [1, 2];

  for (let i = 3; i <= stepsTotal; i++) {
    third = first + second;
    first = second;
    second = third;
  }

  return second;
};
