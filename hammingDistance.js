// https://leetcode.com/problems/hamming-distance/

const hammingDistance = (x, y) => {
  let xBits = x.toString(2);
  let yBits = y.toString(2);

  const lengthDiff = Math.abs(xBits.length, yBits.length);
  if (lengthDiff) {
    const targetLength = Math.max(xBits.length, yBits.length);

    xBits.length > yBits.length
      ? (yBits = yBits.padStart(targetLength, '0'))
      : (xBits = xBits.padStart(targetLength, '0'));
  }

  return [...xBits].reduce(
    (hammingDist, xBit, i) => (xBit !== yBits[i] ? ++hammingDist : hammingDist),
    0
  );
};
