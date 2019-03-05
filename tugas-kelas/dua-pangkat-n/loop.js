/** 
 * @author Muhammad Fahmi I.
 * NPM: 140810160028
 * Year: 2019
*/

/**
 * @param {number} n power
 * @returns {number} 2^n 
 */
const loop = (n) => {
  let pow = 1;
  for (let i = 0; i < n; i++) {
    pow *= 2;
  }

  return pow;
}

module.exports = loop;
