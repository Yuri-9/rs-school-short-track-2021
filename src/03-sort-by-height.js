/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arr2 = arr;
  for (let i = 0; i < arr2.length; i++) {
    let IndexFirstSwap = 0;
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j + 1] !== -1) {
        if (arr[IndexFirstSwap] > arr2[j + 1]) {
          [arr2[IndexFirstSwap], arr2[j + 1]] = [arr2[j + 1], arr2[IndexFirstSwap]];
        }
        IndexFirstSwap = j + 1;
      }
    }
  }
  return arr2;
}

module.exports = sortByHeight;
