// for (let i = 0; i < 15; i++) {
//   if (i / 5 == 1) {
//     console.log("Ini mah angka 5");
//   } else if (i == 11) {
//     console.log("Ini mah angka 11");
//   } else {
//     console.log("Ini angka " + i);
//   }
// }

// kalau i kelipatan dari 3 tampilkan Fizz
// kalau i kelipatan dari 5 tampilkan Buzz
// kalau i kelipatan dari 3 & 5 tampilkan FizzBuzz
// kalau i bukan kelipatan dari 3 atau 5 tampilkan i

for (let i = 0; i <= 30; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
