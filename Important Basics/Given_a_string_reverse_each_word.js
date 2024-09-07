let Sentence = "Hello My name is Umesh Deogharia";
let str = Sentence.split(" ");
let str2 = str.map((elem) => {
  return elem.split("").reverse().join("");
});
console.log(str2.join(" "));