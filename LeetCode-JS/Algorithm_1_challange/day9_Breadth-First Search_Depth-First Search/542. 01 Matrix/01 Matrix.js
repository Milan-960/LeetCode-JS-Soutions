// Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

// The distance between two adjacent cells is 1.

// Example 1:

// Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
// Output: [[0,0,0],[0,1,0],[0,0,0]]
// Example 2:

// Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
// Output: [[0,0,0],[0,1,0],[1,2,1]]

// Constraints:

// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 104
// 1 <= m * n <= 104
// mat[i][j] is either 0 or 1.
// There is at least one 0 in mat.

// const updateMatrix = function (mat) {
//   const rows = mat.length;
//   const cols = mat[0].length;

//   // Initialize a new matrix with all values set to Infinity.
//   const result = Array(rows)
//     .fill()
//     .map(() => Array(cols).fill(Infinity));

//   // If a cell contains 0, set its distance to 0 in the result matrix.
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       if (mat[i][j] === 0) {
//         result[i][j] = 0;
//       }
//     }
//   }

//   // Traverse the matrix from top to bottom and left to right to find the distance to the nearest 0.
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       // Check the adjacent cells (up, left, down, right) and update the distance if it is shorter.
//       if (i > 0) {
//         result[i][j] = Math.min(result[i][j], result[i - 1][j] + 1);
//       }
//       if (j > 0) {
//         result[i][j] = Math.min(result[i][j], result[i][j - 1] + 1);
//       }
//       if (i < rows - 1) {
//         result[i][j] = Math.min(result[i][j], result[i + 1][j] + 1);
//       }
//       if (j < cols - 1) {
//         result[i][j] = Math.min(result[i][j], result[i][j + 1] + 1);
//       }
//     }
//   }

//   return result;
// };

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  let queue = [];
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j]);
      } else {
        mat[i][j] = -1;
      }
    }
  }
  let dir = [
    [0, 1],
    [-1, 0],
    [1, 0],
    [0, -1],
  ];
  let level = 0;
  while (queue.length !== 0) {
    let size = queue.length;
    level++;
    while (size--) {
      let cell = queue.shift();
      for (let i = 0; i < 4; i++) {
        let r = cell[0] + dir[i][0];
        let c = cell[1] + dir[i][1];
        if (
          r < 0 ||
          c < 0 ||
          r >= mat.length ||
          c >= mat[0].length ||
          mat[r][c] !== -1
        )
          continue;
        mat[r][c] = level;
        queue.push([r, c]);
      }
    }
  }
  return mat;
};
