let arr = [1, 3, "Umesh", 4, 5, "papu", 2, "This", 6, 7, "End"];
let sum = 0;
arr.forEach((elem) => {
  if (typeof elem === "number") {
    return (sum += elem);
  }
});
console.log(sum);
