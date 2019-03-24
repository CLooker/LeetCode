const isSubtree = (s, t, isMatch = false) => {
  if (!s && !t) return true;
  if (!s || !t) return false;

  if (s.val !== t.val) {
    return !isMatch && (isSubtree(s.left, t) || isSubtree(s.right, t));
  }

  return (
    (isSubtree(s.left, t.left, true) && isSubtree(s.right, t.right, true)) ||
    (isSubtree(s.left, t) || isSubtree(s.right, t))
  );
};
