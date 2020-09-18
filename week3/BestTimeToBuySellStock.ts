function maxProfit(prices: number[]): number {

  if (prices.length === 0) {
    return 0;
  }

  let dp: number[] = [];
  let min = -1;

  for (let i = 0; i < prices.length; i++) {
    if (i === 0) {
      // max profit is 0 on first day
      dp[i] = 0;
      min = prices[i];
    } else {
      // Choose between selling vs not selling
      dp[i] = Math.max(dp[i - 1], prices[i] - min, 0);

      // update min (buy stock) if it's optimal
      min = Math.min(min, prices[i]);
    }
  }

  return dp[prices.length - 1];
};