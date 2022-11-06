const { species } = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => species
  .filter((specie) => ids
    .find((id) => id === specie.id));

module.exports = getSpeciesByIds;
