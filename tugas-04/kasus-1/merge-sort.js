/**
 * @param {number[]} arr
 * @param {number} l left index bound
 * @param {number} m middle index bound
 * @param {number} r right index bound
 */
const sort = (arr, l, m, r) => {
  // Find sizes of two subarrays to be merged 
  let n1 = m - l + 1; 
  let n2 = r - m; 

  /* Create temp arrays */
  let L = [n1]; 
  let R = [n2]; 

  /*Copy data to temp arrays*/
  for (let i=0; i<n1; ++i) {
    L[i] = arr[l + i];
  }
  for (let j=0; j<n2; ++j) {
    R[j] = arr[m + 1+ j]; 
  }


  /* Merge the temp arrays */

  // Initial indexes of first and second subarrays 
  let i = 0, j = 0; 

  // Initial index of merged subarry array 
  let k = l; 
  while (i < n1 && j < n2) 
  { 
      if (L[i] <= R[j]) 
      { 
          arr[k] = L[i]; 
          i++; 
      } 
      else
      { 
          arr[k] = R[j]; 
          j++; 
      } 
      k++; 
  } 

  /* Copy remaining elements of L[] if any */
  while (i < n1) 
  { 
      arr[k] = L[i]; 
      i++; 
      k++; 
  } 

  /* Copy remaining elements of R[] if any */
  while (j < n2) 
  { 
      arr[k] = R[j]; 
      j++; 
      k++; 
  }
}

/**
 * Merge sort
 * @param {number[]} arr
 * @param {number} l left bound
 * @param {number} r right bound
 */
exports.mergeSort = (arr, l, r) => {
  if (l < r) { 
    // Find the middle point 
    let m = (l+r)/2; 

    // Sort first and second halves 
    sort(arr, l, m); 
    sort(arr , m+1, r); 

    // Merge the sorted halves 
    exports.mergeSort(arr, l, m, r); 
} 
};

module.exports = exports;
