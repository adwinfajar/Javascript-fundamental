// ada 10 angkot,
// print angkot sedang beroprasi
// print angkot yang sedang tidak beroperasi

//EXERCISE 1
//  Angkot no.1-6 beroprasi (Angkot No.1 sedang beroprasi dengan baik - angkot no.6 sedang beroprasi dengan baik)
//  Angkot no.7-10 tidak beroprasi (Angkot no.7 sedang tidak beroprasi - Angkot no.10 sedang tidak beroprasi)
// NB : gunakan for & while

var noAngkot = 1;
var jumlahAngkot = 10;
var angkotBeroprasi = 6;
var angkotLembur = 9;

// while (noAngkot <= angkotBeroprasi) {
//   console.log(`Angkot No.` + noAngkot + ` sedang beroprasi dengan baik.`);
//   noAngkot++;
// }
// for (let i = angkotBeroprasi + 1; i <= 10; i++) {
//   console.log(`Angko No. ` + i + ` sedang tidak beroprasi`);
// }

//EXERCISE 2
//  Angkot no.1-6 beroprasi (Angkot No.1 sedang beroprasi dengan baik - angkot no.6 sedang beroprasi dengan baik)
//  Angkot no.7-10 tidak beroprasi (Angkot no.7 sedang tidak beroprasi - Angkot no.10 sedang tidak beroprasi)
// NB : gunakan for & if else

//2. gunakan for & if else
// for (let i = noAngkot; i <= 10; i++) {
//   if (i <= angkotBeroprasi) {
//     console.log(`Angkot no.` + i + ` sedang beroprasi dengan baik`);
//   } else {
//     console.log(`Angkot no.` + i + ` sedang tidak beroperasi`);
//   }
// }

//EXERCISE 3
//  Angkot no.1-6 beroprasi (Angkot No.1 sedang beroprasi dengan baik - angkot no.6 sedang beroprasi dengan baik)
// Angkot no.8 Lembur (Angkot no.8 sedang tidak lembur)
//  Angkot no.8-10 tidak beroprasi (Angkot no.7 sedang tidak beroprasi - Angkot no.10 sedang tidak beroprasi)(kecuali 8 karena sedang lembur)
// NB : gunakan for & else if

for (let i = noAngkot; i <= 10; i++) {
  if (i <= angkotBeroprasi) {
    console.log(`Angkot no.` + i + ` beroprasi dengan baik`);
  } else if (i === 7 || i === 9) {
    console.log(`angkot no.` + i + ` sedang lembur`);
  } else {
    console.log(`Angkot no.` + i + ` sedang tidak beroperasi`);
  }
}
