// fungsi dapat didefinisikan dalam lingkup global atau di dalam fungsi lain

// Suatu fungsi yang dapat mengakses variabel di dalam lexical scope-nya disebut dengan closure.

// Lexical scope berarti pada sebuah fungsi bersarang, fungsi yang berada di dalam memiliki akses ke variabel di lingkup induknya.s

function init() {
    const name = 'Obi Wan';   // Variabel lokal di dalam scope fungsi init
      
    function greet() {      // Inner function, merupakan contoh closure
      console.log(`Halo, ${name}`);   // Memanggil variabel yang dideklarasikan di parent function
    }
  
    greet();
  }
  
  init();