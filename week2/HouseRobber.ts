function rob(nums: number[]): number {
  let dp: number[] = [];

  if (nums.length === 0) {
    return 0;
  }

  if (nums.length === 1) {
    return nums[0];
  }

  for (let i: number = 0; i <= nums.length; i++) {
    if (i === 0) {
      dp[i] = nums[i];
    } else if (i === 1) {
      dp[i] = Math.max(nums[i], nums[i - 1]);
    } else if (i == nums.length) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2]);
    } else {
      dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
    }
  }

  return dp[nums.length];
}
