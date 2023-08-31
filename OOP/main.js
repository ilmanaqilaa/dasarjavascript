// Object Oriented Programming adalah salah satu paradogma dalam pemrograman yang berfokus pada pembuatan sebuah objek dan interaksi dengan objek-objek tersebut.

// Pada OOP objek merupkan sebuah entitas yang terdiri dari dua hal yaitu properties dan method
// 1. Properti merupakan niali di dalam objek yang menyimpan informasi tentang objek tersebut.
// 2. Method merupakan fungsi yang menggambarkan aksi yang dpaat dilakukan oleh objek tersebut

// Analogi OOP

const car = {
    // properties
    brand: 'Ford',
    color: 'red',
    maxSpeed: 200,
    chassisNumber: 'f-1',

    // methods
    drive: () => {
        console.log('driving');
    },
    reverse: () => {
        console.log('reversing');
    },
    turn: () => {
        console.log('turning');
    }
}

console.log(car.brand);
console.log(car.color);
console.log(car.maxSpeed);
console.log(car.chassisNumber);

car.drive();
car.reverse();
car.turn();