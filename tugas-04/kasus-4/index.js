#!/usr/bin/env node

'use strict';

const { bubleSort } = require('./buble-sort');
const random = require('../utils/random');

function main() {
  const lable = 'bubble sort'; 
  let maxArr = [10, 20, 50, 100];

  maxArr.forEach((m) => {
    let nums = []; 
    for (let i = 0; i < m; i++) {
      nums.push(random.getInt(0, m));
    }
    
    console.log(`\n>>> sort ${m} numbers.`);
    console.log(`[${nums}]`);

    console.time(lable);
    const sorted = bubleSort(nums);
    console.timeEnd(lable);  

    console.log(`[${sorted}]`);
  });
}

main();
