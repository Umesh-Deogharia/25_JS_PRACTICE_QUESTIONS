// loop over an array of object remove all the objects whose don't have gender male

let arr = [
  { name: "John", age: 25, gender: "male" },
  { name: "Alice", age: 30, gender: "female" },
  { name: "Bob", age: 20, gender: "male" },
  { name: "David", age: 28, gender: "female" },
];
let count = 0;
arr.forEach((elem) => {
  if (elem.gender !== "male") {
    count++;
  }
  return count;
});
for (let i = 0; i <= count; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j].gender !== "male") {
      arr.splice(j, 1);
    }
  }
}
console.log(arr);