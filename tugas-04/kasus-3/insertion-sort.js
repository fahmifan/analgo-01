/**
 * @param {number[]} nums
 * @returns {number[]} ascending sorted nums
 */
module.exports = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j > 0; j--) {
      if (nums[j-1] > nums[j]) {
        // swap nums value
        let temp = nums[j];
        nums[j] = nums[j-1];
        nums[j-1] = temp;
      }
    }
  }

  return nums;
};
