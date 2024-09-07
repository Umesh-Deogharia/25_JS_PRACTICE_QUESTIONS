let obj = {};
let myfunc = (str) => {
  str.split("").map((elem) => {
    if (obj.hasOwnProperty(elem)) {
      obj[elem]++;
    } else {
      obj[elem] = 1;
    }
  });
  return obj;
};
console.log(myfunc('papu'));