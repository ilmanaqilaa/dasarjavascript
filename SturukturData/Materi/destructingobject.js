// Penulisan sintaksis destructuring object pada ES6 menggunakan object literal ({ }) di sisi kiri dari operator assignment.

const profile = {
    firstName   : "John",
    lastName    : "Doe",
    age         : "18",
}

// // contoh object yang akan didestrukturisasi
// const {firstName, lastName, age} = profile;

// console.log(firstName, lastName, age);

// Contoh menentukan salah satu nilai yang ingin didekstrukturisasi.
// const {lastName} = profile;

let firstName = "Dimas";
let age = 20;
 
// menginisialisasi nilai baru melalui destructuring object
({ firstName, age } = profile);
 
console.log(firstName);
console.log(age);

