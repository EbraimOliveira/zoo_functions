const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (!ids) {
    return [];
  }
  // const zooAnimals = data.species;
  // if (ids.length === 1) {
  //   return zooAnimals.filter((animal) => {
  //     if (animal.id === ids[0]) { return animal };
  //   })
  // };
  // return zooAnimals.map((animals) => {
  //   if (animals.id === ids) { return animals.id }
  // })
}
module.exports = getSpeciesByIds;
