let myArray = ["Cokelat", 42.5, 22, true, "Programming"];

console.log(myArray[2]);
console.log();
// Method untuk manipulasi data dalam array

myArray.push('JavaScript');
console.log("Memanipulasi data dengan .push:", myArray);
console.log();

// mengeluarkan data atau elemen terakhir dari array
myArray.pop();
console.log("Mengeluarkan data atau elemen terakhir dari array:", myArray);
console.log();

// method .shift untuk mengeluarkan elemen pertama pada array

myArray.shift()
console.log("method .shift untuk mengeluarkan elemen pertama pada array:", myArray);
console.log();

// method .unshift() untuk menambahkan elemen baru di awal array

myArray.unshift("Apple");
console.log("method .unshift() untuk menambahkan elemen baru di awal arrays", myArray);
console.log();

// Menghapus data dari array (hanya menghapus isi data pada index tanpa menghapus elemen (posisi))

// delete myArray[1];
// console.log("Menghapus data dari array:", myArray);
// console.log();

//  method .splice() untuk menghapus elemen

myArray.splice(2,1);
console.log("method .splice() untuk menghapus elemen:", myArray);
console.log();

//  method .splice() untuk menambahkan elemen pada array. Dengan memberikan argumen ke-3 (atau selanjutnya, bersifat variadic)

myArray.splice(3, 0, "splice");
console.log(myArray);