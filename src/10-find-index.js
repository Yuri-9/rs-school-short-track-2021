/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let firstIndex = 0;
  let lastIndex = array.length - 1;
  let find = false;
  let position = -1;
  let middleIndex;

  while (find === false && firstIndex <= lastIndex) {
    middleIndex = Math.floor((firstIndex + lastIndex) / 2);
    if (array[middleIndex] === value) {
      find = true;
      position = middleIndex;
    } else if (value < array[middleIndex]) {
      lastIndex = middleIndex - 1;
    } else {
      firstIndex = middleIndex + 1;
    }
  }
  return position;
}

module.exports = findIndex;
