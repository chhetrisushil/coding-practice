/*
 * lru.js
 * Copyright (C) 2018 Sushil Chhetri <chhetrisushil@gmail.com>
 */

'use strict';

function pageFaults(pages, capacity) {
  let pageLen = pages.length,
    pageSet = new Set(),
    indexesMap = new Map(),
    pageFaults = 0;

  for (let i = 0, page; i < pageLen; i++) {
    page = pages[i];

    if (pageSet.size < capacity) {
      if (!pageSet.has(page)) {
        pageSet.add(page);

        pageFaults++;
      }

      indexesMap.set(page, i);
    } else {
      if (!pageSet.has(page)) {
        let lru = Number.MAX_SAFE_INTEGER,
          val = Number.MIN_SAFE_INTEGER;

        let itr = pageSet.values(),
          next = itr.next();

        while(!next.done) {
          let temp = next.value;

          if (indexesMap.get(temp) < lru) {
            lru = indexesMap.get(temp);
            val = temp;
          }

          next = itr.next();
        }

        pageSet.delete(val);

        pageSet.add(page);

        pageFaults++;
      }

      indexesMap.set(page, i);
    }
  }

  return pageFaults;
}

let pages = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2];
let capacity = 4;

console.log(pageFaults(pages, capacity));
