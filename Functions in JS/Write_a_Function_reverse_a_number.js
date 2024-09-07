let reversekaro = (num) => {
  let str = num.toString();
  let reverseStr = Number(str.split("").reverse().join(""));
  console.log(reverseStr);
};
reversekaro(12);

//                                    OR

let reverse = (elem) => {
  let ans = 0;
  while (elem > 0) {
    let rem = elem % 10;
    ans = ans * 10 + rem;
    elem = Math.floor(elem / 10);
  }
  console.log(ans);
};
reverse(1234);
