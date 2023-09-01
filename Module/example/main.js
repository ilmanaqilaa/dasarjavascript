const {
    cofeeStock,
    isCofeeMachineReady
} = require('./state')

console.log(cofeeStock);
console.log(isCofeeMachineReady);

// const makeCofee = (type, miligrams) => {
//     if (cofeeStock[type] >= miligrams) {
//         console.log("Kopi berhasil dibuat!");
//     } else {
//         console.log("Biji kopi habis!");
//     }
// }

// makeCofee("robusta", 90);