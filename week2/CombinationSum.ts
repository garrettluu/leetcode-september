function combinationSum3(k: number, n: number): number[][] {
  let ans: number[][] = [];
  let current: number[] = [];
  combinationSum3Helper(k, n, current, ans, 1);
  return ans;
};

function combinationSum3Helper(
  k: number,
  n: number,
  curr: number[],
  ans: number[][],
  lowest: number
) {
  if (n == 0 && curr.length == k) {
    ans.push(curr.slice());
    return;
  } else if (n < 0) {
    return;
  }

  for (let i = lowest; i <= 9; i++) {
    curr.push(i);
    combinationSum3Helper(k, n - i, curr, ans, i + 1);
    curr.pop();
  }
}