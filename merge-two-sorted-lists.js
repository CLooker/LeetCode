// https://leetcode.com/problems/merge-two-sorted-lists/

class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

const mergeTwoLists = (l1, l2) => {
  let merged = new ListNode(null, null);
  let latest = merged;

  while (l1 && l2) {
    latest.next = l1.val <= l2.val ? l1 : l2;
    latest.next === l1 ? (l1 = l1.next) : (l2 = l2.next);
    latest = latest.next;
  }

  latest.next = l1 || l2;

  return merged.next;
};
