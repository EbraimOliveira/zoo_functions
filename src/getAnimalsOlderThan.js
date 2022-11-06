const { species } = require('../data/zoo_data');

const getAnimalsOlderThan = (anySpecie, age) => {
  return species
    .find((specie) => specie.name === anySpecie).residents
    .map((anyAnimal) => anyAnimal.age)
    .every((ageList) => ageList >= age) ?
    true : false
};

module.exports = getAnimalsOlderThan;
