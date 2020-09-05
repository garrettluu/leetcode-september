var partitionLabels = function(S) {
  let last = {};
  let ans = [];

  for (let i = 0; i < S.length; i++) {
    last[S[i]] = i;
  }

  let j = 0;
  let a = 0;
  for (let i = 0; i < S.length; i++) {
    j = Math.max(j , last[S[i]]);
    if (i == j) {
      ans.push(i - a + 1);
      a = i + 1;
    }
  }
  return ans;
};