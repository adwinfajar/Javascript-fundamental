// aplikasi chat boleh bikin sim atau tidak
const age = 16;
const bisaNyetir = false;
const nyogok = true;

// kondisi boleh bikin sim
// 1. umur 17 tahun ke atas
// 2. harus bisa nyetir
// Kondisi syarat 2 (TRUE & TRUE)

// Simbol && (DAN)
//  TRUE & TRUE = TRUE
// TRUE & FALSE = FALSE
// FALSE & FALSE = FALSE

// if (age >= 17 && bisaNyetir == true) {
//   console.log("Boleh bikin SIM");
// } else {
//   console.log("Maaf belum bisa bikin SIM");
// }

// Jika ada salah satunya tidak memenuhi syarat, maka akan gagal

// Simbol || (ATAU)
//  TRUE & TRUE = TRUE
// TRUE & FALSE = TRUE
// FALSE & FALSE = FALSE

// if (age >= 17 && bisaNyetir) {
//   console.log("Boleh bikin SIM");
// } else {
//   console.log("Maaf belum bisa bikin SIM");
// }

// Ini case jika ada 2 kondisi harus terpenuhi, tapi jika ada satu jalan pintas bisa!

// if ((age >= 17 && bisaNyetir) || nyogok == true) {
//   console.log("Boleh bikin SIM");
// } else {
//   console.log("Maaf belum bisa bikin SIM");
// }


