function findPoisonedDuration(timeSeries: number[], duration: number): number {
  let ans: number = 0;
  let poisonStart: number = 0;
  let poisonEnd: number = 0;
  for (let i: number = 0; i < timeSeries.length; i++) {
    if (i === 0) {
      poisonStart = timeSeries[i];
      poisonEnd = poisonStart + duration;
    } else {
      if (timeSeries[i] >= poisonEnd) {
        ans += poisonEnd - poisonStart;
        poisonStart = timeSeries[i];
        poisonEnd = poisonStart + duration;
      } else {
        poisonEnd = timeSeries[i] + duration;
      }
    }
  }
  ans += poisonEnd - poisonStart;
  return ans;
};