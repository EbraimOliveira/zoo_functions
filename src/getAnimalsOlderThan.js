const { species } = require('../data/zoo_data');

const getAnimalsOlderThan = (anySpecie, paramAge) => species
  .find(({ name }) => name === anySpecie).residents
  .every(({ age }) => age >= paramAge);

// function getAnimalsOlderThan(animal, age) {
//   const specieObject = data.species.find((animals) => animals.name === animal);
//   const animalsList = specieObject.residents;
//   const animalAges = animalsList.map((anyAnimal) => anyAnimal.age);
//   if (animalAges.every((list) => list >= age)) {
//     return true;
//   }
//   return false;
// };

module.exports = getAnimalsOlderThan;
