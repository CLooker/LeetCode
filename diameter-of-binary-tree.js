// https://leetcode.com/problems/diameter-of-binary-tree/

const diameterOfBinaryTree = root => {
  let ans = 1;

  const getDepth = node => {
    if (!node) return 0;

    const [L, R] = [node.left, node.right].map(child => getDepth(child));

    ans = Math.max(ans, L + R + 1);

    return Math.max(L, R) + 1;
  };

  getDepth(root);

  return ans - 1;
};
