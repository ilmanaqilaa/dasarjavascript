// Function Parameter

const user = {
    id: 24,
    displayName: 'kren',
    fullName: 'Kylo Ren',
  };
  
  function introduce({displayName, fullName}) {
    console.log(`${displayName} is ${fullName}`);
  }
  
  introduce(user);
  console.log();
  
  /* output
  kren is Kylo Ren
  */

//   Default Parameter

function exponentsFormula(baseNumber, exponent = 2) {
    const result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
  }
  
  exponentsFormula(2);
  console.log();
  
  /* output
  2^undefined = NaN
  */

// Rest Parameter 
// Dengan rest parameter, kita dapat menggabungkan beberapa elemen menjadi satu array.

function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
      result += number;
    }
    return result;
  }
  
  console.log(sum(1, 2, 3, 4, 5, 5));
  
  /* output
  15
  */