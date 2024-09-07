// 3
// name Virat
// country India
// role Batsman
// role

// Output

// name Virat
// country India

let obj = {
  name: Virat,
  country: India,
  role: Batsman,
  role,
};

obj.forEach((elem) => {
    if(obj[elem].hasOwnProperty(role)){
        console.log(elem);
    }
});