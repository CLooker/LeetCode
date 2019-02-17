// https://leetcode.com/problems/invert-binary-tree/

const invertTree = root => {
  if (root === null) return root;

  const right = invertTree(root.right);
  const left = invertTree(root.left);

  root.left = right;
  root.right = left;

  return root;
};
