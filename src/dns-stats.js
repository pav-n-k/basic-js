const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const list = domains.map((domain) => domain.split('.').reverse());
  const result = {};
  for(let domain of list) {
    let key = '';
    for(let i = 0; i < domain.length; i += 1) {
      key += `.${domain[i]}`;
      if (result[key]) {
        result[key] += 1;
      } else {
        result[key] = 1;
      }
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
