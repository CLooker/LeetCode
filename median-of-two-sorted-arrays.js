// https://leetcode.com/problems/median-of-two-sorted-arrays/

const insertionSort = items => {
  const insert = (sortedItems, itemToInsert) => {
    if (!sortedItems.length) return sortedItems.concat(itemToInsert);
    for (const [i, sortedItem] of sortedItems.entries()) {
      if (itemToInsert <= sortedItem) {
        return sortedItems
          .slice(0, i)
          .concat(itemToInsert)
          .concat(...sortedItems.slice(i));
      }
    }
    return sortedItems.concat(itemToInsert);
  };

  return items.reduce((sortedItems, item) => insert(sortedItems, item), []);
};

const flat = items =>
  items.reduce(
    (flattened, item) =>
      Array.isArray(item)
        ? [...flattened, ...flat(item)]
        : [...flattened, item],
    []
  );

const findMedianSortedArrays = (...sortedNumsArrs) => {
  const sortedNums = insertionSort(flat(sortedNumsArrs));
  const { length } = sortedNums;
  const midpoint = length / 2;

  let median;
  if (length % 2 === 0) {
    const medianIndices = [midpoint - 1, midpoint];
    const medianSum = medianIndices.reduce(
      (medianSum, medianIndex) => medianSum + sortedNums[medianIndex],
      0
    );
    median = medianSum / 2;
  } else {
    const medianIndex = Math.floor(midpoint);
    median = sortedNums[medianIndex];
  }
  return median;
};
