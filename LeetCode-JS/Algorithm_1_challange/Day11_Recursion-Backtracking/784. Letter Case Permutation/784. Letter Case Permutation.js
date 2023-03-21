// Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.

// Return a list of all possible strings we could create. Return the output in any order.

// Example 1:

// Input: s = "a1b2"
// Output: ["a1b2","a1B2","A1b2","A1B2"]
// Example 2:

// Input: s = "3z4"
// Output: ["3z4","3Z4"]

// Constraints:

// 1 <= s.length <= 12
// s consists of lowercase English letters, uppercase English letters, and digits.

// Ans:

/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  let result = [];

  function backtrack(index, current) {
    if (index === s.length) {
      result.push(current);
      return;
    }

    let char = s[index];
    if (isNaN(char)) {
      backtrack(index + 1, current + char.toLowerCase());
      backtrack(index + 1, current + char.toUpperCase());
    } else {
      backtrack(index + 1, current + char);
    }
  }

  backtrack(0, "");
  return result;
};
