class Solution {
 public:
  bool repeatedSubstringPattern(string s) {
    int n = s.size();
    if (n == 1) {
      return false;
    }

    string dupe = s + s;
    dupe = dupe.substr(1, n * 2 - 2);
    return dupe.find(s) != string::npos;
  }
};