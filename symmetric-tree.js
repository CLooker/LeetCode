// https://leetcode.com/problems/symmetric-tree/

/*
  time complexity O(n)
  space complexity O(n)
*/

const isMirror = (n1, n2) => {
  switch (true) {
    case !n1 && !n2:
      return true;
    case !n1 || !n2:
      return false;
    default:
      return (
        n1.val === n2.val &&
        isMirror(n1.right, n2.left) &&
        isMirror(n1.left, n2.right)
      );
  }
};

const isSymmetric = root => isMirror(root, root);
