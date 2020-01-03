/*
 * median.js
 * Copyright (C) 2019 Sushil Chhetri <chhetrisushil@gmail.com>
 */
"use strict";

function getMedian(ar1, ar2, n) {
  let i = 0;
  let j = 0;
  let count;
  let m1 = -1, m2 = -1;

  for (count = 0; count <= n; count++) {
    if (i === n) {
      m1 = m2;
      m2 = ar2[0];
      break;
    } else if (j === n) {
      m1 = m2;
      m2 = ar1[0];
      break;
    }

    if (ar1[i] < ar2[j]) {
      m1 = m2;
      m2 = ar1[i];
      i++;
    } else {
      m1 = m2;
      m2 = ar2[j];
      j++;
    }
  }

  console.log(m1, m2);
  return (m1 + m2) / 2;
}

console.log(getMedian(
  [1,12,15,26,38],
  [2,13,17,30,45],
  5
));
