// https://leetcode.com/problems/convert-bst-to-greater-tree/

const convertBST = root => {
  if (!root) return root;

  class _convertBST {
    constructor(root) {
      this.sum = 0;
      return this.main(root);
    }

    main(root) {
      if (!root) return;

      this.main(root.right);
      this.sum += root.val;
      root.val = this.sum;
      this.main(root.left);
      return root;
    }
  }

  return new _convertBST(root);
};
