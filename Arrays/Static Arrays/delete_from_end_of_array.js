let arr = [1, 2, 3, 4];

console.log(`before: ${arr}`);

arr[arr.length - 1] = -1;
arr.length--;

console.log(`after: ${arr}`);
