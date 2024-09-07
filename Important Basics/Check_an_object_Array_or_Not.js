const checkObject = (elem) => {
  return Array.isArray(elem);
};

console.log(checkObject([]));
console.log(checkObject({}));
