/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  function getSumDigits(num) {
    let number = num;
    let sumDigits = 0;
    while (number) {
      sumDigits += number % 10;
      number = Math.trunc(number / 10);
    }
    if (sumDigits > 9) { sumDigits = getSumDigits(sumDigits); }
    return sumDigits;
  }
  return getSumDigits(n);
}

module.exports = getSumOfDigits;
