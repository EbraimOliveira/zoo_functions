const data = require('../data/zoo_data');

const speciesList = data.species;
const countAnimals = (animal) => {
  if (!animal) {
    const allAnimalList = speciesList.reduce((acc, specie) =>
      acc = { ...acc, [specie.name]: specie.residents.length }, {});
    return allAnimalList;
  }
  if (Object.keys(animal).length === 1) {
    const specieObject = speciesList.find((specie) => Object.values(animal)[0] === specie.name);
    return specieObject.residents.length;
  }

  const specieObject = speciesList.find((specie) => Object.values(animal)[0] === specie.name);
  const animalsBySex = specieObject.residents.filter((resident) =>
    resident.sex === Object.values(animal)[1]);
  return animalsBySex.length;
};
// console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));

module.exports = countAnimals;
