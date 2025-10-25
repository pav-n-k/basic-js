const { NotImplementedError } = require('../lib');

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
  let result = '';
  if (str === '') return str;
  for (let i = 0; i < str.length; i+= 1) {
    const current = str[i];
    if (str[i + 1] !== current) result += current;
    if (str[i + 1] === current) {
      let j = 0;
      while(current === str[i + j]) {
        j += 1;
      }
      result += j;
      result += current;
      i += j - 1;
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
