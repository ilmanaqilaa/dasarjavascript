// Untuk menangani error bisa menggunakan try dan catch

// try {
//     // kode
// } catch (error) {
//     // error handling
// }

// // contoh penerapan try dan catch

// try {
//     console.log("Awal blok try");
//     errorCode;
//     console.log("Akhir blok try");
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }

//  contoh penerapan try catch finally

try {
    console.log("Awal blok try");
    console.log("Akhir blok try");
} catch (error) {
    console.log("Baris ini diabaikan");
} finally {
    console.log("Akan tetap dieksekusi");
}