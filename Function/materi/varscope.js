// Variabel yang dapat diakses dari seluruh script disebut dengan “globally scoped”, sementara variabel yang hanya diakses hanya pada fungsi tertentu disebut dengan “locally scoped”.

// Variabel JavaScript menggunakan fungsi untuk mengelola cakupannya. Jika variabel didefinisikan di luar fungsi, maka variabel tersebut bersifat global. Jika variabel didefinisikan di dalam fungsi, maka variabel bersifat lokal dan cakupannya hanya pada fungsi tersebut beserta turunannya.

// global variable, dapat diakses pada parent() dan child()
const a = 'a'; 
 
function parent() {
  // local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses di luar dari fungsi tersebut.
  const b = 'b'; 
    
  function child() {
    // local variable, dapat diakses hanya pada fungsi child().
    const c = 'c';
  }
}

function multiply(num) {
    const total = num * num;
    return total;
  }
  
  let total = 9;
  let number  = multiply(20);
  
  console.log(total)
  console.log(number);