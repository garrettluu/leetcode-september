/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  let v1Tokens = version1.split(".");
  let v2Tokens = version2.split(".");

  let n = Math.max(v1Tokens.length, v2Tokens.length);
  let m = Math.min(v1Tokens.length, v2Tokens.length);

  for (let i = m; i < n; i++) {
    if (v1Tokens.length > v2Tokens.length) {
      v2Tokens.push("0");
    } else {
      v1Tokens.push("0");
    }
  }

  for (let i = 0; i < n; i++) {
    let v1 = parseInt(v1Tokens[i]);
    let v2 = parseInt(v2Tokens[i]);
    if (v1 !== v2) {
      return v1 > v2 ? 1 : -1;
    }
  }

  return 0;
};
