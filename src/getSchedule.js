const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;

const getAnimalList = (day) => {
  const objectList = species.filter((specie) => specie.availability.includes(day));
  const animalList = objectList.map((object) => object.name);
  return animalList;
};

const createDay = (day) => {
  if (day === 'Monday') {
    return { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  }
  return {
    officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
    exhibition: getAnimalList(day),
  };
};

const teste = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: [
      'lions', 'tigers',
      'bears', 'penguins',
      'otters', 'frogs',
      'snakes', 'elephants',
    ],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

function getSchedule(scheduleTarget) {
  const specieObject = species.find((specie) => specie.name === scheduleTarget);
  if (specieObject) {
    return specieObject.availability; // array de dias que o bixo pode ser visitado
  }
  const dayObject = Object.keys(hours).find((day) => day === scheduleTarget);
  if (dayObject) {
    return { [scheduleTarget]: createDay(scheduleTarget) };
  }
  return teste;
}

console.log(getSchedule('Sunday'));
module.exports = getSchedule;
