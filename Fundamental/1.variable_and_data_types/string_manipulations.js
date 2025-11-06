// let nama = "theoo";
// let umur = 23;
// let saldo = 10000;

// //bikin pesan
// //dengan template literal
// console.log(`halo nama saya ${nama}, umur saya ${umur} tahun. Isi saldo ATM saya sebesar ${saldo.toLocaleString()} rupiah`);
// //bisa juga untuk di sisipi fungsion atau properti dll
// console.log(`halo nama saya ${nama}, umur saya ${umur - 5} tahun. Isi saldo ATM saya sebesar ${saldo.toLocaleString()} rupiah`);

//exercise
// 1. Tampilkan Message dengan format dan data sebagai berikut
// - nama = theo
// - jumlah karakter pangkat 2 : 16
// - huruf pertama : T
// - huruf terakhir : o

// 2. Tampilkan sebuah nomor telefon dengan format sebagai berikut
// - nomor telfon : 0895422592574 -> 08954225XXXXX
// - hint coba pakai method .slice dan .padEnd

//excercise 1
// let Nama = "dwi";
// let namaPangkat2 = Nama.length ** 2;
// let hurufPertama = Nama.charAt().toLocaleUpperCase();
// let hurufTerakhir = Nama.slice(-1).toUpperCase();

// console.log(`nama = ${Nama}`);
// console.log(`Jumlah karakter pangkat 2 : ${namaPangkat2}`);
// // console.log(`Huruf Pertama : ${Nama.charAt().toUpperCase()}`);
// console.log(`Huruf Pertama : ${hurufPertama}`);
// // console.log(`Huruf Terakhir : ${Nama.slice(-1).toUpperCase()}`);
// console.log(`Huruf Terakhir : ${hurufTerakhir}`);

// // exercise 2
// let no_telfon = 0895422592574;
// let convertString = no_telfon.toString();
// let No_Telephone = 0 + convertString;

// console.log(`Nomor Telephone : ${No_Telephone.slice(0, -5).padEnd(No_Telephone.length, "X")}`);

// console.log(`Nomor Telefon : 0${no_telfon.toString().slice(0, 8).padEnd(12, "x")}`);
