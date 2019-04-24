/**
 * Mencari index bilangan suatu array
 * @param {number[]} nums
 * @param {number} key number to search
 * @returns {number} index of found num. if not found it return -1 
 */
module.exports = (nums, key) => {
  let foundIdx = -1;
  for (let i = 0; i < nums.length; i++) {
    if (key === nums[i]) {
      foundIdx = i;
    }
  }  

  return foundIdx;
}