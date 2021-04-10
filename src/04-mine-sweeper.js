/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const newMineSweeper = new Array(matrix.length);
  for (let i = 0; i < matrix.length; i++) {
    newMineSweeper[i] = new Array(matrix[i].length).fill(0);
  }

  function increaseNearItems (i, j) {
    for (let x = -1; x < 2; x++) {
      for (let y = -1; y < 2; y++) {
        if (!(i + x === i && j + y === j)) {
          if (newMineSweeper[i + x] !== undefined && newMineSweeper[i + x][j + y] !== undefined) {
            newMineSweeper[i + x][j + y]++;
          }
        }
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        increaseNearItems(i, j);
      }
    }
  }
  return newMineSweeper;
}

module.exports = minesweeper;
