/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  let tokens = str.split(" ");
  if (pattern.length !== tokens.length) {
    return false;
  }
  let tokenToCharMap = {};
  let charToTokenMap = {};
  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    let token = tokens[i];

    if (!tokenToCharMap[token]) {
      tokenToCharMap[token] = char;
    } else if (tokenToCharMap[token] !== char) {
      return false;
    }

    if (!charToTokenMap[char]) {
      charToTokenMap[char] = token;
    } else if (charToTokenMap[char] !== token) {
      return false;
    }
  }
  return true;
};