/**
 * Perform Linear search through array of number
 * Worst case complexity is O(n)
 * Waktu yang diperlukan untuk mencari elemen selalu meningkat
 * 
 * @param {number[]} nums array of number
 * @param {number} key key to search
 * @return {number} index of the found item, if not found will return -1
 */
function linearSearch(nums, key) {
  let foundIdx = -1;
  for (let i = 0; i < nums.length; i++) {
    if (key === nums[i]) {
      foundIdx = i;
      break;
    }
  }

  return foundIdx;
}

module.exports = linearSearch;