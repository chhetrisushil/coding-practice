function nextGreaterElement(arr) {
  const result = [];
  let len = arr.length;
  let stack = [];

  for (let i = len - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }

    if (!stack.length) {
      result[i] = -1;
    } else {
      result[i] = stack[stack.length - 1];
    }

    stack.push(arr[i]);
  }

  return arr.map((v, i) => `{${v}:${result[i]}}`);
}

const arr = [1, 2, 25, 3, 42, 6];
console.log(`[${nextGreaterElement(arr).join()}]`);
