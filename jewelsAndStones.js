// https://leetcode.com/problems/jewels-and-stones/

const numJewelsInStones = ([...jewels], [...stones]) => {
  let result = 0;

  jewels.forEach(jewel => {
    stones.forEach(stone => {
      if (jewel === stone) result++;
    });
  });

  return result;
};

const numJewelsInStones = ([...jewels], [...stones]) =>
  jewels.reduce(
    (sum, jewel) => sum + stones.filter(stone => stone === jewel).length,
    0
  );
