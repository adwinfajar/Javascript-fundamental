// belajar function

// non-parameter
// function hello() {
//   console.log(`Hello, node.js`);
// }

// hello();

// Parameter on 1 parameter
// function hello(nama) {
//   console.log(`Hello,` + nama);
// }

// hello(`Javascript`);

// Parameter on 2 parameter
// function hello(namaAwal, namaAkhir) {
//   // console.log(namaAwal, namaAkhir);
//   // bisa juga seperti ini
//   console.log(`nama depan : ` + namaAwal);
//   console.log(`nama akhir : ` + namaAkhir);
// }

// hello(`Javascript`, `node.js`);

// Bisa bergini biar lebih keliatan expert
// function addName() {
//   // console.log(`Nama Awal :` + arguments[0]);
//   // console.log(`Nama Akhir :` + arguments[1]);
//   // atau gini
//   for (let i = 0; i < arguments.length; i++) {
//     console.log(`Nama Lengkap :` + arguments[i]);
//   }
// }

// addName(`Javascript`, `node.js`);

// Bisa juga dengan cara seperti ini :
// cara pertama :
// function addName(firstName, lastName) {
//   console.log(firstName, lastName);
// }
// // cara kedua :
// const fulname = new Function(`firstName`, `lastName`, `console.log(firstName, lastName)`);

// fulname(`adwin`, `fajar`);

// kesimpulannya gini, ada 3 cara untuk membuat function di javascript :

// cara 1 standart function
function sum1(x, y) {
  console.log(x + y);
}

sum1(2, 5);

// cara 2 keyword new Function
const sum2 = new Function(`x`, `y`, `console.log(x+y)`);

sum2(2, 2);

// cara 3 arrow function => yang sering digunakan di industri
const sum3 = (x, y) => {
  console.log(3 + 2);
};

sum3();
