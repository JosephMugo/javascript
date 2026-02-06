let arr = [1, 2, 3, 4];


function remove_middle(arr, removal_index, length) {
  console.log(`before: ${arr}`)
  if (removal_index >= 0 && removal_index < length) {
    for (let i = removal_index + 1; i < length; i++) {
      arr[i - 1] = arr[i];
    }
    arr.length--;
  }
  console.log(`after: ${arr}`)
}

remove_middle(arr, -1, arr.length);
