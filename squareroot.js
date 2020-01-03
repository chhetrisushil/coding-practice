/*
 * squareroot.js
 * Copyright (C) 2018 Sushil Chhetri <chhetrisushil@gmail.com>
 */
'use strict';

function binSearchSqrt(num) {
  console.log('Binary search sqrt');

  let start = 0;
  let end = num;
  let mid = (start + end)/2;
  let prevMid = 0;
  let diff = Math.abs(prevMid - mid);
  let count = 0;

  while (mid * mid !== num && diff > 0.000001) {
    if (mid * mid > num) {
      end = mid;
    } else {
      start = mid;
    }

    prevMid = mid;
    mid = (start + end)/2;
    diff = Math.abs(prevMid - mid);
    count++;
  }

  console.log(`Iterations: ${count}`);
  console.log(`SquareRoot: ${mid}\n`);
}

function newtonRaphsonSqrt(num) {
  console.log('Newton Raphson sqrt');
  let count = 0;
  let x = 1;
  let fX = 0;
  let fPrimeX = 0;
  let guess = 0;
  let diff = 0;

  do {
    fX = (x * x) - num;
    fPrimeX = 2 * x;
    guess = x - (fX / fPrimeX);

    diff = Math.abs(x - guess);
    x = guess;
    count++;
  } while(diff > 0.000001);

  console.log(`Iterations: ${count}`);
  console.log(`SquareRoot: ${guess}`);
}

let num = parseInt(process.argv[2], 10);
console.log(`Input: ${num}\n`);

binSearchSqrt(num);
newtonRaphsonSqrt(num);
