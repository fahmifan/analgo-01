#!/usr/bin/env node

'use strict';

const linearSearch = require('./linear-search');
const random = require('../utils/random');

function main() {
  const lable = 'linear search'; 
  let maxArr = [10, 20, 50, 100];

  maxArr.forEach((m) => {
    let nums = []; 
    for (let i = 0; i < m; i++) {
      nums.push(random.getInt(0, m));
    }
    
    let key = random.getInt(nums[0], nums[nums.length - 1]);

    console.log(`\n>>> search in ${m} numbers.`);
    console.log(`[${nums}]`);

    console.time(lable);
    const foundIdx = linearSearch(nums, key);
    console.timeEnd(lable);  

    console.log(`found ${key} in index ${foundIdx}`);
  });
}

main();
