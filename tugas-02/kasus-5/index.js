#!/usr/bin/env node

'use strict';

const selectSort = require('./selection-sort');
const random = require('../utils/random');

function main() {
  let res = selectSort([1, 0, 3, 5, 10, 30, 7]);
  console.log(res);

  res = selectSort([100, 45, 28, 3, 2, 1, 0]);
  console.log(res);

  res = selectSort([7, 100, 10, 20, 50, 120, 0]);
  console.log(res);

  const lable = 'insertion search'; 
  let maxArr = [10, 20, 50, 100];

  maxArr.forEach((m) => {
    let nums = []; 
    for (let i = 0; i < m; i++) {
      nums.push(random.getInt(0+i, m));
    }
    
    console.log(`\n>>> sort ${m} numbers.`);
    console.log(`[${nums}]`);

    console.time(lable);
    const sorted = selectSort(nums);
    console.timeEnd(lable);  

    console.log(`[${sorted}]`);
  });
}

main();
