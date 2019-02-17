// https://leetcode.com/problems/reverse-linked-list/

const reverseList = head => {
  let reversed = null;
  let curr = head;

  while (curr) {
    reversed = { val: curr.val, next: reversed };
    curr = curr.next;
  }

  return reversed;
};
