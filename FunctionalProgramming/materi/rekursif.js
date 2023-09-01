// Rekursif merupakan teknik pada sebuah function yang memanggil dirinya sendiri

const countDown = start => {
    console.log(start);
    if(start > 0) countDown(start-1);
  };
  
  countDown(10);

// Dengan rekursif dapat membuat dan mengolah data struktur seperti Tree dan Array
