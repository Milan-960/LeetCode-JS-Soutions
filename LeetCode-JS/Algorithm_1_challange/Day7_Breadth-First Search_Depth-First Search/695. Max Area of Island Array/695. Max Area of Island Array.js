// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.

// Example 1:

// Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Output: 6
// Explanation: The answer is not 11, because the island must be connected 4-directionally.
// Example 2:

// Input: grid = [[0,0,0,0,0,0,0,0]]
// Output: 0

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 50
// grid[i][j] is either 0 or 1.

//? ANS

// Create a helper function that recursively traverses the matrix to find all connected 1s in an island. The helper function should mark visited cells to avoid revisiting them and should return the size of the island.

// Iterate through the matrix and for each cell that is a 1 and not visited, call the helper function to find the size of the island. Update a variable with the maximum island size seen so far.
// Return the maximum island size as the result.

// This approach uses depth-first search (DFS) to traverse the matrix and find the islands. It iterates through the matrix only once, so it has a time complexity of O(mn) where m and n are the dimensions of the matrix. The space complexity is O(mn) because we need to mark visited cells to avoid revisiting them, which requires additional memory.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let maxArea = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        maxArea = Math.max(maxArea, dfs(grid, i, j));
      }
    }
  }
  return maxArea;
};

function dfs(grid, i, j) {
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[0].length ||
    grid[i][j] !== 1
  ) {
    return 0;
  }
  grid[i][j] = 2; // mark as visited
  return (
    1 +
    dfs(grid, i - 1, j) +
    dfs(grid, i + 1, j) +
    dfs(grid, i, j - 1) +
    dfs(grid, i, j + 1)
  );

  //? 2nd solution
  // let maxArea = 0;

  // const dfs = (i, j) => {
  //     if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === 0) {
  //         return 0;
  //     }

  //     grid[i][j] = 0;

  //     let area = 1;
  //     area += dfs(i-1, j);
  //     area += dfs(i+1, j);
  //     area += dfs(i, j-1);
  //     area += dfs(i, j+1);

  //     return area;
  // }

  // for (let i = 0; i < grid.length; i++) {
  //     for (let j = 0; j < grid[0].length; j++) {
  //         if (grid[i][j] === 1) {
  //             maxArea = Math.max(maxArea, dfs(i, j));
  //         }
  //     }
  // }

  // return maxArea;
}
