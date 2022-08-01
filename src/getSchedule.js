const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;

const getAnimalList = (day) => {
    const animalObjectList = species.filter((specie) => specie.availability.includes(day));
    const animalList = animalObjectList.map((object) => object.name);
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

const schedule = () =>
    Object.keys(hours).reduce((acc, day) => ({ ...acc, [day]: createDay(day) }), {});

function getSchedule(scheduleTarget) {
    const specieObject = species.find((specie) => specie.name === scheduleTarget);
    if (specieObject) {
        return specieObject.availability;
    }
    const dayObject = Object.keys(hours).find((day) => day === scheduleTarget);
    if (dayObject) {
        return { [scheduleTarget]: createDay(scheduleTarget) };
    }
    return schedule();
}

console.log(getSchedule('Sunday'));
module.exports = getSchedule;
