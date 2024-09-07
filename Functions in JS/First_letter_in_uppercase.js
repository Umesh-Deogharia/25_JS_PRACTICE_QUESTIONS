let makename = (str) => {
  let sentences = str.split(" ");
  let new_str = sentences.map((elem) => {
    return elem[0].toUpperCase() + elem.substring(1);
  });
  console.log(new_str);
};
makename("my name is umesh deogharia");
