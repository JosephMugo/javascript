let arr = [1, 2, 3, 4];

console.log(`before: ${arr}`);

// check if array has items
if (arr.length > 0) {
  arr[arr.length - 1] = -1;
  arr.length--;
}

console.log(`after: ${arr}`);
