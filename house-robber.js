// https://leetcode.com/problems/house-robber/

const rob = nums => {
  if (!nums.length) return 0;

  let [x, y, z] = [0, 0, 0];

  nums.forEach(num => {
    z = x;
    x = Math.max(num + y, x);
    y = z;
  });

  return x;
};
