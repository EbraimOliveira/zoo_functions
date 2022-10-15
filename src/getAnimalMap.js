const data = require('../data/zoo_data');

function getAnimalMap(options) {
  if (!options) {
    return {
      NE: ['lions', 'giraffes'],
      NW: ['tigers', 'bears', 'elephants'],
      SE: ['penguins', 'otters'],
      SW: ['frogs', 'snakes'],
    };
  }

}

module.exports = getAnimalMap;
