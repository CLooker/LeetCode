// https://leetcode.com/problems/convert-bst-to-greater-tree/

const convertBST = root => {
  if (!root) return root;

  class _convertBST {
    constructor(root) {
      this.sum = 0;
      return this.convertBST(root);
    }

    convertBST(root) {
      if (!root) return;

      this.convertBST(root.right);
      this.sum += root.val;
      root.val = this.sum;
      this.convertBST(root.left);
      return root;
    }
  }

  return new _convertBST(root);
};
