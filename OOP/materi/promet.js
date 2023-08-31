// Properti merupakan bagian dari class yang mendefinisikan nilai-nilai yang terkandung dalam sbeuah instance class.

// Contohnya, jika Anda membuat class Car, properti adalah informasi yang sekiranya terdapat pada sebuah mobil seperti brand, color, maxSpeed, dan chasissNumber. Contoh lain, jika Anda membuat class Mail, secara umum propertinya adalah sender, receiver, subject, dan body.

// adakalanya nilai properti juga bisa didefinisikan di dalam class itu sendiri. Contohnya, kita tidak ingin pengguna menentukan nomor rangka mobil secara mandiri, maka kita bisa memberi nilai properti chassisNumber langsung di dalam fungsi constructor.

class Car {
    #chassisNumber = null; // enclosing class

    constructor(brand, color, maxSpeed) {
        this.brand          = brand;
        this.color          = color;
        this.maxSpeed       = maxSpeed;
        // this.chassisNumber  = chassisNumber;
        // Set a random chassis number
        // this.#chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
        this.#chassisNumber = this.#generateChassisNumber();
    }

    get chassisNumber() {
        return this.#chassisNumber;
    }

    set chassisNumber(chasissNumber) {
        console.log('you are not allowed to change the chassis number');
    }

     // Methods
    drive() {
        console.log(`${this.brand} ${this.color} is driving`);
    }
    
    reverse() {
        console.log(`${this.brand} ${this.color} is reversing`);
    }
    
    turn(direction) {
        console.log(`${this.brand} ${this.color} is turning ${direction}`);
    }

    #generateChassisNumber() {
        return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
    }
}

const car1 = new Car('BMW', 'red', 200);
const car2 = new Car('Audi', 'blue', 220);
const car3 = new Car('BMW', 'black', 250);

console.log(car1);
console.log(car2);
console.log(car3);

car1.drive();
car1.turn('left');
car1.reverse();

const car = new Car('BMW', 'red', 200);
console.log(car.chassisNumber);
car.chassisNumber = 'BMW-1';
console.log(car.chassisNumber);

class Mail {
    constructor(sender, receiver, subject, body) {
      this.sender = sender;
      this.receiver = receiver;
      this.subject = subject;
      this.body = body;
    }
    
     // Methods
  send() {
    console.log(`Sending mail from ${this.sender} to ${this.receiver}`);
  }
 
  sendLater(delay) {
    console.log(`Sending after ${delay} ms`);
 
    setTimeout(() => {
      this.send();
    }, delay);
  }
 
  saveAsDraft() {
    console.log('Saving mail as draft');
  }
  }