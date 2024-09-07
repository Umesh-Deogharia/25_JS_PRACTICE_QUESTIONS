// Write the function to get the first element of the array.Passing a parameter 'n' will return the first 'n' element of the array.

let getFirstElement = (arr, n = 1) => {
  if (n <= arr.length) {
    for (let i = 0; i < n; i++) {
      console.log(arr[i]);
    }
  } else {
    console.warn(`${n}th position is not in this array`);
  }
};
getFirstElement([15, 82, 93, 44, 65], 4);
