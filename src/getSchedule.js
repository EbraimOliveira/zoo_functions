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

function getSchedule(scheduleTarget) {
  const specieObject = species.find((specie) => specie.name === scheduleTarget);
  if (specieObject) {
    return specieObject.availability; // array de dias que o bixo pode ser visitado
  }
  const dayObject = Object.keys(hours).find((day) => day === scheduleTarget);
  if (dayObject) {
    return { [scheduleTarget]: createDay(scheduleTarget) };
  }
}

console.log(getSchedule('Sunday'));
module.exports = getSchedule;
