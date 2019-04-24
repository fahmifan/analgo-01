/**
 * @param {number[]} nums
 * @returns {number[]} ascending sorted nums
 */
module.exports = (nums) => {
  let size = nums.length;
  for (let i = 0; i < size - 1; i++) {
    // find min number
    let minIdx =  i;
    for (let j = i+1; j < size; j++) {
      if (nums[j] < nums[minIdx]) {
        minIdx = j;
      }
    }

    if (minIdx !== i) {
      let temp = nums[i];
      nums[i] = nums[minIdx];
      nums[minIdx] = temp;
    }
  }

  return nums;
}