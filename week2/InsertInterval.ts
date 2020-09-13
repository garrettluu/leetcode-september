function insert(intervals: number[][], newInterval: number[]): number[][] {
  let ans: number[][] = [];
  let i = 0;
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    ans.push(intervals[i]);
    i++;
  }
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
    i++;
  }
  ans.push(newInterval);
  while (i < intervals.length) {
    ans.push(intervals[i]);
    i++;
  }
  return ans;
}
