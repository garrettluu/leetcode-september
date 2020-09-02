class Solution {
  public:
    string largestTimeFromDigits(vector<int>& A) {
      sort(A.begin(), A.end());
      int max = -1;
      do {
        int hours = A[0] * 10 + A[1];
        if (hours > 23) {
          continue;
        }
        int minutes = A[2] * 10 + A[3];
        if (minutes > 59) {
          continue;
        }
        //here, both hours and minutes should be valid.
        int time = hours * 100 + minutes;
        if (time > max) {
          max = time;
        }
      } while (next_permutation(A.begin(), A.end()));
      if (max == -1) {
        return "";
      }
      string ans = to_string_padded(max);
      ans.insert(2, ":");
      return ans;
    }
    string to_string_padded(int num) {
      string ans = "";
      for (int i = 0; i < 4; i++) {
        int digit = num % 10;
        ans = to_string(digit) + ans;
        num = num / 10;
      }
      return ans;
    }
};
