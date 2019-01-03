// https://leetcode.com/problems/minimum-time-difference/

const findMinDifference = times => {
  const midnight = 60 * 24;
  const sixPM = midnight * 0.75;
  const noon = midnight * 0.5;

  const minutesArr = times.map(time => {
    const [hours, remainderMinutes] = time.split(':').map(str => +str);

    let minutes = 0;
    minutes += hours * 60;
    minutes += remainderMinutes;
    return minutes ? minutes : midnight;
  });

  let minimumDifference = undefined;

  for (let i = 0; i < minutesArr.length; i++) {
    if (minimumDifference === 0) return minimumDifference;

    const min1 = minutesArr[i];

    for (let j = i + 1; j < minutesArr.length; j++) {
      const min2 = minutesArr[j];

      const difference = (() => {
        const isSpecial =
          (min1 > sixPM && min2 < noon) || (min2 > sixPM && min1 < noon);

        if (isSpecial) {
          let [bigger, smaller] = min1 > min2 ? [min1, min2] : [min2, min1];
          return smaller + midnight - bigger;
        }

        return Math.abs(min1 - min2);
      })();

      if (minimumDifference === undefined || difference < minimumDifference)
        minimumDifference = difference;
    }
  }

  return minimumDifference;
};
