// https://leetcode.com/problems/zigzag-conversion/

const convert = ([...letters], numRows) => {
  if (numRows < 2) return letters.join('');

  let rowIdx = 0;
  let step = 1;

  return letters
    .reduce((rows, letter) => {
      rows[rowIdx] += letter;
      rowIdx += step;
      if (rowIdx === 0 || rowIdx === numRows - 1) step = -step;
      return rows;
    }, Array(numRows).fill(''))
    .reduce((returnStr, row) => returnStr + row, '');
};
