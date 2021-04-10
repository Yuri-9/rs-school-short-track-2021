/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const str2 = s2.split('');
  let countCommonChars = 0;

  s1.split('').forEach((char1) => {
    const indexCommonChar = str2.findIndex((char2) => char2 === char1);
    if (indexCommonChar !== -1) {
      str2.splice(indexCommonChar, 1);
      countCommonChars++;
    }
  });
  return countCommonChars;
}

module.exports = getCommonCharacterCount;
