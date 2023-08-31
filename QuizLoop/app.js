const scoreChecker = require('./loop');

// Nilai skor yang ingin Anda uji
const scoreToCheck = 90;

// Panggil fungsi scoreChecker dan simpan hasilnya
const result = scoreChecker(scoreToCheck);

// Cetak hasil evaluasi
console.log(`Score ${scoreToCheck}: ${result}`);
