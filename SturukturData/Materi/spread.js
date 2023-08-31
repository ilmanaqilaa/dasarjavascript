// Spread digunakan untuk menyebarkan nilai array.
// Spread operator dituliskan dengan tiga titik (...)

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

console.log("Sebelum di spread:", favorites);
console.log();
console.log("Sesudah di spread:", ...favorites);
console.log();

// Spread operator bekerja seperti meleburkan nilai array menjadi beberapa elemen menjadi beberapa elemen sesuai panjang nilai arraynya.
// sama seperti "console.log(favorites[0], favorites[1], favorites[2], favorites[3]);"

// Spread operator dapat digunakan untuk menggabungkan dua buah array ke dalam array baru.

// array baru
const others = ["Cake", "Pie", "Donut"];
// menggabungkan dua array tanpa spread
const allFavorites = [favorites, others];

console.log("Menggabungkan 2 array tanpa spread:\n", allFavorites);
console.log();

// Menggabungan dua array dengan spread
const allFavoritesSpread = [...favorites, ...others];
console.log("Menggabungkan 2 array menggunakan spread:\n", allFavoritesSpread);
console.log();