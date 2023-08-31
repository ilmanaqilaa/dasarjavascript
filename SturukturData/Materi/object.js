const character = {
    name: "Muhammad Ilman Aqilaa",
    npm: "1204055",
    "tempat tinggal": "Bandung",
}

console.log(`Halo nama saya ${character.name}`);
console.log(`Saya tinggal di ${character["tempat tinggal"]}`)

// Mengabungan 2 object dengan spread

const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };

const newObj = { ...obj1, ...obj2 };

console.log(newObj);

/* output
{ firstName: 'Obi-Wan', age: 30, lastName: 'Kenobi', gender: 'M' }
*/