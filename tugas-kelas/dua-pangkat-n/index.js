#!/usr/bin/env node

const loop = require('./loop');
const recursive = require('./recursive');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function main() {
  console.log('====== loop =======');
  console.log('2^1 === 2 ? %o', eval(loop(1) === 2));
  console.log('2^2 === 4 ? %o', eval(loop(2) === 4));
  console.log('2^3 === 8 ? %o', eval(loop(3) === 8));
  console.log('2^4 === 16 ? %o', eval(loop(4) === 16));

  console.log('====== recursive =======');
  console.log('2^1 === 2 ? %o', eval(recursive(1) === 2));
  console.log('2^1 === 4 ? %o', eval(recursive(2) === 4));
  console.log('2^3 === 8 ? %o', eval(recursive(3) === 8));
  console.log('2^4 === 16 ? %o', eval(recursive(4) === 16));

  const lableLoop = 'loop';
  const lableRecur = 'recursive';

  for (let i = 0; i <= 200; i += 10) {
    console.log(`\n>>> 2^${i}`);

    console.time(lableLoop);
    loop(i);
    console.timeEnd(lableLoop);
  
    console.time(lableRecur);
    recursive(i);
    console.timeEnd(lableRecur);

    i += getRandomInt(0, 9);
  }

}

main();
