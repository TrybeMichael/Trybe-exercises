// player = {
//   name: "Marta",
//   lastName: "Silva",
//   age: 34,
//   medals: { 
//     golden: 2, 
//     silver: 3 
//   },
// };

// let food = ['hamburguer', 'bife', 'acarajé'];
// for (let value of food) {
//   console.log(value);
// };
// //resultado: hamburguer, bife, acarajé;

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for(let index in names){
  console.log('Olá',names[index])
}

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};
for(let key in car){
  console.log(key,':', car[key])
}

const trybeStudent = { 
  name: "Luiza",
  class: 15,
  favoriteSubject: "javascript",
  };
  
console.log(trybeStudent.name, 'ama', trybeStudent.favoriteSubject)  


  