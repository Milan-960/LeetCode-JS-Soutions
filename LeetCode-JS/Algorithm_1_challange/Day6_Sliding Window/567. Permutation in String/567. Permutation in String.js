// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

// Constraints:

// 1 <= s1.length, s2.length <= 104
// s1 and s2 consist of lowercase English letters.

// ANS

// MEDIUM

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var checkInclusion = function (s1, s2) {
  const map = {};
  for (let i = 0; i < s1.length; i++) {
    map[s1[i]] = (map[s1[i]] || 0) + 1;
  }

  let left = 0;
  let right = 0;
  let count = s1.length;

  while (right < s2.length) {
    if (map[s2[right]] > 0) {
      count--;
    }
    map[s2[right]] = (map[s2[right]] || 0) - 1;
    right++;

    if (count === 0) {
      return true;
    }

    if (right - left === s1.length) {
      if (map[s2[left]] >= 0) {
        count++;
      }
      map[s2[left]]++;
      left++;
    }
  }

  return false;
};
