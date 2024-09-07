// With Spread Operator

let arr = [1, 2, 3, 4, 5];
let result = [...arr];
console.log(result);

//       OR

let myfunc = (elem) =>{
    let new_num;
    return new_num = [...elem];
};
console.log(myfunc(arr));

// With ForEach

let ans = [];
arr.forEach((elem) => {
    return ans.push(elem);  
});
console.log(ans);

// With map methods

let clone_arr = (elem) =>{
    let values = elem.map((elem) => {
      return elem;
    });
    console.log(values);
}
clone_arr(arr);