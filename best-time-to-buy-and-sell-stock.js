// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/*
  time complexity O(n^2)
  space complexity O(1)
*/

const maxProfit = prices => {
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const profit = prices[j] - prices[i];
      if (profit > maxProfit) maxProfit = profit;
    }
  }

  return maxProfit;
};

/*
  time complexity O(n)
  space complexity O(1)
*/

const maxProfit = prices => {
  let minPrice = Infinity;
  let maxProfit = 0;

  prices.forEach(price => {
    if (price < minPrice) return (minPrice = price);

    const potentialMaxProfit = price - minPrice;
    if (potentialMaxProfit > maxProfit) maxProfit = potentialMaxProfit;
  });

  return maxProfit;
};
