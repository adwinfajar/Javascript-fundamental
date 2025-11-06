const score = 0;

// IF CHAIN
// Jika salah satu kondisi terpenuhi, maka yang lain tidak akan ter-execute
if (score > 70) {
  console.log("Maaf, anda belum lulus ");
} else if (score == 70) {
  console.log("Nilai anda pas KKM!");
} else if (score == 0) {
  console.log("Maaf nilai anda 0");
} else {
  console.log("Selamat, nilai anda memenuhi passing grade. Anda Lulus!");
}
