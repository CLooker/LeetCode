// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

const compose = (...fns) => data =>
  fns.reduceRight((updatedData, fn) => fn(updatedData), data);

const getAllCombinations = ({ beginnings, endings }) => other => {
  if (!beginnings) beginnings = other;
  if (!endings) endings = other;

  return endings.reduce(
    (allCombinations, ending) =>
      allCombinations.concat(
        ...beginnings.map(beginning => `${beginning}${ending}`)
      ),
    []
  );
};

const letterCombinations = ([...digits]) => {
  if (!digits.length) return digits;

  const digitToLetters = {
    '2': [...'abc'],
    '3': [...'def'],
    '4': [...'ghi'],
    '5': [...'jkl'],
    '6': [...'mno'],
    '7': [...'pqrs'],
    '8': [...'tuv'],
    '9': [...'wxyz']
  };

  const [firstLetters, ...lettersArrs] = digits.map(
    digit => digitToLetters[digit]
  );

  switch (digits.length) {
    case 1:
      return firstLetters;
    case 2:
      return getAllCombinations({ beginnings: firstLetters })(...lettersArrs);
    case 3:
      return compose(
        getAllCombinations({ beginnings: firstLetters }),
        getAllCombinations({ beginnings: lettersArrs[0] })
      )(lettersArrs[1]);
    case 4:
      const [
        firstMiddleLetters,
        secondMiddleLetters,
        lastLetters
      ] = lettersArrs;
      return compose(
        getAllCombinations({ beginnings: firstLetters }),
        getAllCombinations({ endings: lastLetters }),
        getAllCombinations({ beginnings: firstMiddleLetters })
      )(secondMiddleLetters);
    default:
      break;
  }
};
