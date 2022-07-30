const data = require('../data/zoo_data');

const zooAnimals = data.species;
// console.log(zooAnimals);
// const animalsId = zooAnimals.map((animal) => animal.id);
// console.log(animalsId);

function getSpeciesByIds(...ids) {
  // if (!ids) return [];
  return zooAnimals.filter((animalObject) => ids.find((id) => id === animalObject.id));
}

// console.log(getSpeciesByIds('e8481c1d-42ea-4610-8e11-1752cfc05a46'));

module.exports = getSpeciesByIds;
