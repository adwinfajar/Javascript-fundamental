// TUGAS BESAR :
// 1. MEMBUAT PERHITUNGAN MATEMATIKA
//     - Luas Lingkaran
//      - Luas segitiga
//      - Luas persegi panjang
//      - Luas jajar genjang

const luasLingkaran = (Jari_jari) => {
  console.log("Luas lingkaran dengan jari-jari " + Jari_jari + ` adalah = ` + 3.14 * Jari_jari * Jari_jari);
};

luasLingkaran(12);

const luasJajargenjang = (alas, tinggi) => {
  console.log(`Luas jajar genjang dengan alas ` + alas + ` dan tinggi ` + tinggi + ` adalah = ` + alas * tinggi);
};

luasJajargenjang(10, 10);

const luasSegitiga = (alas, tinggi) => {
  console.log(`Luas segitiga dengan ` + alas + `dan tinggi ` + tinggi + ` adalah = ` + (alas * tinggi) / 2);
};
luasSegitiga(7, 4);

// 2. Menghitung total gaji yang di dapat dalam satu bulan dengan input minimal :
//  - nama karyawan
//  - gaji perhari
//  - jumlah hari masuk kerja

const payRoll = (nama_karyawan, gaji_harian, jumlah_hari) => {
  console.log(`Nama = ` + nama_karyawan + ` bulan ini masuk sebanyak ` + jumlah_hari + `hari. Total gaji = ` + jumlah_hari * gaji_harian);
};

payRoll(`Joshua`, 100000, 26);

// Saya menggunakan arrow function untuk mengerjakan execise ini
