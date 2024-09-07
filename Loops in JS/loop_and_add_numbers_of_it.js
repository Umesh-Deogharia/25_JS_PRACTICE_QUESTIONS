let arr = [1, 2, 3, 4, 5, 6, 7];
let ans = 0;
for (let i = 0; i < arr.length; i++) {
  ans += arr[i];
}
console.log(ans);

//                                  OR

// with forEach
let num = 0;
arr.forEach((elem) => {
  num += elem;
});
console.log(num);