// https://leetcode.com/problems/string-to-integer-atoi/

const myAtoi = ([...chars]) => {
  const isSign = char => char === '-' || char === '+';
  const isSpace = char => char === ' ';
  const isInt = char => Number.isInteger(+char) && !isSpace(char);

  let result = [];
  for (char of chars) {
    if (result.length && !isInt(char)) break;
    if (!result.length) {
      if (isSpace(char)) continue;
      if (!isSign(char) && !isInt(char)) return 0;
    }
    result.push(char);
  }

  result = +result.join('');

  return (
    (result < -2147483648 && -2147483648) ||
    (result > 2147483647 && 2147483647) ||
    (isInt(result) ? result : 0)
  );
};
