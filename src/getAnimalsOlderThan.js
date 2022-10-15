const { species } = require('../data/zoo_data');

const getAnimalsOlderThan = (anySpecie, age) => {
  const specie = species.find((specie) => specie.name === anySpecie);
  const animalsList = specie.residents;
  const animalAges = animalsList.map((anyAnimal) => anyAnimal.age);
  if (animalAges.every((ageList) => ageList >= age)) {
    return true;
  }
  return false;
};

module.exports = getAnimalsOlderThan;
