const { employees, species } = require('../data/zoo_data');

const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstSpecieId = employees.find((employee) => employee.id === id).responsibleFor[0];
  const firstAnimalsList = species.find((specie) => specie.id === firstSpecieId).residents;
  const oldestAnimal = firstAnimalsList.sort((a, b) => b.age - a.age)[0];
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}
console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = getOldestFromFirstSpecies;
