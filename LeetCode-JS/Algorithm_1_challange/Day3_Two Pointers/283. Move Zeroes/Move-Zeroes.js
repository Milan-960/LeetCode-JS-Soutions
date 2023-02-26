// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

// Follow up: Could you minimize the total number of operations done?

// Ans

function moveZeroes(nums) {
  let slow = 0; // slow pointer to track next non-zero position
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      // if current element is non-zero, move it to the slow pointer position
      nums[slow] = nums[fast];
      slow++;
    }
  }
  // fill remaining positions with zeros
  for (let i = slow; i < nums.length; i++) {
    nums[i] = 0;
  }
}
