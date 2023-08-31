// Set merupakan kumpulan nilai secara tidak berurutan dan juga tidak terindeks.
// Data di dalam set bersifat unik dan tidak ada duplikasi\


// Ketika di eksekusi set akan menghapus nilai yang duplikat
const numberSet = new Set([1, 4, 6, 4, 1]);

console.log(numberSet);
console.log();

// Menambah adata ke dalam set menggunakan method.add()

numberSet.add(5);
numberSet.add(10);
numberSet.add(6);

console.log(numberSet);