// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:

// Input: nums = [1]
// Output: [[1]]

// Constraints:

// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// All the integers of nums are unique.

// ANS

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const results = [];

  // Define recursive helper function
  function backtrack(currentPermutation) {
    if (currentPermutation.length === nums.length) {
      // Permutation has all numbers, add it to results
      results.push([...currentPermutation]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (currentPermutation.includes(nums[i])) {
        // Number already in current permutation, skip it
        continue;
      }
      // Add current number to permutation
      currentPermutation.push(nums[i]);
      // Recursively backtrack with updated permutation
      backtrack(currentPermutation);
      // Remove last added number and try next one
      currentPermutation.pop();
    }
  }

  // Start recursive backtracking
  backtrack([]);

  return results;
};
