/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const number = n;

  const arrCharsOfNumber = number.toString().split('');
  let minChar;

  arrCharsOfNumber.forEach((char) => { minChar = minChar < char ? minChar : char; });

  for (let i = 0; i < arrCharsOfNumber.length; i++) {
    if (arrCharsOfNumber[arrCharsOfNumber.length - 1 - i] === minChar) {
      arrCharsOfNumber.splice(arrCharsOfNumber.length - 1 - i, 1);
      break;
    }
  }
  return +arrCharsOfNumber.join('');
}

module.exports = deleteDigit;
