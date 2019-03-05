/**
 * Perform Binary search 
 * Worst case time complexity is O(log n)
 * The given array need to be sorted first
 *
 * @param {number[]} nums array of number
 * @param {number[]} key key to search
 */
const binarySearch = (nums, key) => {
  let low = 0;
  let high = nums.length;
  let itemIdx = -1;
  while(low <= high) {
    let mid = low + Math.floor((high - low)/2);

    if (key === nums[mid]) {
      itemIdx = mid;
      break;
    }

    if (key < nums[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return itemIdx;
}

module.exports = binarySearch;
