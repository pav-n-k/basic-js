const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {

  if (Object.keys(options).length === 0) return str;

  let result = '';

  const defaultOptions = {
    separator: '+',
    additionSeparator: '|',
    ...options,
    addition: `${options.addition === undefined ? '' : options.addition}`,
  };

  if (typeof str !== 'string') str = `${str}`;

  const { separator, additionSeparator, repeatTimes, addition, additionRepeatTimes, } = defaultOptions;

  if (repeatTimes && !additionRepeatTimes) {
    result = Array(repeatTimes).fill(`${str}${addition}`).join(separator);
  }
  const additionStr = Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  if (repeatTimes && additionRepeatTimes) {
    result = Array(repeatTimes).fill(`${str}${additionStr}`).join(separator);
  }
  if (!repeatTimes && additionRepeatTimes) {
    result = `${str}${additionStr}`;
  }

  if (!repeatTimes && !additionRepeatTimes) {
    result = `${str}${addition}`;
  }
  return result;
}

module.exports = {
  repeater
};
