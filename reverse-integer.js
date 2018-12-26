// https://leetcode.com/problems/reverse-integer/

const reverse = uint32 => {
  const isOverflow = n => n < -2147483648 || n > 2147483647;
  if (isOverflow(uint32)) return 0;

  const result =
    uint32 >= 0
      ? +uint32
          .toString()
          .split('')
          .reverse()
          .join('')
      : -+uint32
          .toString()
          .split('')
          .slice(1)
          .reverse('')
          .join('');

  return isOverflow(result) ? 0 : result;
};
