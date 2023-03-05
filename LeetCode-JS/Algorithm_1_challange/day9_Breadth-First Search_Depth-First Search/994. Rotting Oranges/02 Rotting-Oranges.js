// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

// Example 1:

// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4
// Example 2:

// Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
// Example 3:

// Input: grid = [[0,2]]
// Output: 0
// Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 10
// grid[i][j] is 0, 1, or 2.

function orangesRotting(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  let freshOranges = 0;
  const rottenOranges = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        freshOranges++;
      } else if (grid[i][j] === 2) {
        rottenOranges.push([i, j, 0]);
      }
    }
  }

  let minutes = 0;

  while (rottenOranges.length > 0) {
    const [i, j, minute] = rottenOranges.shift();
    minutes = Math.max(minutes, minute);

    for (const [di, dj] of directions) {
      const ni = i + di;
      const nj = j + dj;

      if (ni >= 0 && ni < rows && nj >= 0 && nj < cols && grid[ni][nj] === 1) {
        grid[ni][nj] = 2;
        freshOranges--;
        rottenOranges.push([ni, nj, minute + 1]);
      }
    }
  }

  return freshOranges === 0 ? minutes : -1;
}
