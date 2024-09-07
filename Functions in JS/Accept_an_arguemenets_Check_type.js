// Accepts an arguments and say type of that 

let typeteller = (elem)=>{
    console.log(typeof elem);
}
typeteller([]);
typeteller({});
typeteller(12);
typeteller("Umesh");
typeteller(true);
typeteller(undefined);
typeteller(function(){});