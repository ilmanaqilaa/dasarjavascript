// Pure function merupakan konsep dari pembuatan fungsi yang mengharuskan fungsi untuk tidak bergantung terhadap nilai yang berada di luar fungsi atau parameternya

// let PI = 3.14;

// const hitungLuasLingkaran = (jariJari) => {
//   return PI * (jariJari * jariJari); 
// }

// console.log(hitungLuasLingkaran(4)); // 50.24

// PI = 5; // tidak sengaja nilai PI berubah

// console.log(hitungLuasLingkaran(4)); // 80

const hitungLuasLingkaran = (jariJari) => {
    return 3.14 * (jariJari * jariJari); 
  }
  
  console.log(hitungLuasLingkaran(4)); // 50.24
  console.log(hitungLuasLingkaran(4)); // 50.24
  console.log(hitungLuasLingkaran(8)); // 200.96
  console.log(hitungLuasLingkaran(8)); // 200.96
  console.log();

//   const createPersonWithAge = (age, person) => {
//     person.age = age;
//     return person;
//   };
  
//   const person = {
//     name: 'Bobo'
//   };
  
//   const newPerson = createPersonWithAge(18, person);
  
//   console.log({
//     person,
//     newPerson
//   });
  
const createPersonWithAge = (age, person) => {
    return { ...person, age };
  };
  
  const person = {
    name: 'Bobo'
  };
  
  const newPerson = createPersonWithAge(18, person);
  
  console.log({
    person,
    newPerson
  });
  

  