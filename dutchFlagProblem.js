function sortNums(arr) {
  let low = 0, high = arr.length - 1, i = 0;

  while (i <= high) {
    if (arr[i] === 1) {
      [arr[i], arr[low]] = [arr[low], arr[i]];
      i+=1;
      low+=1;
    } else if (arr[i] === 2) {
      i+=1;
    } else {
      [arr[i], arr[high]] = [arr[high], arr[i]];
      high-=1;
    }
  }

  return arr;
}

let arr = [3, 3, 2, 1, 3, 2, 1];

sortNums(arr);
console.log(arr);
