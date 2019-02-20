// https://leetcode.com/problems/path-sum-iii/

const pathSum = (root, targetSum) => {
  let count = 0;

  const checkNode = (node, localTargetSum) => {
    if (!node) return;

    if (node.val === localTargetSum) count++;

    [node.left, node.right].forEach(n =>
      checkNode(n, localTargetSum - node.val)
    );
  };

  const traverseNode = node => {
    if (!node) return;

    checkNode(node, targetSum);

    [node.left, node.right].forEach(traverseNode);
  };

  traverseNode(root);

  return count;
};
