// Grading App

// 90 - 100 = A
// 80 - 89 = B
// 70 - 79 = C
// 60 - 69 = D
// 50 - 0 = E
// Di Atas 100 atau dibawah 0 = Nilai invalid

const score = 1;

if (score >= 90 && score <= 100) {
  console.log("Nilai A");
} else if (score >= 80 && score <= 89) {
  console.log("Nilai B");
} else if (score >= 70 && score <= 79) {
  console.log("Nilai C");
} else if (score >= 60 && score <= 69) {
  console.log("Nilai D");
} else if (score >= 0 && score <= 50) {
  console.log("Nilai D");
} else if (score > 100 || score < 0) {
  console.log("Invalid Nilai :(");
}
