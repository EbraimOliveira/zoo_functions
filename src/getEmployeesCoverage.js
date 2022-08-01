const data = require('../data/zoo_data');

const { species } = data;
const { employees } = data;

const speciesList = () => {
  const responsibleForList = employees.map((employee) => employee.responsibleFor)
  return responsibleForList
}
console.log(speciesList())

const employeeReturnObject = (param) => ({
  id: [param].id,
  fullName: `${[param].firstName} ${[param].lastName}`,
  species: speciesList(),
  locations: locationsList(),
})

const getEmployeesCoverage = (param) => {
  const employeeObject = employees.find((emplyee) => {
    return emplyee.id === Object.values(param)[0] ||
      emplyee.firstName === Object.values(param)[0] ||
      emplyee.lastName === Object.values(param)[0]
  });
  if (employeeObject) {
    return employeeReturnObject;
  }
}

console.log(getEmployeesCoverage({ name: 'Spry' }));

module.exports = getEmployeesCoverage;
