/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const array = str.split('');
  const encodeArr = [];
  let count = 1;

  array.forEach((char, i, arr) => {
    if (char === arr[i + 1]) {
      count++;
    } else {
      count = count === 1 ? '' : count;
      encodeArr.push(`${count}${char}`);
      count = 1;
    }
  });
  return encodeArr.join('');
}

module.exports = encodeLine;
