// https://leetcode.com/problems/container-with-most-water/

const maxArea = heights => {
  let maxArea = -1;

  heights.forEach((height, xCoord) => {
    heights.forEach((otherHeight, otherXCoord) => {
      const area =
        Math.min(height, otherHeight) * Math.abs(xCoord - otherXCoord);
      if (area > maxArea) maxArea = area;
    });
  });

  return maxArea;
};
