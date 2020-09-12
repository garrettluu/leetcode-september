function maxProduct(nums: number[]): number {
  let min: number[] = [];
  let max: number[] = [];

  for (let i: number = 0; i < nums.length; i++) {
    if (i === 0) {
      min[0] = nums[0];
      max[0] = nums[0];
    } else {
      if (nums[i] > 0) {
        min[i] = Math.min(
          nums[i],
          min[i - 1] * nums[i],
        );
        max[i] = Math.max(
          nums[i],
          max[i - 1] * nums[i],
        );
      } else {
        min[i] = Math.min(
          nums[i],
          max[i - 1] * nums[i],
        );
        max[i] = Math.max(
          nums[i],
          min[i - 1] * nums[i],
        );
      }
    }
  }

  return Math.max(...max);
}

// Original naive O(n²) solution
function maxProductNaive(nums: number[]): number {
  let dp : number[][] = [];
  for (let i: number = nums.length - 1; i >= 0; i--) {
    dp[i] = [];
    for (let j: number = i + 1; j <= nums.length; j++) {
      if (j - i === 1) {
        dp[i][j] = nums[i];
      } else if (j - i === 2) {
        dp[i][j] = Math.max(nums[i], nums[i+1], nums[i] * nums[i+1]);
      } else {
        dp[i][j] = Math.max(
          dp[i + 1][j],
          dp[i][j - 1],
          dp[i + 1][j - 1],
          productOfArray(nums.slice(i, j))
        );
      }
    }
  }
  return dp[0][nums.length];
}

function productOfArray(nums: number[]): number {
  let product: number = nums[0];
  for (let i : number = 1; i < nums.length; i++) {
    product *= nums[i];
  } 
  return product;
}
