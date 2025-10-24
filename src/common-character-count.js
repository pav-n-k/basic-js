const { NotImplementedError } = require('../lib');

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
  if (s1 === '' || s2 === '') return 0;
  const getSObj = (s) => s.split('').reduce((obj, el) => {
    if (!obj[el]) {
      obj[el] = 1;
    } else {
      obj[el] += 1;
    }
    return obj;
  }, {});

  const obj1 = getSObj(s1);
  const obj2 = getSObj(s2);

  let result = 0;

  Object.keys(obj1).forEach((el) => {
    if (obj1[el] && obj2[el]) {
      result += Math.min(obj1[el], obj2[el]);
    }
  });

  return result;
}

module.exports = {
  getCommonCharacterCount
};
