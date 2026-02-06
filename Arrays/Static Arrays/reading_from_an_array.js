let arr = [1, 2, 3, 4];

console.log(`arr[0]: ${arr[0]}`);

console.log('----------------');
console.log('for loop');
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log('----------------');
console.log('while loop');
let x = 0;
while (x < arr.length) {
  console.log(arr[x]);
  x++;
}
