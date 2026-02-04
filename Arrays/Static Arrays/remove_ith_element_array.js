let arr = [1, 2, 3, 4];


function remove_middle(arr, removal_index, length) {
  console.log(`after: ${arr}`)
  for (let i = removal_index + 1; i < length; i++) {
    arr[i - 1] = arr[i];
  }
  arr.length--;
  console.log(`after: ${arr}`)
}

remove_middle(arr, 3, arr.length);
