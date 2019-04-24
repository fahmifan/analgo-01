#!/usr/bin/env node

'use strict';

const insertionSort = require('./insertion-sort');
const random = require('../utils/random');

function main() {
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
    const sorted = insertionSort(nums);
    console.timeEnd(lable);  

    console.log(`[${sorted}]`);
  });
}

main();
