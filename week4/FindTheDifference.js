/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let smap = {};
  let tmap = {};
  count(s, smap);
  count(t, tmap);
  for (const c in tmap) {
    if (smap[c] != tmap[c]) {
      return c;
    }
  }

};

var count = function(s, m) {
  for (let i = 0; i < s.length; i++) {
    if (m[s[i]]) {
      m[s[i]]++;
    } else {
      m[s[i]] = 1;
    }
  }
};