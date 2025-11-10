// teori .this

// var a = 10;

// console.log(this.a);

// membuat object

// cara 1 - function declaration
// function halo() {
//   console.log(this);
//   console.log("hallo declaration");
// }

// halo();

// cara 2 - object literal
var obj = {};
obj.Halo = function () {
  console.log(this);
  console.log("halo literal");
};

obj.Halo();

// cara 3 -constructor
// function Halo() {

//   console.log("halo consturtor");
// }

// new Halo();
