// Map merupakan tipe data yang menyimpan koleksi data dengan format key-value seperti object
// Yang membedakan adalah memperbolehkan key dengan tipe data apapun

const myMap = new Map([
    ['1', 'a String key'],
    [1, 'a number key'],
    [true, true]
  ]);
  
  console.log(myMap);
  console.log();
  
//   Mengambil nilai atau value dari map berdasaran key tertentu dengan method .get() lalu untuk menambahkan pasangan key-valuenya menggunakan method .set()

const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
  ]);
  
  console.log(capital.size);
  console.log(capital.get("London"));
  capital.set("New Delhi", "India");
  console.log(capital.size);
  console.log(capital.get("New Delhi"));
  