function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      console.log("angkot masih kosong");
      return false;
    }

    for (var i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;

        return this.penumpang;
      }
    }
  };
}

var angkot1 = new Angkot("gundul", ["banyumas", "tasik"], [], 0);
var angkot2 = new Angkot("jalaleya", ["bayumas", "gresik"], [], 0);

console.log(angkot1.penumpangNaik("adul"));
console.log(angkot1.penumpangNaik("dedi"));

console.log(angkot1.penumpangTurun("adul", 2000));

console.log(angkot1.kas);
console.log(angkot1.penumpangTurun("dedi", 3000));

console.log(angkot1.penumpang);
console.log(angkot1.kas);
