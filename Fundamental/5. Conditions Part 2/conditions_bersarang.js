// part 1

var s = ``;
for (var i = 0; i <= 15; i++) {
  for (var o = 0; o <= i; o++) {
    s += `*`;
  }
  s += `\n`;
}
console.log(s);

// bisa di balik

var s = ``;
for (var i = 15; i >= 0; i--) {
  for (var o = 0; o <= i; o++) {
    s += `*`;
  }
  s += `\n`;
}
console.log(s);
