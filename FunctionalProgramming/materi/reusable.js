//  Array Map merupakan fungsi bawaan dari array yang dapat dipanggil dari sebuah data bertipe array dan menerima satu buah callback function.

const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { return `${name}!`});

 console.log(newArray);

//  Array Filter

// fungsi bawaan dari data yang betipe array di javascript, berguna untuk melakukan proses penyaringan terhadap nilai array yang ada.

// cara kerja sama seperti map namun harus callback harus mengembalikan boolean

const trutyArray = [1, '', 0, null, 'Harry', 14].filter((item) => Boolean(item));

console.log(trutyArray);

// contoh lain seperti penyaringan siswa yang layak mendapatkan beasiswa berdasarkan nilai skor.

const students = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
  ];

  const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);

  console.log(eligibleForScholarshipStudents);

// Array reduce digunakan untuk mengesekusi fungsi reducer pada setiap elemen array dan hanya mengembalikan output satu nilai saja

// Contoh menjumlah total nilai siswa
const totalScore = students.reduce((acc, student) => acc + student.score, 0);

console.log(totalScore);

// Array Some fungsi yang akan menghasilkan boolean. 
// Nilai yang dihasilkan didasarkan pada pernyataan apakah ada setidaknya satu dari deretan nilai dalam array tersebut lolos berdasarkan kriteria yang kita tuliskan dalam callback function.

// Contoh penggunaannya misalkan kita ingin mengetahui apakah dalam deretan angka terdapat angka genap.

const array = [1, 2, 3, 4, 5];
const even = array.some(element => element % 2 === 0);

console.log(even);

// Array Find
//  digunakan untuk mencari apakah di dalam deretan nilai terdapat nilai yang sesuai dengan kriteria yang kita definisikan pada callback function. 

// find akan menghasilkan satu nilai dari elemen yang pertama kali ditemukan berdasarkan kriteria tertentu dan akan menghasilkan nilai undefine bila tidak ada kriteria yang terpenuhi pada item array.

// Mencari nama james

const findJames = students.find(student => student.name === 'James');
console.log(findJames);

// Array Sort
//  fungsi bawaan dari array yang berguna untuk melakukan pengurutan nilai dari sebuah deretan nilai. Secara default, fungsi sort akan mengubah semua nilai dalam deretan menjadi bentuk string dan mengurutkannya secara ascending.

// contoh:

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

const array1 = [1, 30, 4, 1000, 101, 121];
array1.sort();
console.log(array1);

const array2 = [1, 30, 4, 1000];

const compareNumber = (a, b) => {
  return a - b;
};
const sorting = array2.sort(compareNumber);
console.log(sorting);

// Array Every
// Fungsi bawaan dari array yang dignakan untuk mengecheck apakah semua nilai dari sebuah array sesuai dengan kriteria yanh didefinisikan
// array.every() menghasilkan boolean 

// Contoh mengecek apakah seorang ssiswa telah lulus semua uji materi

const scores = [70,85,90];
const minimumScore = 65;

const examPassed = scores.every(score => score >= minimumScore);
console.log(examPassed);

// Array.forEach()

// berfungsi untuk memanggil fungsi callback pada setiap iterasi index array. Berbeda dari fungsi array lain yang sudah kita bahas, fungsi ini tidak mengembalikan nilai apa pun. 

// mengubah sintaks perulangan berdasarkan jumlah array secara imperatif menjadi deklaratif.

// Imperatif

const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
 
for(let i = 0; i < names.length; i++) {
  console.log(`Hello, ${names[i]}!`);
}

// Deklaratif

names.forEach((name) => {
    console.log(`Hello, ${name}!`);
  });