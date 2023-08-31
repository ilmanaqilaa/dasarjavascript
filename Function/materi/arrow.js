// Arrow function mirip seperti regular function secara perilaku, tetapi berbeda dalam penulisannya

// Sesuai namanya, fungsi didefinisikan menggunakan tanda panah atau fat arrow ( => ). Tentunya penulisan arrow function ini akan lebih singkat.

// // function declaration
// function sayHello(greet) {
//     console.log(`${greet}!`);
//   }
   
// function expression
// const sayName = function (name) {
//     console.log(`Nama saya ${name}`)
//   }

// Apabila fungsi hanya memiliki satu parameter, maka kita bisa menghapuskan tanda kurung seperti berikut:

// const sayName = name => {
//     console.log(`Nama saya ${name}`)
//   }
//   sayName("Leia");
//   console.log();

//   Namun, jika kita sama sekali tidak membutuhkan parameter, maka kita tetap menuliskan tanda kurung namun kosong seperti ini:

// const sayHello = () => {
//     console.log("Selamat pagi semuanya!")
//   };
  
//   sayHello();

//   Satu hal yang menarik, ketika body dari function hanya terdiri dari satu baris, kita bisa menghapus tanda kurung kurawal. Tentunya ini akan menghemat baris kode yang kita tulis.

const sayName = name => console.log(`Nama saya ${name}`);
sayName("Leia");

const sayHello = () => console.log("Selamat pagi semuanya!");
sayHello();

