const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants.reduce((acc, visitant) => {
    if (visitant.age < 18) {
      acc.child += 1;
    } else if (visitant.age >= 18 && visitant.age < 50) {
      acc.adult += 1;
    } else {
      acc.senior += 1;
    }
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  if (!entrants || Object.values(entrants).length === 0) {
    return 0;
  }
  return entrants.reduce((acc, visitant) => {
    if (visitant.age < 18) acc += data.prices.child;
    else if (visitant.age >= 18 && visitant.age < 50) acc += data.prices.adult;
    else acc += data.prices.senior;

    return parseFloat(acc.toFixed(2));
  }, 0);
}

module.exports = { calculateEntry, countEntrants };
