class Solution {
 public:
  // Bitmask solution, O(n) time
  int findMaximumXOR(vector<int>& nums) {
    int mask = 0;
    int ans = 0;
    for (int i = 31; i >= 0; i--) {
      mask = mask | (1 << i);
      unordered_set<int> set;
      for (int j = 0; j < nums.size(); j++) {
        set.insert(nums[j] & mask);
      }

      int tmp = ans | (1 << i);
      for (auto j = set.begin(); j != set.end(); j++) {
        if (set.count(tmp ^ *j)) {
          ans = tmp;
          break;
        }
      }

    }
    return ans;
  }

  // Brute force solution, O(n²) time
  int findMaximumXORBruteForce(vector<int>& nums) {
    int ans = 0;
    for (int i = 0; i < nums.size() - 1; i++) {
      for (int j = i + 1; j < nums.size(); j++) {
        if (i == 0 && j == 1) {
          ans = nums[0] ^ nums[1];
        } else {
          ans = max(ans, nums[i] ^ nums[j]);
        }
      }
    }
    return ans;
  }
};