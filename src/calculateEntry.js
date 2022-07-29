const data = require('../data/zoo_data');

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

const countEntrants = (entrants) => entrants.reduce((acc, visitant) => {
  if (visitant.age < 18) {
    acc.child += 1;
  } else if (visitant.age >= 18 && visitant.age < 50) {
    acc.adult += 1;
  } else {
    acc.senior += 1;
  }
  return acc;
}, { child: 0, adult: 0, senior: 0 });

const calculateEntry = (entrants) => {
  if (!entrants || Object.values(entrants).length === 0) {
    return 0; //! Object.values(entrants).length
  }
  // return entrants.reduce((acc, visitant) => {
  //   if (visitant.age < 18) acc += data.prices.child;
  //   else if (visitant.age >= 18 && visitant.age < 50) acc += data.prices.adult;
  //   else acc += data.prices.senior;
  //   },0)
  // return parseFloat(acc.toFixed(2));
  // return entrants.map((param) => param.age); // [5, 5 ,5 ,18 ,18 , 50]

  const visitantList = Object.values(countEntrants(entrants)); // [3, 2, 1]
  const sum = (visitantList[0] * data.prices.child)
    + (visitantList[1] * data.prices.adult)
    + (visitantList[2] * data.prices.senior);
  return sum;
};

// console.log(calculateEntry(entrants));
module.exports = { calculateEntry, countEntrants };
