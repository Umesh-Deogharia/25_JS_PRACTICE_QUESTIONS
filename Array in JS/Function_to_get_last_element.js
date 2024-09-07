// Write the function to get the last element of the array.Passing a parameter 'n' will return the last 'n' element of the array.

let lastElement = (arr, n = 1) => {
    if (n<=arr.length){
        for (let i = 0; i < n; i++) {
            console.log(arr[arr.length-1-i]);
        }
    }else{
        console.log(`${n} is not available`);
    }
};
lastElement([12,44,53,21,22,],4);