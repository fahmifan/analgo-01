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
    let mid = parseInt((high + low)/2, 10);

    if (key === nums[mid]) {
      itemIdx = mid;
      break;
    }

    if (nums[mid] < key) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return itemIdx;
}

module.exports = binarySearch;
