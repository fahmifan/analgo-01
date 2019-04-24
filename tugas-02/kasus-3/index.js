#!/usr/bin/env node

const binarySearch = require('./binary-search');
const random = require('../utils/random');

function main() {
  const bsLable = 'binarySearch'; 
  let maxArr = [10, 20, 50, 100];

  maxArr.forEach((m, idx) => {
    let nums = []; 
    for (let i = 0; i < m; i++) {
      nums.push(random.getInt(0, m));
    }
      
    // key is random between range
    let randIdx = random.getInt(0, nums.length);
    let key = nums[randIdx];

    console.log(`\n>>> search ${key} in ${m} numbers.`);
    console.log(`[${nums}]`);

    console.time(bsLable);
    const foundIdx = binarySearch(nums, key);
    console.timeEnd(bsLable); 
    
    console.log(`found ${key} in index ${foundIdx}`);
    
  });
}

main();