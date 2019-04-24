#!/usr/bin/env node

'use strict';

const maxGrade = require('./max-grade');
const random = require('../utils/random');

function main() {
  const lable = 'maxGrade';

  let maxArr = [10, 20, 50, 100];
  maxArr.forEach((m) => {
    let nums = []; 
    for (let i = 0; i < m; i++) {
      nums.push(random.getInt(0+i, m));
    }
    
    console.log(`\n>>> find max in ${m} numbers.`);
    console.log(`[${nums}]`);

    console.time(lable);
    const foundIdx = maxGrade(nums);
    console.timeEnd(lable);  

    console.log(`max: ${foundIdx}`);
  });
}

main();
