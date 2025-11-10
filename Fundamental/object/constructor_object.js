// Object literal
var Mahasiswa1 = {
  nama: "adwin fajar",
  nrp: 123123,
  email: "adwinfajar@gmail.com",
  jurusan: "Teknik Informatika",
};

var Mahasiswa2 = {
  nama: "udin jira",
  nrp: 321321,
  email: "jira@gmail.com",
  jurusan: "Teknik Informatika",
};

// bisa dipangil dengan funtion declaration

function createMahasiswa(nama, nrp, email, jurusan) {
  var Mahasiswa = {};
  Mahasiswa.nama = nama;
  Mahasiswa.nrp = nrp;
  Mahasiswa.email = email;
  Mahasiswa.jurusan = jurusan;

  return Mahasiswa;
}

var Mahasiswa3 = createMahasiswa("Izzudin", 123123, "izzudin@email.com", "teknik informatika");

// Menggunakan constructor
function Mhs(nama, nrp, email, jurusan) {
  // angep aja disini ada var this = {} *ini udah otomatis dari javascriptnya
  this.nama = nama;
  this.nrp = nrp;
  this.email = email;
  this.jurusan = jurusan;

  //   return this;
}

var Mahasiswa4 = new Mhs("erick thohir", 525262, "erick@tohir.com", "ketua himpunan");

console.log(Mahasiswa1, Mahasiswa2, Mahasiswa3, Mahasiswa4);
