// Untuk destructuring array menggunakan []
// Destructuring array bekerja berdasarkan posisi daripada penamaan propertinya

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
 
console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);
console.log();
 
// Jika ingin menggambil pada nilai ketiga maka Tidak perlu menyiapkan variabel lokal untuk menampung nilai array pertama kedua atau keempat

const [, , tiga] = favorites;

console.log(tiga);
console.log();

// Destructuring assignment pada array

let myFood = "Ice Cream";
let herFood = "Noodles";

[myFood, herFood] = favorites;

console.log(myFood);
console.log(herFood);