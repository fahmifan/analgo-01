#!/usr/bin/env node

const { mergeSort } = require('./merge-sort');
const random = require('../utils/random');

function main() {
  const mergeSortLable = 'merge-sort'; 

  let maxArr = [10, 50, 100, 200, 500];
  maxArr.forEach((m, idx) => {
    let nums = []; 
    for (let i = 0; i < m; i++) {
      nums.push(random.getInt(0, m))
    }

    console.log(`\narray`, m);
    console.time(mergeSortLable);
    mergeSort(nums, 0, nums.length - 1);
    console.timeEnd(mergeSortLable);
  })

}

main();