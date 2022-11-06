const data = require('../data/zoo_data');

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
    return 0;
  }
  const visitantList = Object.values(countEntrants(entrants));
  const sum = (visitantList[0] * data.prices.child)
    + (visitantList[1] * data.prices.adult)
    + (visitantList[2] * data.prices.senior);
  return sum;
};

module.exports = { calculateEntry, countEntrants };
