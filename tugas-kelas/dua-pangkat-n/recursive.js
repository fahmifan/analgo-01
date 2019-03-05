/** 
 * @author Muhammad Fahmi I.
 * NPM: 140810160028
 * Year: 2019
*/

/**
 * @param {number} n power number
 * @returns {number} 2^n
 */
const recursive = (n) => {
  let bound = n;
  if (bound < 1) return 1;
  return 2*recursive(--bound);
};

module.exports = recursive;
