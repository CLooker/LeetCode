// https://leetcode.com/problems/median-of-two-sorted-arrays/

const insertionSort = sortedItemsArrs => {
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

  const [shortestSortedItems, rest] = (() => {
    const indexOfShortestArr = sortedItemsArrs.reduce(
      (indexOfShortestArr, sortedItems, i) =>
        sortedItems.length < sortedItemsArrs[indexOfShortestArr]
          ? i
          : indexOfShortestArr,
      0
    );

    return [
      sortedItemsArrs[indexOfShortestArr],
      ...sortedItemsArrs.filter((_, i) => i !== indexOfShortestArr)
    ];
  })();

  return shortestSortedItems.reduce(
    (sortedItems, item) => insert(sortedItems, item),
    rest
  );
};

const findMedianSortedArrays = (...sortedNumsArrs) => {
  const sortedNums = insertionSort(sortedNumsArrs);
  const { length } = sortedNums;
  const midpoint = length / 2;

  const medianIndices =
    length % 2 === 0 ? [midpoint, midpoint - 1] : [Math.floor(midpoint)];
  const medianSum = medianIndices.reduce(
    (medianSum, medianIndex) => medianSum + sortedNums[medianIndex],
    0
  );
  return medianSum / medianIndices.length;
};
